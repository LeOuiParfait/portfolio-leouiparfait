import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Star } from 'lucide-react';

import { DjPartner } from '../types';
import { HlsVideo } from './LoveAndLifeSection';
import { Reveal } from '../components/Reveal';
import { BowDivider } from '../components/BowDivider';

interface DjShowcaseProps {
  dj: DjPartner;
  index: number;
  isDarkMode?: boolean;
  showDivider?: boolean;
}

const renderPink = (text: string) => {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;
  while (remaining.length > 0) {
    const start = remaining.indexOf('{{');
    if (start === -1) {
      parts.push(<React.Fragment key={key++}>{remaining}</React.Fragment>);
      break;
    }
    if (start > 0) {
      parts.push(<React.Fragment key={key++}>{remaining.slice(0, start)}</React.Fragment>);
      remaining = remaining.slice(start);
    }
    const end = remaining.indexOf('}}');
    if (end === -1) {
      parts.push(<React.Fragment key={key++}>{remaining}</React.Fragment>);
      break;
    }
    parts.push(
      <span key={key++} className="text-[#f4a8bf] font-semibold">
        {remaining.slice(2, end)}
      </span>
    );
    remaining = remaining.slice(end + 2);
  }
  return parts;
};

const renderDescription = (text: string) => {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    const boldStart = remaining.indexOf('**');
    const pinkStart = remaining.indexOf('{{');

    if (boldStart === -1 && pinkStart === -1) {
      parts.push(<React.Fragment key={key++}>{remaining}</React.Fragment>);
      break;
    }

    const next =
      pinkStart !== -1 && (boldStart === -1 || pinkStart < boldStart)
        ? { type: 'pink' as const, index: pinkStart }
        : { type: 'bold' as const, index: boldStart };

    if (next.index > 0) {
      parts.push(<React.Fragment key={key++}>{remaining.slice(0, next.index)}</React.Fragment>);
      remaining = remaining.slice(next.index);
    }

    if (next.type === 'bold') {
      const end = remaining.indexOf('**', 2);
      if (end === -1) {
        parts.push(<React.Fragment key={key++}>{remaining}</React.Fragment>);
        break;
      }
      parts.push(
        <strong key={key++} className="font-semibold">
          {renderPink(remaining.slice(2, end))}
        </strong>
      );
      remaining = remaining.slice(end + 2);
    } else {
      const end = remaining.indexOf('}}');
      if (end === -1) {
        parts.push(<React.Fragment key={key++}>{remaining}</React.Fragment>);
        break;
      }
      parts.push(
        <span key={key++} className="text-[#f4a8bf] font-semibold">
          {remaining.slice(2, end)}
        </span>
      );
      remaining = remaining.slice(end + 2);
    }
  }

  return parts;
};

