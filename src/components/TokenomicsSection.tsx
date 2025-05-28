import Image from 'next/image';

export default function TokenomicsSection() {
  const tokenomicsData = [
    { label: 'Presale', percentage: 40, color: 'bg-primary' },
    { label: 'Staking Rewards', percentage: 25, color: 'bg-secondary' },
    { label: 'Liquidity', percentage: 20, color: 'bg-accent' },
    { label: 'Team & Development', percentage: 10, color: 'bg-muted' },
    { label: 'Marketing', percentage: 5, color: 'bg-primary/60' },
  ];

  return (
    <section id="tokenomics" className="py-16" style={{backgroundColor: 'rgb(210, 206, 203)'}}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-black">
            &gt; TOKENOMICS
          </h2>
          <p className="text-lg text-black">
            Total Supply: 100,000,000,000 $MIND
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Chart */}
          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="rgba(121, 127, 130, 0.2)"
                  strokeWidth="8"
                />
                {tokenomicsData.map((item, index) => {
                  const offset = tokenomicsData
                    .slice(0, index)
                    .reduce((acc, curr) => acc + curr.percentage, 0);
                  const strokeDasharray = `${item.percentage * 2.51} ${(100 - item.percentage) * 2.51}`;
                  const strokeDashoffset = -offset * 2.51;

                  return (
                    <circle
                      key={item.label}
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke={`rgb(${item.color === 'bg-primary' ? '210 85 24' :
                        item.color === 'bg-secondary' ? '52 195 88' :
                        item.color === 'bg-accent' ? '194 124 49' :
                        item.color === 'bg-muted' ? '121 127 130' : '210 85 24'} / 0.8)`}
                      strokeWidth="8"
                      strokeDasharray={strokeDasharray}
                      strokeDashoffset={strokeDashoffset}
                      className="transition-all duration-1000 hover:stroke-current"
                    />
                  );
                })}
              </svg>

              {/* Center Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-black">$MIND</div>
                  <div className="text-sm text-black">Token</div>
                </div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="space-y-4">
            {tokenomicsData.map((item) => (
              <div key={item.label} className="flex items-center justify-between p-4 card-gradient rounded-lg hover:scale-105 transition-transform duration-300">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${item.color}`} />
                  <span className="font-medium text-black">{item.label}</span>
                </div>
                <span className="text-xl font-bold text-black">{item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center card-gradient rounded-lg p-6">
            <div className="text-3xl font-bold text-black mb-2">223%</div>
            <div className="text-sm text-black">Staking APY</div>
          </div>

          <div className="text-center card-gradient rounded-lg p-6">
            <div className="text-3xl font-bold text-black mb-2">$0.0037515</div>
            <div className="text-sm text-black">Current Price</div>
          </div>

          <div className="text-center card-gradient rounded-lg p-6">
            <div className="text-3xl font-bold text-black mb-2">5 Days</div>
            <div className="text-sm text-black">Presale Ends</div>
          </div>
        </div>
      </div>
    </section>
  );
}
