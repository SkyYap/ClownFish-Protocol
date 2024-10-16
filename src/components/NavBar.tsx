'use client'

import Link from 'next/link';
import { useAccount } from 'wagmi';
import ClownFishSvg from 'src/svg/ClownFishSvg';
import SignupButton from './SignupButton';
import LoginButton from './LoginButton';
import SwitchChainButton from './SwitchChainButton';

export default function NavBar() {
  const { address } = useAccount();
  const WaterDropIcon = () => (
    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21.5c3.5 0 6.5-2.582 6.5-6 0-4-5-10.5-6.5-10.5S5.5 11.5 5.5 15.5c0 3.418 3 6 6.5 6z" />
    </svg>
  );

  return (
    <nav className="w-full bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/stake" className="flex items-center">
            <ClownFishSvg />
            <WaterDropIcon />
            <span className="text-gray-700 hover:text-gray-900 font-medium">Stake</span>
          </Link>
          <Link href="/claim" className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-gray-700 hover:text-gray-900 font-medium">Claim</span>
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          <SwitchChainButton />
          <SignupButton />
          {!address && <LoginButton />}
        </div>
      </div>
    </nav>
  );
}
