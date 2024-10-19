'use client';
import { useState, useEffect } from 'react';
import { useAccount, useBalance, useReadContract } from 'wagmi';
import { formatEther, parseEther } from 'viem';
import {
  Transaction,
  TransactionButton,
  TransactionStatus,
  TransactionStatusAction,
  TransactionStatusLabel,
} from '@coinbase/onchainkit/transaction';
import type {
  TransactionError,
  TransactionResponse,
} from '@coinbase/onchainkit/transaction';
import type { ContractFunctionParameters } from 'viem';
import {
  // Allow to use OPTIMISM_SEPOLIA_CHAIN_ID from getStakedBalance since it is same
  // OPTIMISM_SEPOLIA_CHAIN_ID,
  mintABI,
  mintContractAddress,
  WEIRD_CHAINLINK_BASE_SEPOLIA_CHAIN_ID,
} from '../mint';

import {
  OPTIMISM_SEPOLIA_CHAIN_ID,
  stakeContractAddress,
  getStakedBalanceABI,
} from '../getStakedBalance';

export default function MintWidget() {
  const { address } = useAccount();
  const [amount, setAmount] = useState('');
  const { data: balance } = useBalance({ address });
  const [stakedBalance, setStakedBalance] = useState<bigint | null>(null);

  const { data: stakedBalanceData } = useReadContract({
    address: stakeContractAddress,
    abi: getStakedBalanceABI,
    functionName: 'getStakedBalance',
    args: [address],
    chainId: OPTIMISM_SEPOLIA_CHAIN_ID,
  });

  useEffect(() => {
    if (stakedBalanceData) {
      setStakedBalance(stakedBalanceData as bigint);
    }
  }, [stakedBalanceData]);

  const contracts = [
    {
      address: mintContractAddress,
      abi: mintABI,
      functionName: 'mint',
      args: [
        WEIRD_CHAINLINK_BASE_SEPOLIA_CHAIN_ID, // destinationChainSelector
        '0xEF2F13cF6B7da9b3439c20844bd4483a88c50743', // destination contract receiver
        parseEther(amount || '0').toString(), // amount as string
        '0', // payFeesIn (0 for PayFeesIn.Native, as string)
      ],
    },
  ] as unknown as ContractFunctionParameters[];

  const handleError = (err: TransactionError) => {
    console.error('Minting error:', err);
  };

  const handleSuccess = (response: TransactionResponse) => {
    console.log('Minting successful', response);
  };

  return (
    <div className="w-4/5 mx-auto p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Mint Tokens</h2>
      <div className="mb-4">
        <label htmlFor="amount" className="block mb-2">Amount to Mint</label>
        <div className="relative">
          <input
            id="amount"
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount to mint"
            className="w-full p-2 pr-16 border rounded"
          />
          <button
            onClick={() => setAmount(balance ? formatEther(balance.value) : '0')}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-300 text-gray-700 px-2 py-1 rounded text-sm hover:bg-gray-400"
          >
            Max
          </button>
        </div>
      </div>
      <p className="mb-4">
        Amount can be minted: {stakedBalance ? formatEther(stakedBalance) : '0'} cfETH
      </p>
      <Transaction
        contracts={contracts}
        chainId={OPTIMISM_SEPOLIA_CHAIN_ID}
        onError={handleError}
        onSuccess={handleSuccess}
      >
        <TransactionButton
          className="w-full bg-[#088090] text-white p-2 rounded hover:bg-[#3dabba] disabled:bg-gray-300"
        >
        </TransactionButton>
        <TransactionStatus>
          <TransactionStatusLabel className="mt-2 text-center" />
          <TransactionStatusAction className="mt-2 text-center" />
        </TransactionStatus>
      </Transaction>
    </div>
  );
}
