'use client';

import { useState } from 'react';
import { CheckCircle, Circle, Clock } from 'lucide-react';
import ConnectWalletModal from './ConnectWalletModal';

interface RoadmapItem {
  phase: string;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'upcoming';
  date: string;
}

export default function RoadmapSection() {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);

  const roadmapItems: RoadmapItem[] = [
    {
      phase: 'Phase 1',
      title: 'Presale Launch',
      description: 'Launch of $MIND presale with staking rewards and community building',
      status: 'current',
      date: 'Q1 2025'
    },
    {
      phase: 'Phase 2',
      title: 'AI Agent Development',
      description: 'Complete development of autonomous AI agent with wallet integration',
      status: 'upcoming',
      date: 'Q2 2025'
    },
    {
      phase: 'Phase 3',
      title: 'Alpha Terminal',
      description: 'Release of MIND Alpha Terminal for advanced analytics and insights',
      status: 'upcoming',
      date: 'Q2 2025'
    },
    {
      phase: 'Phase 4',
      title: 'DEX Launch',
      description: 'Token launch on decentralized exchanges with full liquidity',
      status: 'upcoming',
      date: 'Q3 2025'
    },
    {
      phase: 'Phase 5',
      title: 'Full AI Integration',
      description: 'Complete AI ecosystem with DeFi interactions and community governance',
      status: 'upcoming',
      date: 'Q4 2025'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-8 h-8 text-secondary" />;
      case 'current':
        return <Clock className="w-8 h-8 text-primary pulse-glow" />;
      default:
        return <Circle className="w-8 h-8 text-muted" />;
    }
  };

  return (
    <section id="techmap" className="py-16" style={{backgroundColor: 'rgb(210, 206, 203)'}}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-black">
            &gt; ROADMAP
          </h2>
          <p className="text-lg text-black">
            The future of AI-powered crypto intelligence
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent opacity-30"></div>

          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div
                key={item.phase}
                className={`flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:space-x-8`}
              >
                {/* Content */}
                <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center mb-4 lg:mb-0`}>
                  <div className="card-gradient rounded-lg p-6 hover:scale-105 transition-transform duration-300">
                    <div className="text-sm text-black font-bold mb-2">{item.phase}</div>
                    <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
                    <p className="text-black mb-4">{item.description}</p>
                    <div className="text-sm text-black font-semibold">{item.date}</div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10 flex items-center justify-center lg:w-2/12 mb-4 lg:mb-0">
                  <div className="bg-background rounded-full p-2 border-4 border-primary/20">
                    {getStatusIcon(item.status)}
                  </div>
                </div>

                {/* Spacer */}
                <div className="lg:w-5/12 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card-gradient rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-black mb-4">
              Join the AI Revolution
            </h3>
            <p className="text-black mb-6">
              Be part of the first autonomous AI agent ecosystem in crypto.
              Early supporters get exclusive access to insights and staking rewards.
            </p>
            <button
              className="btn-primary px-8 py-3 font-semibold text-lg rounded-lg"
              onClick={() => setIsWalletModalOpen(true)}
            >
              BUY $MIND NOW
            </button>
          </div>
        </div>
      </div>

      {/* Connect Wallet Modal */}
      <ConnectWalletModal
        isOpen={isWalletModalOpen}
        onClose={() => setIsWalletModalOpen(false)}
      />
    </section>
  );
}
