'use client';
import { useAccount } from 'wagmi';
import MintWidget from 'src/components/MintWidget';
import WalletWrapper from 'src/components/WalletWrapper';
import Footer from 'src/components/Footer';
import { useReadContract } from 'wagmi';
import { mintABI, mintContractAddress } from '../../constants';

export default function ClaimPage() {
  const { address } = useAccount();

  const { data: stakedTokens } = useReadContract({
    address: mintContractAddress,
    abi: mintABI,
    functionName: 'stakedTokens',
    args: [address],
  });

  return (
    <div className="flex h-full w-96 max-w-full flex-col px-1 md:w-[1008px]">
      <section className="templateSection flex w-full flex-col items-center justify-center gap-4 rounded-xl px-2 py-4 md:grow">
        {address ? (
          <>
            <h2 className="text-2xl font-bold mb-4">Your current staked tokens: {stakedTokens ? stakedTokens.toString() : '0'}</h2>
            <MintWidget />
          </>
        ) : (
          <WalletWrapper
            className="w-[450px] max-w-full"
            text="Sign in to view and manage your tokens"
          />
        )}
      </section>
      <Footer />
    </div>
  );
}
