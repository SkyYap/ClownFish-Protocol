import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from '../config';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import ClownFishSvg from 'src/svg/ClownFishSvg';

import './global.css';
import '@coinbase/onchainkit/styles.css';
import '@rainbow-me/rainbowkit/styles.css';

const OnchainProviders = dynamic(
  () => import('src/components/OnchainProviders'),
  {
    ssr: false,
  },
);

const NavBar = dynamic(() => import('../components/NavBar'), { ssr: false });

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
      <body className="flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/19.jpg')" }}>
        <OnchainProviders>
          <NavBar />
          <main className="container mx-auto mt-4">
            {children}
          </main>
        </OnchainProviders>
      </body>
    </html>
  );
}
