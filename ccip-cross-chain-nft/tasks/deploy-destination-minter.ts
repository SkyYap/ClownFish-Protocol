import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment, TaskArguments } from "hardhat/types";
import { getPrivateKey, getProviderRpcUrl, getRouterConfig } from "./utils";
import { Wallet, ethers } from "ethers";
import { DestinationMinter, MyToken, MyToken__factory } from "../typechain-types";
import { Spinner } from "../utils/spinner";

task(`deploy-destination-minter`, `Deploys MyToken.sol and DestinationMinter.sol smart contracts`)
    .addOptionalParam(`router`, `The address of the Router contract on the destination blockchain`)
    .setAction(async (taskArguments: TaskArguments, hre: HardhatRuntimeEnvironment) => {
        const routerAddress = taskArguments.router ? taskArguments.router : getRouterConfig(hre.network.name).address;

        const privateKey = getPrivateKey();
        const rpcProviderUrl = getProviderRpcUrl(hre.network.name);

        const provider = new ethers.JsonRpcProvider(rpcProviderUrl);
        const wallet = new Wallet(privateKey);
        const deployer = wallet.connect(provider);

        const spinner: Spinner = new Spinner();

        console.log(`ℹ️  Attempting to deploy MyToken smart contract on the ${hre.network.name} blockchain using ${deployer.address} address`);
        spinner.start();

        const feeData = await provider.getFeeData();
        const gasPrice = feeData.gasPrice ? feeData.gasPrice * BigInt(2) : undefined;

        const myToken: MyToken = await hre.ethers.deployContract("MyToken", [], {
            gasPrice: gasPrice
        });
        await myToken.waitForDeployment();

        spinner.stop();
        console.log(`✅ MyToken contract deployed at address ${myToken.target} on the ${hre.network.name} blockchain`)

        console.log(`ℹ️  Attempting to deploy DestinationMinter smart contract on the ${hre.network.name} blockchain using ${deployer.address} address, with the Router address ${routerAddress} provided as constructor argument`);
        spinner.start();

        const destinationMinter: DestinationMinter = await hre.ethers.deployContract("DestinationMinter", [routerAddress, myToken.getAddress()]);
        await destinationMinter.waitForDeployment();

        spinner.stop();
        console.log(`✅ DestinationMinter contract deployed at address ${destinationMinter.target} on the ${hre.network.name} blockchain`);

        console.log(`ℹ️  Attempting to grant the minter role to the DestinationMinter smart contract`);
        spinner.start();

        const tx = await myToken.transferOwnership(destinationMinter.getAddress());
        await tx.wait();

        spinner.stop();
        console.log(`✅ DestinationMinter can now mint MyTokens. Transaction hash: ${tx.hash}`);
    })
