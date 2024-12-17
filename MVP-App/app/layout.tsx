import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/navbar';

//import { ThemeProvider } from "@/components/theme-provider"
import OnchainProvider from '@/providers/onchainProvider'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Meeting Value Protocol - Web3 Meetings Reimagined',
  description: 'A blockchain-based decentralized application for professional meeting management',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className} suppressHydrationWarning>
        <OnchainProvider>
          <Navbar />
          {children}
        </OnchainProvider>
      </body>
    </html>
  );
}