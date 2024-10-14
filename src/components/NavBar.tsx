'use client'

import Link from 'next/link';
import { useAccount } from 'wagmi';
import ClownFishSvg from 'src/svg/ClownFishSvg';
import SignupButton from './SignupButton';
import LoginButton from './LoginButton';

export default function NavBar() {
  const { address } = useAccount();

  return (
    <nav className="w-full bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/stake" className="flex items-center">
            <ClownFishSvg />
            <span className="ml-2 text-gray-700 hover:text-gray-900 font-medium">Stake</span>
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          <SignupButton />
          {!address && <LoginButton />}
        </div>
      </div>
    </nav>
  );
}