export const DjShowcase: React.FC<DjShowcaseProps> = ({
  dj,
  index,
  isDarkMode = true,
  showDivider = true,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          y: 40,
          opacity: 0,
          duration: 1.1,
          ease: 'power3.out',
          delay: 0.1,
        });
      }

      if (imageRef.current) {
        gsap.from(imageRef.current, {
          y: 30,
          opacity: 0,
          scale: 0.97,
          duration: 1.2,
          ease: 'power3.out',
          delay: 0.25,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [dj.id]);

  return (
    <section ref={sectionRef} className="relative">
      {/* =====================================================
          PRÉSENTATION DU DJ
      ====================================================== */}

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* En-tête */}
        <div className="text-center">
          <p
            className={`text-[10px] sm:text-xs uppercase tracking-[0.25em] font-sans-clean mb-3 ${
              isDarkMode ? 'text-[#807b71]' : 'text-[#8a8780]'
            }`}
          >
            DJ interne · Le Oui Parfait · {String(index + 1).padStart(2, '0')}
          </p>

          <h2
            ref={titleRef}
            className={`font-serif-main text-4xl sm:text-5xl lg:text-7xl leading-[1.05] font-normal tracking-tight ${
              isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'
            }`}
          >
            {dj.name}
          </h2>

          <p
            className={`mt-3 font-script text-3xl sm:text-4xl ${
              isDarkMode ? 'text-[#f4a8bf]' : 'text-[#78876e]'
            }`}
          >
            {dj.tagline}
          </p>

          {dj.rating === 5 && (
            <div className="mt-4 flex items-center justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-amber-400 fill-amber-400"
                />
              ))}
              <span
                className={`ml-2 text-xs sm:text-sm font-sans-clean ${
                  isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
                }`}
              >
                5/5
              </span>
            </div>
          )}

          {dj.website && (
            <a
              href={dj.website}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-3 inline-flex items-center gap-1.5 text-xs sm:text-sm font-sans-clean underline underline-offset-4 transition-colors ${
                isDarkMode
                  ? 'text-[#c8c0f5] hover:text-[#e8e4dc]'
                  : 'text-[#78876e] hover:text-[#5c6954]'
              }`}
            >
              Voir son profil sur Mariages.net
            </a>
          )}
        </div>

        {/* =================================================
            IMAGE PRINCIPALE
        ================================================== */}

        <Reveal
          variant="zoom"
          delay={150}
          className="mx-auto mt-8 sm:mt-10"
        >
          <div
            ref={imageRef}
            className="relative mx-auto max-w-3xl overflow-hidden group"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={dj.mainImage}
                alt={`${dj.name} — DJ mariage Le Oui Parfait`}
                className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.035]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Fondu bas */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent pointer-events-none" />

              {/* Signature sur l'image */}
              <div className="absolute left-5 bottom-5 sm:left-7 sm:bottom-7 z-10 text-left">
                <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-sans-clean text-white/70">
                  Le Oui Parfait
                </p>

                <p className="mt-1 font-serif-main text-lg sm:text-2xl italic text-white">
                  L&apos;émotion en musique
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* =================================================
            DESCRIPTION
        ================================================== */}

        <Reveal
          variant="up"
          delay={200}
          className="mt-7 sm:mt-9"
        >
          <p
            className={`text-sm sm:text-base lg:text-lg font-sans-clean max-w-2xl mx-auto text-center leading-relaxed whitespace-pre-line ${
              isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
            }`}
          >
            {renderDescription(dj.description)}
          </p>
        </Reveal>
      </div>

      {/* =====================================================
          VIDÉOS IMMERSIVES
          AUCUNE CARTE
          AUCUNE BORDURE
          TEXTE DIRECTEMENT SUR LES VIDÉOS
      ====================================================== */}

      <Reveal
        variant="up"
        delay={100}
        className="mt-14 sm:mt-20 max-w-7xl mx-auto px-4 sm:px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {[dj.videos.mix, dj.videos.show].map((video) => (
            <article
              key={`${dj.id}-${video.title}`}
              className="relative group"
            >
              <div className="relative aspect-video overflow-hidden">
                {video.src ? (
                  <HlsVideo
                    src={video.src}
                    poster={video.poster}
                    controls
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.025]"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[#1c1a17]">
                    <img
                      src={video.poster}
                      alt={video.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-60"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="font-sans-clean text-xs sm:text-sm text-white/90 tracking-[0.2em] uppercase text-center px-4">
                        Vidéo à venir
                      </p>
                    </div>
                  </div>
                )}

                {/* Voile sombre pour intégrer la vidéo au design */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />

                {/* Texte directement sur la vidéo */}
                <div className="absolute left-0 right-0 bottom-0 p-5 sm:p-7 pointer-events-none z-10">
                  <p
                    className={`text-[9px] sm:text-[10px] uppercase tracking-[0.25em] font-sans-clean mb-2 ${
                      isDarkMode ? 'text-[#f4a8bf]' : 'text-white/80'
                    }`}
                  >
                    {video.label}
                  </p>

                  <h3 className="font-serif-main text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
                    {video.title}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Reveal>

      {/* =====================================================
          DIVISEUR
      ====================================================== */}

      {showDivider && (
        <BowDivider
          isDarkMode={isDarkMode}
          className="mt-14 sm:mt-20"
        />
      )}
    </section>
  );
};