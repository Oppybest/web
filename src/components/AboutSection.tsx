import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-16" style={{backgroundColor: 'rgb(210, 206, 203)'}}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-black">
              &gt; WHAT IS MIND OF PEPE
            </h2>
            <p className="text-lg font-semibold text-black mb-6">
              [ BEST CRYPTO TOKEN PRESALE IS LIVE ]
            </p>

            <div className="space-y-6 text-black leading-relaxed">
              <p>
                MIND of Pepe is an autonomous AI Agent, and represents the pinnacle of the convergence
                of artificial intelligence and blockchain technologies. It is not merely a representation of the
                democratization of information, but a fully functional self-evolving AI agent, whose
                insights are available only to $MIND holders. This sets MIND of Pepe apart as the best
                crypto presale of 2025.
              </p>

              <p>
                2024 saw incredible advancements in AI technology, which not only permeated but outright
                disrupted most of the major global industries. The rise of AI agents in the crypto space
                has been remarkable, but not entirely shocking. However, never before has there been an AI
                agent altcoin to invest in 2025 that has offered crypto presale buyers an opportunity to
                get in on the ground floor.
              </p>

              <p>
                Gone are the days where only insiders and whales gain access to early market insights.
                MIND of Pepe brings it & exposes it to gather intelligence, scout trends early, and deliver
                them to buyers of the $MIND crypto presale in 2025.
              </p>

              <p>
                The crypto presale platform and staking mechanism of MIND of Pepe also allow early
                buyers a chance to stake their tokens before the full blockchain release, and prior to the
                official launch of the MIND of Pepe AI agent and Alpha terminal.
              </p>

              <p>
                As always, due diligence is encouraged when researching which crypto to buy in 2025.
                Read our whitepaper for more details.
              </p>

              <p className="text-foreground font-semibold">
                If you're hooked on $MIND, refer a friend to earn additional rewards.
              </p>
            </div>
          </div>

          {/* Right Column - Character Image */}
          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="/images/about-animation.gif"
                alt="MIND of Pepe AI Agent"
                width={500}
                height={600}
                className="w-full max-w-md h-auto float-animation"
              />

              {/* Floating elements around the character */}
              <div className="absolute top-10 left-10 w-4 h-4 bg-secondary rounded-full pulse-glow" />
              <div className="absolute top-20 right-10 w-3 h-3 bg-primary rounded-full pulse-glow" style={{ animationDelay: '0.5s' }} />
              <div className="absolute bottom-20 left-5 w-5 h-5 bg-accent rounded-full pulse-glow" style={{ animationDelay: '1s' }} />
              <div className="absolute bottom-32 right-8 w-2 h-2 bg-secondary rounded-full pulse-glow" style={{ animationDelay: '1.5s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
