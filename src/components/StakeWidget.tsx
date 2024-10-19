'use client';
import React, { useState, useEffect } from 'react';
import { useAccount, useBalance } from 'wagmi';
import { formatEther, parseEther } from 'viem';
import type { Address, ContractFunctionParameters } from 'viem';
import { TokenChip } from '@coinbase/onchainkit/token';
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
import '@coinbase/onchainkit/styles.css';
import { TokenData, TokenType } from '../tokenchip';
import { stakeContractAddress, stakeABI, OPTIMISM_SEPOLIA_CHAIN_ID } from '../stake';

interface StakeWidgetProps {
  amount: string;
  onAmountChange: (newAmount: string) => void;
}

export default function StakeWidget({ amount, onAmountChange }: StakeWidgetProps) {
  const [tokenType, setTokenType] = useState<TokenType>('ETH');
  const { address } = useAccount();
  const { data: balance } = useBalance({ address });

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (newValue === '' || (/^\d*\.?\d*$/.test(newValue) && parseFloat(newValue) >= 0)) {
      onAmountChange(newValue);
      // console.log('newValue', newValue);
    }
  };

  const handleTokenTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTokenType(e.target.value as TokenType);
  };

  const handleError = (err: TransactionError) => {
    console.error('Staking error:', err);
  };

  const handleSuccess = (response: TransactionResponse) => {
    console.log('Successfully staked', response);
  };

  const contracts = [
    {
      address: stakeContractAddress,
      abi: stakeABI,
      functionName: 'stake',
      value: parseEther(amount || '0'),
    },
  ] as unknown as ContractFunctionParameters[];

  return (
    <div className="w-4/5 mx-auto p-4 border rounded-lg shadow-md ">
      <h2 className="text-xl font-bold mb-4">Stake Your Tokens</h2>
      <div className="mb-4">
        <label htmlFor="tokenType" className="block mb-2">Select Token Type</label>
        <div className="relative">
          <select
            id="tokenType"
            value={tokenType}
            onChange={handleTokenTypeChange}
            className="w-full p-2 pl-10 pr-10 border rounded appearance-none bg-white"
          >
            {Object.entries(TokenData).map(([key, token]) => (
              <option key={key} value={key}>
                {token.symbol}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
            <TokenChip token={TokenData[tokenType]} />
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="value" className="block mb-2">Amount</label>
        <div className="relative">
          <input
            id="value"
            type="text"
            value={amount}
            onChange={handleValueChange}
            className="w-full p-2 pr-16 border rounded"
            placeholder="0.0"
          />
          <button
            onClick={() => onAmountChange(balance ? formatEther(balance.value) : '0')}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-300 text-gray-700 px-2 py-1 rounded text-sm hover:bg-gray-400"
          >
            Max
          </button>
        </div>
      </div>
      <p className="mb-4">Balance: {balance ? formatEther(balance.value) : '0'} {tokenType}</p>
      <Transaction
        contracts={contracts}
        chainId={OPTIMISM_SEPOLIA_CHAIN_ID}
        onError={handleError}
        onSuccess={handleSuccess}
      >
        <TransactionButton className="w-full bg-[#088090] text-white p-2 rounded hover:bg-[#3dabba] disabled:bg-gray-300">
          {/* {`Stake ${tokenType}`} */}
        </TransactionButton>
        <TransactionStatus>
          <TransactionStatusLabel />
          <TransactionStatusAction />
        </TransactionStatus>
      </Transaction>
    </div>
  );
}
