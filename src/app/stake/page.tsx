'use client';
import { useAccount } from 'wagmi';
import { useState } from 'react';
import StakeWidget from 'src/components/StakeWidget';
import WalletWrapper from 'src/components/WalletWrapper';
import Footer from 'src/components/Footer';
import TransactionWrapper from 'src/components/TransactionWrapper';

export default function StakePage() {
  const { address } = useAccount();
  const [amount, setAmount] = useState<string>('0');

  const handleAmountChange = (newAmount: string) => {
    setAmount(newAmount);
    // console.log('amount', amount);
    // console.log('newAmount', newAmount);
  };

  return (
    <div className="flex h-full w-96 max-w-full flex-col px-1 md:w-[1008px]">
      <section className="templateSection flex w-full flex-col items-center justify-center gap-4 rounded-xl px-2 py-4 md:grow">
        {address ? (
          <StakeWidget amount={amount} onAmountChange={handleAmountChange} />
          // <TransactionWrapper address={address} />
        ) : (
          <WalletWrapper
            className="w-[450px] max-w-full"
            text="Sign in using Base Smart Wallet"
          />
        )}
      </section>
      <Footer />
    </div>
  );
}
