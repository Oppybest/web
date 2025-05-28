'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

interface Video {
  id: string;
  thumbnail: string;
  title: string;
  url: string;
}

export default function VideoSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos: Video[] = [
    {
      id: '1',
      thumbnail: 'https://img.youtube.com/vi/ChQIACqwnLI/maxresdefault.jpg',
      title: 'MIND OF PEPE THE BEST CRYPTO',
      url: 'https://www.youtube.com/watch?v=ChQIACqwnLI'
    },
    {
      id: '2',
      thumbnail: 'https://img.youtube.com/vi/PaTHzEtrG_o/maxresdefault.jpg',
      title: 'CRYPTO AI AGENT TUTORIAL',
      url: 'https://www.youtube.com/watch?v=PaTHzEtrG_o'
    },
    {
      id: '3',
      thumbnail: 'https://img.youtube.com/vi/38YyfZjTl3g/maxresdefault.jpg',
      title: 'MIND OF PEPE AI AGENT',
      url: 'https://www.youtube.com/watch?v=38YyfZjTl3g'
    },
    {
      id: '4',
      thumbnail: 'https://img.youtube.com/vi/38YyfZjTl3g/maxresdefault.jpg',
      title: 'NEW AI AGENT',
      url: 'https://www.youtube.com/watch?v=38YyfZjTl3g'
    },
    {
      id: '5',
      thumbnail: 'https://img.youtube.com/vi/ChQIACqwnLI/maxresdefault.jpg',
      title: 'BEST AI AGENT CRYPTO',
      url: 'https://www.youtube.com/watch?v=ChQIACqwnLI'
    },
    {
      id: '6',
      thumbnail: 'https://img.youtube.com/vi/PaTHzEtrG_o/maxresdefault.jpg',
      title: 'AI AGENT REVOLUTION',
      url: 'https://www.youtube.com/watch?v=PaTHzEtrG_o'
    },
    {
      id: '7',
      thumbnail: 'https://img.youtube.com/vi/ChQIACqwnLI/maxresdefault.jpg',
      title: 'CRYPTO FUTURE WITH AI',
      url: 'https://www.youtube.com/watch?v=ChQIACqwnLI'
    },
    {
      id: '8',
      thumbnail: 'https://img.youtube.com/vi/38YyfZjTl3g/maxresdefault.jpg',
      title: 'MIND PEPE ANALYSIS',
      url: 'https://www.youtube.com/watch?v=38YyfZjTl3g'
    }
  ];

  const handleVideoClick = (videoId: string, url: string) => {
    setSelectedVideo(videoId);
    window.open(url, '_blank');
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-black">
            &gt; WHAT IS AN AI AGENT?
          </h2>
          <p className="text-lg text-black max-w-4xl mx-auto">
            $MIND goes well beyond just being the best crypto presale in 2025. The MIND of Pepe ICO gives holders
            access to insights gathered by the AI Agent itself. Check out this video about AI agents and how MIND will
            rule the blockchain / AI crossover.
          </p>
        </div>

        {/* Auto-scrolling Video Container */}
        <div className="video-scroll-container">
          <div className="video-scroll-content">
            {/* First set of videos */}
            {videos.map((video) => (
              <div
                key={`first-${video.id}`}
                className="relative group cursor-pointer rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 flex-shrink-0"
                style={{ width: '280px' }}
                onClick={() => handleVideoClick(video.id, video.url)}
              >
                <div className="aspect-video relative">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                  <div className="video-overlay absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <Play className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-bold text-sm">{video.title}</h3>
                </div>
              </div>
            ))}
            {/* Second set for seamless loop */}
            {videos.map((video) => (
              <div
                key={`second-${video.id}`}
                className="relative group cursor-pointer rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 flex-shrink-0"
                style={{ width: '280px' }}
                onClick={() => handleVideoClick(video.id, video.url)}
              >
                <div className="aspect-video relative">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                  <div className="video-overlay absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <Play className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-bold text-sm">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .video-scroll-container {
          overflow: hidden;
          width: 100%;
        }

        .video-scroll-content {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          animation: video-scroll-left 40s linear infinite;
          width: calc(200% + 1.5rem);
        }

        @keyframes video-scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .video-scroll-content:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
