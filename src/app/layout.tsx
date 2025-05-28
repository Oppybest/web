import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MIND of Pepe Crypto Presale | Evolving AI Agent Meme Coin',
  description: 'MIND of Pepe is the best crypto presale for a meme coin AI Agent. $MIND holders receive benefits as it learns crypto, engages, and self-evolves over time.',
  keywords: 'crypto presale, AI agent, meme coin, blockchain, $MIND, Pepe, cryptocurrency',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
