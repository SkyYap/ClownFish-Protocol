// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import {LinkTokenInterface} from "@chainlink/contracts/src/v0.8/shared/interfaces/LinkTokenInterface.sol";
import {IRouterClient} from "@chainlink/contracts-ccip/src/v0.8/ccip/interfaces/IRouterClient.sol";
import {Client} from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
import {Withdraw} from "./utils/Withdraw.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES HARDCODED VALUES FOR CLARITY.
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */
contract SourceMinter is Withdraw {
    enum PayFeesIn {
        Native,
        LINK
    }

    address immutable i_router;
    address immutable i_link;

    // Add new state variables
    mapping(address => uint256) public stakedBalances;

    event MessageSent(bytes32 messageId);
    event Staked(address indexed user, uint256 amount);

    constructor(address router, address link) {
        i_router = router;
        i_link = link;
        LinkTokenInterface(i_link).approve(i_router, type(uint256).max);
    }

    receive() external payable {}

    function mint(
        uint64 destinationChainSelector,
        address receiver,
        uint256 amount,
        PayFeesIn payFeesIn
    ) external {
        // Check if the user has enough staked balance
        require(stakedBalances[msg.sender] >= amount, "Insufficient staked balance");

        // Deduct the amount from the user's staked balance
        stakedBalances[msg.sender] -= amount;

        Client.EVM2AnyMessage memory message = Client.EVM2AnyMessage({
            receiver: abi.encode(receiver),
            data: abi.encodeWithSignature("mint(address,uint256)", msg.sender, amount),
            tokenAmounts: new Client.EVMTokenAmount[](0),
            extraArgs: "",
            feeToken: payFeesIn == PayFeesIn.LINK ? i_link : address(0)
        });

        uint256 fee = IRouterClient(i_router).getFee(
            destinationChainSelector,
            message
        );

        bytes32 messageId;

        if (payFeesIn == PayFeesIn.LINK) {
            // LinkTokenInterface(i_link).approve(i_router, fee);
            messageId = IRouterClient(i_router).ccipSend(
                destinationChainSelector,
                message
            );
        } else {
            messageId = IRouterClient(i_router).ccipSend{value: fee}(
                destinationChainSelector,
                message
            );
        }

        emit MessageSent(messageId);
    }

    // Add new stake function
    function stake() external payable {
        require(msg.value > 0, "Cannot stake 0 ETH");
        
        // Update staked balances
        stakedBalances[msg.sender] += msg.value;
        
        emit Staked(msg.sender, msg.value);
    }

    // Add this new function
    function getStakedBalance(address user) public view returns (uint256) {
        return stakedBalances[user];
    }
}
