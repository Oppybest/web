'use client';

export default function ScrollingLogos() {
  const logos = [
    "/images/logo1.svg",
    "/images/logo2.svg",
    "/images/logo3.svg",
    "/images/logo4.svg",
    "/images/logo5.svg",
    "/images/logo6.svg",
    "/images/logo7.svg"
  ];

  return (
    <div className="w-full overflow-hidden bg-gradient-to-b from-[#c8c4c1] to-[#d2cecb] py-4">
      <div className="scroll-container">
        <div className="scroll-content">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <img
              key={`first-${index}`}
              src={logo}
              alt={`Brand Logo ${index + 1}`}
              className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity flex-shrink-0"
            />
          ))}
          {/* Second set for seamless loop */}
          {logos.map((logo, index) => (
            <img
              key={`second-${index}`}
              src={logo}
              alt={`Brand Logo ${index + 1}`}
              className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity flex-shrink-0"
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scroll-container {
          overflow: hidden;
          width: 100%;
        }

        .scroll-content {
          display: flex;
          align-items: center;
          gap: 4rem;
          animation: scroll-left 30s linear infinite;
          width: calc(200% + 4rem);
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
