'use client';

import { useState } from 'react';
import CountdownTimer from './CountdownTimer';
import ConnectWalletModal from './ConnectWalletModal';

export default function PresaleWidget() {
  const [price] = useState(0.0037515);
  const [raised] = useState(10496415.35);
  const [purchased] = useState(0);
  const [stakeable] = useState(0);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);

  return (
    <div className="bg-black rounded-b-2x1 rounded-t-none p-4 w-full max-w-[800px] mx-auto border border-gray-700 shadow-2x1">
      <div className="text-center mb-3">
        <h3 className="text-[#e1550d] font-bold text-lg mb-1 tracking-wide uppercase">
          LAST CHANCE TO BUY $MIND PRESALE!
        </h3>
      </div>

      <div className="mb-3">
        <div className="bg-[#e1550d] rounded-lg py-2 px-4 mb-2">
          <div className="text-center text-white font-bold text-sm tracking-wide">
            PRESALE ENDS IN
          </div>
        </div>
        <CountdownTimer />
      </div>

      <div className="space-y-2 mb-3">
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-sm">USDT Raised:</span>
          <span className="text-[#e1550d] font-bold text-sm">
            ${raised.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
        </div>

        <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
          <div className="bg-gradient-to-r from-[#e1550d] to-[#e36d23] h-2 rounded-full transition-all duration-300" style={{ width: '85%' }}></div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-sm">1 $MIND =</span>
          <span className="text-[#e1550d] font-bold text-sm">${price}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-gray-400 text-sm">My purchased</span>
            <span className="text-gray-400 text-sm">$MIND =</span>
            <img
              src="/images/mind-token-icon.svg"
              alt="info"
              className="w-3 h-3"
            />
          </div>
          <span className="text-white font-semibold text-sm">{purchased}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-gray-400 text-sm">My stakeable</span>
            <span className="text-gray-400 text-sm">$MIND =</span>
            <img
              src="/images/mind-token-icon.svg"
              alt="info"
              className="w-3 h-3"
            />
          </div>
          <span className="text-white font-semibold text-sm">{stakeable}</span>
        </div>

        <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
          <div className="bg-[#e1550d] h-2 rounded-full transition-all duration-300" style={{ width: '65%' }}></div>
        </div>

        <div className="text-center py-1">
          <span className="text-[#e1550d] font-bold text-base">1 $MIND = ${price}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-2">
        <div className="flex flex-col items-center">
          <img
            src="/images/card-icon.svg"
            alt="Card"
            className="w-5 h-5 mb-1"
          />
          <button
            className="w-full bg-[#e1550d] hover:bg-[#e36d23] text-white font-bold py-2 px-3 rounded-lg text-sm transition-colors"
            onClick={() => setIsWalletModalOpen(true)}
          >
            BUY WITH CARD
          </button>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/images/eth-icon.svg"
            alt="Crypto"
            className="w-5 h-5 mb-1"
          />
          <button
            className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-3 rounded-lg text-sm transition-colors"
            onClick={() => setIsWalletModalOpen(true)}
          >
            BUY WITH CRYPTO
          </button>
        </div>
      </div>

      <div className="text-center mb-2">
        <a href="#" className="text-gray-400 text-sm underline hover:text-white transition-colors">
          Don't have a wallet?
        </a>
      </div>

      <div className="text-center">
        <div className="flex items-center justify-center gap-2">
          <span className="text-gray-400 text-xs">Powered by</span>
          <img
            src="/images/arrow-icon.svg"
            alt="W3P"
            className="h-3 w-auto"
          />
        </div>
      </div>

      {/* Connect Wallet Modal */}
      <ConnectWalletModal
        isOpen={isWalletModalOpen}
        onClose={() => setIsWalletModalOpen(false)}
      />
    </div>
  );
}
