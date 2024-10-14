import React, { useState } from 'react';
import { useAccount, useBalance } from 'wagmi';
import { formatEther } from 'viem';
import { TokenChip } from '@coinbase/onchainkit/token';
import '@coinbase/onchainkit/styles.css';
import { TokenData, TokenType } from '../tokenchip';

const StakeWidget: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [tokenType, setTokenType] = useState<TokenType>('ETH');
  const { address } = useAccount();
  const { data: balance } = useBalance({ address });

  const handleStake = () => {
    if (!amount || parseFloat(amount) <= 0) return;
    console.log(`Staking ${amount} ${tokenType}`);
    // Here you would typically interact with a contract
    // For now, we'll just log the action
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || (/^\d*\.?\d*$/.test(value) && parseFloat(value) >= 0)) {
      setAmount(value);
    }
  };

  const handleTokenTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTokenType(e.target.value as TokenType);
  };

  return (
    <div className="w-4/5 mx-auto p-4 border rounded-lg shadow-md">
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
        <label htmlFor="amount" className="block mb-2">Amount</label>
        <div className="relative">
          <input
            id="amount"
            type="text"
            value={amount}
            onChange={handleAmountChange}
            className="w-full p-2 pr-16 border rounded"
            placeholder="0.0"
          />
          <button
            onClick={() => setAmount(balance ? formatEther(balance.value) : '0')}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-300 text-gray-700 px-2 py-1 rounded text-sm hover:bg-gray-400"
          >
            Max
          </button>
        </div>
      </div>
      <p className="mb-4">Balance: {balance ? formatEther(balance.value) : '0'} {tokenType}</p>
      <button
        onClick={handleStake}
        disabled={!amount || parseFloat(amount) <= 0}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-300"
      >
        Stake {tokenType}
      </button>
    </div>
  );
};

export default StakeWidget;
