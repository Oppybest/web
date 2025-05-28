'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import ConnectWalletModal from './ConnectWalletModal';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);

  const navItems = [
    { label: '[ HOME ]', href: '#home' },
    { label: '[ ABOUT ]', href: '#about' },
    { label: '[ TECHMAP ]', href: '#techmap' },
    { label: '[ TOKENOMICS ]', href: '#tokenomics' },
    { label: '[ HOW TO BUY ]', href: '#how-to-buy' },
    { label: '[ FAQ ]', href: '#faq' },
    { label: '[ STAKING ]', href: '#staking' },
  ];

  return (
    <header className="relative z-40 backdrop-blur-md border-b border-border" style={{backgroundColor: 'rgba(210, 206, 203, 0.95)'}}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo with Arrow and Blinking Orange Rectangle */}
          <div className="flex items-center space-x-1">
            <span className="text-xl font-bold text-[#e1550d]">&gt;</span>
            <span className="text-xl font-bold text-[#e1550d]">MIND of Pepe</span>
            <div className="w-2 h-4 bg-[#e1550d] animate-pulse"></div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center space-x-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground nav-link"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="hidden md:flex items-center space-x-1">
              <Image
                src="/images/language-globe.svg"
                alt="English"
                width={16}
                height={16}
                className="w-4 h-4"
              />
              <span className="text-sm font-medium text-black">en</span>
            </div>

            {/* Buy Button */}
            <Button
              className="bg-[#e1550d] hover:bg-[#d14609] text-white px-6 py-2 font-bold rounded"
              onClick={() => setIsWalletModalOpen(true)}
            >
              BUY $MIND
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              
            >
              {isMenuOpen ? <X className="w-6 h-10" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Status Indicators */}
        <div className="flex items-center space-x-4 py-2">
          <div className="flex items-center space-x-2 bg-white px-3 py-1 rounded border border-gray-200">
            <div className="w-2 h-2 bg-[#12f142]"></div>
            <span className="text-xs font-bold text-[#e1550d]">AI AGENT IS LIVE</span>
          </div>
          <div className="flex items-center space-x-2 bg-white px-3 py-1 rounded border border-gray-200">
            <div className="w-2 h-2 bg-[#7e7c7d]"></div>
            <span className="text-xs font-bold text-[#e1550d]">TERMINAL COMING SOON</span>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* Connect Wallet Modal */}
      <ConnectWalletModal
        isOpen={isWalletModalOpen}
        onClose={() => setIsWalletModalOpen(false)}
      />
    </header>
  );
}
