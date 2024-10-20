// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import {CCIPReceiver} from "@chainlink/contracts-ccip/src/v0.8/ccip/applications/CCIPReceiver.sol";
import {Client} from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
// import {MyNFT} from "./MyNFT.sol";
import {MyToken} from "./MyToken.sol";

/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES HARDCODED VALUES FOR CLARITY.
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */
contract DestinationMinter is CCIPReceiver {
    MyToken token;

    event MintCallSuccessfull();

    constructor(address router, address tokenAddress) CCIPReceiver(router) {
        token = MyToken(tokenAddress);
    }

    function _ccipReceive(
        Client.Any2EVMMessage memory message
    ) internal override {
        (bool success, ) = address(token).call(message.data);
        require(success);
        emit MintCallSuccessfull();
    }
}
