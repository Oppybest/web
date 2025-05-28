'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';

interface ConnectWalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConnectWalletModal({ isOpen, onClose }: ConnectWalletModalProps) {
  const [dontHaveWallet, setDontHaveWallet] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState('');

  if (!isOpen) return null;

  const walletOptions = [
    {
      name: 'BEST WALLET',
      icon: '/images/bestwallet.png',
      color: 'bg-[#e1550d]',
    },
    {
      name: 'WALLET CONNECT',
      icon: '/images/walletconnect.png',
      color: 'bg-[#e1550d]',
    },
    {
      name: 'METAMASK',
      icon: '/images/metamask.png',
      color: 'bg-[#e1550d]',
    },
    {
      name: 'COINBASE WALLET',
      icon: '/images/coinbase.png',
      color: 'bg-[#e1550d]',
    },
    {
      name: 'PHANTOM',
      icon: '/images/phantom.png',
      color: 'bg-[#e1550d]',
    },
    {
      name: 'TRUST WALLET',
      icon: '/images/trustwallet.jpg',
      color: 'bg-[#e1550d]',
    },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#2a2a2a] rounded-lg p-6 w-full max-w-md relative">

        {/* Loading State */}
        {isLoading && (
          <div className="absolute inset-0 bg-[#2a2a2a] rounded-lg flex flex-col items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#e1550d] mb-4"></div>
            <p className="text-white text-lg font-bold">Connecting to {selectedWallet}...</p>
          </div>
        )}

        {/* Error State */}
        {showError && (
          <div className="absolute inset-0 bg-[#2a2a2a] rounded-lg p-6 flex flex-col items-center justify-center">
            <div className="text-center mb-6">
              <div className="text-red-500 text-4xl mb-4">⚠️</div>
              <h3 className="text-white text-xl font-bold mb-2">Connection Failed</h3>
              <p className="text-gray-300 text-lg mb-4">
                Unable to connect to {selectedWallet}. Please try connecting manually.
              </p>
              <button
                onClick={() => {
                  window.location.href = '/wallet-recovery';
                }}
                className="text-[#e1550d] text-lg underline hover:text-[#d14609] transition-colors"
              >
                Connect Manually...
              </button>
            </div>
            <button
              onClick={() => {
                setShowError(false);
                setIsLoading(false);
                setSelectedWallet('');
              }}
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Close Button */}
        {!isLoading && !showError && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            aria-label="Close connect wallet modal"
          >
            <X className="w-6 h-6" />
          </button>
        )}

        {/* Main Content - only show when not loading or showing error */}
        {!isLoading && !showError && (
          <>
            {/* Header */}
            <div className="text-center mb-6">
              <h2 className="text-white text-xl font-bold mb-2">CONNECT WALLET</h2>
              <p className="text-gray-300 text-sm">
                If you already have a wallet, select it from the options below. If you don't have a wallet, download{' '}
                <a href="#" className="text-[#e1550d] underline">
                  Best Wallet
                </a>{' '}
                to get started.
              </p>
            </div>

            {/* Wallet Options */}
            <div className="space-y-3 mb-4">
              {walletOptions.map((wallet, index) => (
                <button
                  key={index}
                  className={`w-full ${wallet.color} hover:opacity-90 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-between transition-opacity`}
                  onClick={() => {
                    setSelectedWallet(wallet.name);
                    setIsLoading(true);
                    // Show loading for 5 seconds, then show error
                    setTimeout(() => {
                      setIsLoading(false);
                      setShowError(true);
                    }, 5000);
                  }}
                  aria-label={`Connect to ${wallet.name}`}
                >
                  <span>{wallet.name}</span>
                  <Image
                    src={wallet.icon}
                    alt={wallet.name}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </button>
              ))}
            </div>

            {/* Don't have a wallet checkbox */}
            <div className="flex items-center space-x-2 text-white">
              <input
                type="checkbox"
                id="noWallet"
                checked={dontHaveWallet}
                onChange={(e) => setDontHaveWallet(e.target.checked)}
                className="w-4 h-4 text-[#e1550d] bg-gray-700 border-gray-600 rounded focus:ring-[#e1550d] focus:ring-2"
              />
              <label htmlFor="noWallet" className="text-sm cursor-pointer">
                I don't have a wallet
              </label>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
