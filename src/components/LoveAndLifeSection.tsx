import React, { useEffect, useRef, useState } from 'react';
import { STORIES } from '../data/weddingData';
import { StoryItem } from '../types';
import { MapPin, Calendar, Eye, Video, ExternalLink } from 'lucide-react';
import { Reveal } from './Reveal';
import Hls from 'hls.js';

interface LoveAndLifeProps {
  onSelectStory: (story: StoryItem) => void;
  isDarkMode?: boolean;
}

interface HlsVideoProps {
  src: string;
  poster?: string;
  className?: string;
  controls?: boolean;
  muted?: boolean;
  hoverUnmute?: boolean;
  unmuteOnClick?: boolean;
  disableFullscreen?: boolean;
}

export const HlsVideo: React.FC<HlsVideoProps> = ({
  src,
  poster,
  className,
  controls,
  muted: controlledMuted,
  hoverUnmute,
  unmuteOnClick,
  disableFullscreen,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [internalMuted, setInternalMuted] = useState(true);
  const [persistUnmute, setPersistUnmute] = useState(false);

  const muted = controlledMuted !== undefined ? controlledMuted : internalMuted;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = muted;
  }, [muted]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;
    const isHls = src.endsWith('.m3u8');

    if (isHls && Hls.isSupported()) {
      hls = new Hls({
        capLevelToPlayerSize: true,
        maxBufferLength: 10,
      });
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
    } else if (isHls && video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
    } else {
      video.src = src;
    }

    return () => {
      hls?.destroy();
    };
  }, [src]);

  const handleMouseEnter = () => {
    if (hoverUnmute) {
      setInternalMuted(false);
    }
  };

  const handleMouseLeave = () => {
    if (hoverUnmute && !persistUnmute) {
      setInternalMuted(true);
    }
  };

  const handleClick = () => {
    if (unmuteOnClick) {
      setPersistUnmute(true);
      setInternalMuted(false);
    }
  };

  return (
    <video
      ref={videoRef}
      poster={poster}
      autoPlay
      muted={muted}
      loop
      playsInline
      controls={controls}
      controlsList={disableFullscreen ? 'nofullscreen' : undefined}
      disablePictureInPicture={disableFullscreen}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    />
  );
};

export const LoveAndLifeSection: React.FC<LoveAndLifeProps> = ({
  onSelectStory,
  isDarkMode = true,
}) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="stories" className="bg-black py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Main Section Header */}
        <Reveal variant="fade" className="text-center mb-10">
          <h2
            className={`font-serif-main text-3xl sm:text-5xl lg:text-6xl font-normal tracking-wide uppercase ${
              isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'
            }`}
          >
            LOVE + LIFE
          </h2>
          <div
            className={`w-16 h-0.5 mx-auto mt-3 rounded-full ${
              isDarkMode ? 'bg-[#c8c0f5]' : 'bg-[#8b9a82]'
            }`}
          />
        </Reveal>

        {/* Sub Header Bar */}
        <div
          className={`flex flex-wrap items-center justify-between gap-3 border-b pb-3 mb-8 text-xs sm:text-sm font-sans-clean uppercase tracking-widest ${
            isDarkMode ? 'border-[#2e2a24] text-[#c8c0f5]' : 'border-[#e8e4dc] text-[#78876e]'
          }`}
        >
          <span>DERNIÈRES HISTOIRES</span>
          <span className="flex items-center gap-3 normal-case tracking-normal">
            <span className="text-[10px] uppercase tracking-widest opacity-60">Vidéaste :</span>
            <a
              href="https://21gproduction.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 text-xs font-sans-clean transition-colors hover:text-[#f4a8bf] ${
                isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              21 Grammes Production
              <ExternalLink className="w-3 h-3 opacity-50" />
            </a>
            <a
              href="https://www.mariages.net/video-mariage/21-grammes-production--e246685"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 text-xs font-sans-clean transition-colors hover:text-[#f4a8bf] ${
                isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
              }`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Mariages.net
            </a>
          </span>
          <span className={`${isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'}`}>
            {STORIES.length} récits
          </span>
        </div>

        {/* 2-Column Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {STORIES.map((story, idx) => (
            <Reveal
              key={story.id}
              variant={
                story.id === 'diane-et-théo' || story.id === 'justine-jérôme'
                  ? 'zoom'
                  : idx % 2 === 0
                    ? 'left'
                    : 'right'
              }
              delay={idx * 80}
              className={`group ${
                story.id === 'diane-et-théo' || story.id === 'justine-jérôme'
                  ? 'md:col-span-2'
                  : ''
              }`}
            >
              <button
                type="button"
                className="relative w-full overflow-hidden rounded-sm aspect-video shadow-xl cursor-pointer bg-transparent border-0 p-0 text-left"
                onClick={() => onSelectStory(story)}
                onMouseEnter={() => setHoveredId(story.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {story.video ? (
                  <HlsVideo
                    src={story.video}
                    className="w-full h-full object-cover pointer-events-none"
                    muted={hoveredId !== story.id}
                  />
                ) : (
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-7">
                  <p className="text-[10px] sm:text-xs font-sans-clean uppercase tracking-widest text-[#e8e4dc]/80 flex items-center gap-1.5 mb-1">
                    <Calendar className="w-3 h-3 text-[#c8c0f5]" />
                    <span>{story.date}</span>
                  </p>
                  <h3 className="font-serif-main text-xl sm:text-2xl text-[#c8c0f5]">
                    {story.title}
                  </h3>
                  <p className="text-xs font-sans-clean mt-1 flex items-center gap-1 text-[#e8e4dc]/80">
                    <MapPin className="w-3 h-3 text-[#c8c0f5]" />
                    <span>{story.location}</span>
                  </p>
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span
                    className={`px-4 py-2 rounded-full text-xs font-sans-clean font-medium flex items-center gap-2 shadow-md ${
                      isDarkMode
                        ? 'bg-[#25221d] text-[#e8e4dc] border border-[#3e3931]'
                        : 'bg-white/90 text-[#2c2b29]'
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Découvrir l'histoire</span>
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
