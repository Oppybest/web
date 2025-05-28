'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Does MIND of Pepe make data-driven decisions?",
      answer: "The more complex and complexity and versatility of the crypto market demand tools that simplify and automate decision-making, which MIND excels at."
    },
    {
      question: "How does the AI benefit from broader adoption?",
      answer: "As more users adopt $MIND, the platform benefits from network effects, with its insights becoming even more robust and valuable over time."
    },
    {
      question: "How is $MIND a game changer? What makes it a worthwhile crypto presale?",
      answer: "MIND of Pepe makes AI-driven tools accessible to individuals, a feature that is poised to disrupt traditional finance and crypto investment strategies."
    },
    {
      question: "What is a crypto presale, and how does it work?",
      answer: "A cryptocurrency presale, or ICO, allows participants early access to the purchase of tokens, at the lowest possible price prior to the token launching on..."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16" style={{backgroundColor: 'rgb(210, 206, 203)'}}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Title and Image */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-black">
              &gt; HAVE ANY QUESTIONS?
            </h2>
            <p className="text-lg text-black mb-8">
              [ BEST CRYPTO TOKEN PRESALE IS LIVE ]
            </p>
            <p className="text-black mb-8">
              If you have additional questions related to the MIND crypto presale, you might find your answer either on the FAQ page, or in our Whitepaper. There, you'll find answers to key questions about the MIND of Pepe AI agent.
            </p>

            <div className="flex justify-center">
              <Image
                src="/images/faq-character.webp"
                alt="MIND of Pepe Question"
                width={300}
                height={300}
                className="max-w-full h-auto float-animation"
              />
            </div>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[rgb(var(--dark-section))] rounded-lg overflow-hidden border border-primary/20"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-primary/10 transition-colors"
                >
                  <span className="font-semibold text-black pr-4">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-black leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
