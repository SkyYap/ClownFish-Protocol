'use client';
import { useAccount } from 'wagmi';
import StakeWidget from 'src/components/StakeWidget';
import WalletWrapper from 'src/components/WalletWrapper';
import Footer from 'src/components/Footer';

export default function StakePage() {
  const { address } = useAccount();

  return (
    <div className="flex h-full w-96 max-w-full flex-col px-1 md:w-[1008px]">
      <section className="templateSection flex w-full flex-col items-center justify-center gap-4 rounded-xl px-2 py-4 md:grow">
        {address ? (
          <StakeWidget />
        ) : (
          <WalletWrapper
            className="w-[450px] max-w-full"
            text="Sign in to stake"
          />
        )}
      </section>
      <Footer />
    </div>
  );
}
