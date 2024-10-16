'use client'

import Link from 'next/link';
import { useAccount } from 'wagmi';
import ClownFishSvg from 'src/svg/ClownFishSvg';
import SignupButton from './SignupButton';
import LoginButton from './LoginButton';
import SwitchChainButton from './SwitchChainButton';

export default function NavBar() {
  const { address } = useAccount();

  return (
    <nav className="w-full bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/stake" className="flex items-center">
            <ClownFishSvg />
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
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
