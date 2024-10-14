import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from '../config';
import Link from 'next/link';

import './global.css';
import '@coinbase/onchainkit/styles.css';
import '@rainbow-me/rainbowkit/styles.css';
import dynamic from 'next/dynamic';
import ClownFishSvg from 'src/svg/ClownFishSvg';
import SignupButton from '../components/SignupButton';
import LoginButton from '../components/LoginButton';

const OnchainProviders = dynamic(
  () => import('src/components/OnchainProviders'),
  {
    ssr: false,
  },
);

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: 'Onchain App Template',
  description: 'Built with OnchainKit',
  openGraph: {
    title: 'Onchain App Template',
    description: 'Built with OnchainKit',
    images: [`${NEXT_PUBLIC_URL}/vibes/vibes-19.png`],
  },
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-center">
        <OnchainProviders>
          <nav className="w-full bg-white p-4">
            <div className="container mx-auto flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <Link href="/" className="flex items-center">
                  <ClownFishSvg />
                </Link>
                <Link href="/stake" className="flex items-center text-gray-700 hover:text-gray-900 font-medium">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Stake
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <SignupButton />
                <LoginButton />
              </div>
            </div>
          </nav>
          <main className="container mx-auto mt-4">
            {children}
          </main>
        </OnchainProviders>
      </body>
    </html>
  );
}
