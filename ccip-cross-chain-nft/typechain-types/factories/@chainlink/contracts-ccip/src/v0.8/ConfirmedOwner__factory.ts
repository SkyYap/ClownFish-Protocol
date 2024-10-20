/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type {
  ConfirmedOwner,
  ConfirmedOwnerInterface,
} from "../../../../../@chainlink/contracts-ccip/src/v0.8/ConfirmedOwner";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561000f575f80fd5b50604051610a04380380610a04833981810160405281019061003191906102b3565b805f8073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036100a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161009890610338565b60405180910390fd5b815f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610123576101228161012b60201b60201c565b5b5050506103be565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610199576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610190906103a0565b60405180910390fd5b8060015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff165f8054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127860405160405180910390a350565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61028282610259565b9050919050565b61029281610278565b811461029c575f80fd5b50565b5f815190506102ad81610289565b92915050565b5f602082840312156102c8576102c7610255565b5b5f6102d58482850161029f565b91505092915050565b5f82825260208201905092915050565b7f43616e6e6f7420736574206f776e657220746f207a65726f00000000000000005f82015250565b5f6103226018836102de565b915061032d826102ee565b602082019050919050565b5f6020820190508181035f83015261034f81610316565b9050919050565b7f43616e6e6f74207472616e7366657220746f2073656c660000000000000000005f82015250565b5f61038a6017836102de565b915061039582610356565b602082019050919050565b5f6020820190508181035f8301526103b78161037e565b9050919050565b610639806103cb5f395ff3fe608060405234801561000f575f80fd5b506004361061003f575f3560e01c806379ba5097146100435780638da5cb5b1461004d578063f2fde38b1461006b575b5f80fd5b61004b610087565b005b610055610216565b6040516100629190610449565b60405180910390f35b61008560048036038101906100809190610490565b61023d565b005b60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610116576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161010d90610515565b60405180910390fd5b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050335f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505f60015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a350565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610245610251565b61024e816102e0565b50565b5f8054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146102de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102d59061057d565b60405180910390fd5b565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361034e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610345906105e5565b60405180910390fd5b8060015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff165f8054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127860405160405180910390a350565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6104338261040a565b9050919050565b61044381610429565b82525050565b5f60208201905061045c5f83018461043a565b92915050565b5f80fd5b61046f81610429565b8114610479575f80fd5b50565b5f8135905061048a81610466565b92915050565b5f602082840312156104a5576104a4610462565b5b5f6104b28482850161047c565b91505092915050565b5f82825260208201905092915050565b7f4d7573742062652070726f706f736564206f776e6572000000000000000000005f82015250565b5f6104ff6016836104bb565b915061050a826104cb565b602082019050919050565b5f6020820190508181035f83015261052c816104f3565b9050919050565b7f4f6e6c792063616c6c61626c65206279206f776e6572000000000000000000005f82015250565b5f6105676016836104bb565b915061057282610533565b602082019050919050565b5f6020820190508181035f8301526105948161055b565b9050919050565b7f43616e6e6f74207472616e7366657220746f2073656c660000000000000000005f82015250565b5f6105cf6017836104bb565b91506105da8261059b565b602082019050919050565b5f6020820190508181035f8301526105fc816105c3565b905091905056fea264697066735822122024dff2711c837162de386523460d3680f0bbc0272e5b24837d9d6afd85e20a4e64736f6c63430008140033";

type ConfirmedOwnerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConfirmedOwnerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ConfirmedOwner__factory extends ContractFactory {
  constructor(...args: ConfirmedOwnerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    newOwner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(newOwner, overrides || {});
  }
  override deploy(
    newOwner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(newOwner, overrides || {}) as Promise<
      ConfirmedOwner & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ConfirmedOwner__factory {
    return super.connect(runner) as ConfirmedOwner__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConfirmedOwnerInterface {
    return new Interface(_abi) as ConfirmedOwnerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ConfirmedOwner {
    return new Contract(address, _abi, runner) as unknown as ConfirmedOwner;
  }
}
