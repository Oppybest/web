'use client';

import PresaleWidget from './PresaleWidget';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-[#d2cecb] to-[#c8c4c1] relative overflow-hidden py-8">
      {/* Background Animation - Reduced Height */}
      <div className="absolute inset-0 opacity-30 h-[600px]">
        <img
          src="/images/background.gif"
          alt="Background Animation"
          className="w-full h-full object-cover"
          onLoad={() => console.log('Background GIF loaded')}
          onError={(e) => console.error('Background GIF failed:', e)}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* LEFT Side - Main Content + Presale Widget */}
          <div className="flex flex-col space-y-4">
            {/* AI Agent Title and Badge */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-black text-2xl lg:text-4xl font-bold">
                  &gt; THE AI AGENT
                </span>
                <div className="bg-[#e1550d] text-white px-4 py-1 rounded text-sm font-bold">
                  % STAKING REWARDS
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="text-xl lg:text-2xl font-bold text-black tracking-tight">
                [ $MIND: THE BEST CRYPTO PRESALE ]
              </h1>

              {/* Description */}
              <div className="space-y-2 text-black text-sm lg:text-base">
                <p className="font-semibold">
                  REAL-TIME INTELLIGENCE W/ HIVE-MIND ANALYSIS.
                </p>
                <p>
                  EXCLUSIVELY ACCESSIBLE TO <span className="text-[#e1550d] font-bold">$MIND</span> HOLDERS.
                </p>
                <p className="font-medium">
                  SECURE YOUR TOKENS BEFORE PRESALE CLOSES.
                </p>
              </div>
            </div>

            {/* Scrolling Banner Above Presale Widget - RESTORED */}
            <div className="w-full max-w-md">
              <div className="bg-[#a8a4a1] rounded-t-xl overflow-hidden relative h-8 mb-0">
                <div className="absolute whitespace-nowrap text-black font-bold text-xs flex items-center h-full animate-marquee">
                  <span className="px-4">
                    Buy $MIND of Pepe now // The best crypto presale for AI Agents // Huge early staking rewards // Buy $MIND of Pepe now // The best crypto presale for AI Agents // Huge early staking rewards //
                  </span>
                </div>
              </div>

              {/* Presale Widget - positioned directly below banner */}
              <div className="-mt-0" id="presale-widget">
                <PresaleWidget />
              </div>
            </div>

            {/* Trust and Safety Audits */}
            <div className="text-center">
              <p className="text-black font-bold text-lg mb-3 tracking-wide">
                TRUST AND SAFETY AUDITS
              </p>

              <div className="flex justify-center gap-6">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img
                    src="/images/coinsult-logo.svg"
                    alt="Coinsult"
                    className="h-8 w-auto"
                    onLoad={() => console.log('Coinsult logo loaded')}
                    onError={(e) => console.error('Coinsult logo failed:', e)}
                  />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img
                    src="/images/solidproof-logo.svg"
                    alt="SolidProof"
                    className="h-8 w-auto"
                    onLoad={() => console.log('SolidProof logo loaded')}
                    onError={(e) => console.error('SolidProof logo failed:', e)}
                  />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT Side - Large 3D Character with Info Card - Moved Up */}
          <div className="relative flex flex-col items-center justify-start -mt-8">
            {/* Large 3D Character Animation with Effects */}
            <div className="relative">
              {/* Main Character */}
              <img
                src="/images/ai-agent.png"
                alt="AI Agent Character"
                className="w-[550px] h-[550px] lg:w-[650px] lg:h-[650px] object-contain relative z-10"
                onLoad={() => console.log('Main character loaded')}
                onError={(e) => console.error('Main character failed:', e)}
              />

              {/* Orange Circular Indicators positioned across the character */}
              <div className="absolute top-16 left-12 w-4 h-4 bg-[#e1550d] rounded-full animate-pulse shadow-lg shadow-[#e1550d]/50"></div>
              <div className="absolute top-28 right-16 w-3 h-3 bg-[#e1550d] rounded-full animate-pulse shadow-lg shadow-[#e1550d]/50 animation-delay-300"></div>
              <div className="absolute top-40 left-20 w-5 h-5 bg-[#e1550d] rounded-full animate-pulse shadow-lg shadow-[#e1550d]/50 animation-delay-600"></div>
              <div className="absolute bottom-28 right-12 w-3 h-3 bg-[#e1550d] rounded-full animate-pulse shadow-lg shadow-[#e1550d]/50 animation-delay-900"></div>
              <div className="absolute bottom-36 left-16 w-4 h-4 bg-[#e1550d] rounded-full animate-pulse shadow-lg shadow-[#e1550d]/50 animation-delay-1200"></div>

              {/* Sparkle/Glitter Effects on hands and body */}
              <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-ping opacity-75"></div>
              <div className="absolute top-24 left-6 w-1 h-1 bg-white rounded-full animate-ping opacity-60 animation-delay-500"></div>
              <div className="absolute top-32 right-20 w-2 h-2 bg-white rounded-full animate-ping opacity-75 animation-delay-700"></div>
              <div className="absolute top-36 right-24 w-1 h-1 bg-white rounded-full animate-ping opacity-60 animation-delay-1000"></div>
              <div className="absolute bottom-24 left-12 w-2 h-2 bg-white rounded-full animate-ping opacity-75 animation-delay-300"></div>
              <div className="absolute bottom-20 left-8 w-1 h-1 bg-white rounded-full animate-ping opacity-60 animation-delay-800"></div>
              <div className="absolute bottom-32 right-16 w-2 h-2 bg-white rounded-full animate-ping opacity-75 animation-delay-400"></div>
              <div className="absolute bottom-28 right-20 w-1 h-1 bg-white rounded-full animate-ping opacity-60 animation-delay-1100"></div>

              {/* Additional glowing effect around character */}
              <div className="absolute inset-0 bg-gradient-radial from-[#e1550d]/10 via-transparent to-transparent rounded-full animate-pulse"></div>

              {/* SELF-SOVEREIGN AI AGENT Info Card - Overlaid on character */}
              <div className="absolute bottom-12 right-6 bg-[#18181c] rounded-lg p-4 max-w-xs text-center border border-[#e1550d]/20 shadow-2xl z-20">
                <h3 className="text-[#e1550d] font-bold text-lg mb-2 tracking-wide">
                  SELF-SOVEREIGN AI AGENT
                </h3>
                <p className="text-white text-sm leading-relaxed">
                  MIND of Pepe owns and controls his own wallet, interacts with dApps, and manages X and Telegram communities for the benefit of $MIND holders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
