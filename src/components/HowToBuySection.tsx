import { Wallet, CreditCard, Coins, Gift } from 'lucide-react';

export default function HowToBuySection() {
  const steps = [
    {
      icon: <Wallet className="w-12 h-12" />,
      title: 'Create Wallet',
      description: 'Set up a crypto wallet or use our card payment option for easy purchase',
      color: 'text-primary'
    },
    {
      icon: <CreditCard className="w-12 h-12" />,
      title: 'Add Funds',
      description: 'Add USDT, ETH, BNB to your wallet or use credit/debit card directly',
      color: 'text-secondary'
    },
    {
      icon: <Coins className="w-12 h-12" />,
      title: 'Buy $MIND',
      description: 'Enter the amount and confirm your purchase to receive $MIND tokens',
      color: 'text-accent'
    },
    {
      icon: <Gift className="w-12 h-12" />,
      title: 'Stake & Earn',
      description: 'Stake your tokens for 223% APY rewards and unlock AI insights',
      color: 'text-primary'
    }
  ];

  return (
    <section id="how-to-buy" className="py-16" style={{backgroundColor: 'rgb(210, 206, 203)'}}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-black">
            &gt; HOW TO BUY
          </h2>
          <p className="text-lg text-black">
            Get your $MIND tokens in 4 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center card-gradient rounded-lg p-6 hover:scale-105 transition-transform duration-300 group"
            >
              {/* Step Number */}
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <span className="text-2xl font-bold text-primary">
                    {index + 1}
                  </span>
                </div>

                {/* Icon */}
                <div className={`${step.color} mx-auto flex justify-center group-hover:scale-110 transition-transform`}>
                  {step.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-black mb-3">
                {step.title}
              </h3>
              <p className="text-black leading-relaxed">
                {step.description}
              </p>

              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary/50">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-black">
            Accepted Payment Methods
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              { name: 'USDT', icon: '/images/usdt-icon.svg' },
              { name: 'ETH', icon: '/images/eth-icon.svg' },
              { name: 'BNB', icon: '/images/bnb-icon.svg' },
              { name: 'Card', icon: '/images/card-icon.svg' }
            ].map((method) => (
              <div
                key={method.name}
                className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-primary/5 transition-colors"
              >
                <img
                  src={method.icon}
                  alt={method.name}
                  className="w-12 h-12"
                />
                <span className="text-sm font-medium text-black">
                  {method.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-12 card-gradient rounded-lg p-6 text-center">
          <h4 className="text-lg font-bold text-black mb-3">
            🔒 Secure & Audited
          </h4>
          <p className="text-black">
            Our smart contracts have been audited by leading security firms.
            Your funds are protected by industry-standard security measures.
          </p>
        </div>
      </div>
    </section>
  );
}
