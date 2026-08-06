import React, { useEffect, useRef } from 'react';
import { HERO_IMAGES } from '../data/weddingData';
import { RomanticBackground } from './RomanticBackground';

import gsap from 'gsap';
import { Reveal } from './Reveal';

interface HeroProps {
  onOpenContact: () => void;
  onOpenGuide: () => void;
  isDarkMode?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onOpenGuide, isDarkMode = true }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
        delay: 0.2,
      });

      // Cards float in with tilt
      gsap.from(leftCardRef.current, {
        x: -80,
        y: 30,
        rotation: -12,
        opacity: 0,
        duration: 1.3,
        ease: 'power3.out',
        delay: 0.4,
      });

      gsap.from(rightCardRef.current, {
        x: 80,
        y: 30,
        rotation: 12,
        opacity: 0,
        duration: 1.3,
        ease: 'power3.out',
        delay: 0.5,
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className={`relative pt-6 sm:pt-8 pb-16 sm:pb-20 px-4 sm:px-6 overflow-hidden transition-colors duration-300 ${
        isDarkMode ? 'bg-[#141311]' : 'bg-[#faf8f5]'
      }`}
    >
      <RomanticBackground />

      {/* Background Decorative Gradient Radial */}
      <div
        className={`absolute inset-0 opacity-70 pointer-events-none ${
          isDarkMode
            ? 'bg-radial from-[#1e1c18] via-[#141311] to-[#0c0c0b]'
            : 'bg-radial from-white/80 via-[#faf8f5] to-[#c8c0f5]'
        }`}
      />

      {/* Eyebrow Row */}
      <Reveal variant="fade" className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div
          className={`flex items-center justify-between text-[11px] sm:text-xs font-sans-clean gap-3 mb-6 sm:mb-10 ${
            isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
          }`}
        >
          <span>
            Bonjour, nous sommes
            <br />
            <strong className={isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'}>Le Oui Parfait</strong>
          </span>
          <span className="flex items-center gap-2 text-right">
            <span>
              Basés à
              <br />
              Ris-Orangis (91)
            </span>
            <span
              className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border flex items-center justify-center shrink-0 ${
                isDarkMode ? 'border-[#c8c0f5] text-[#c8c0f5]' : 'border-[#8b9a82] text-[#78876e]'
              }`}
            >
              •
            </span>
          </span>
        </div>
      </Reveal>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left Photo Card (Tilted Couple Photo) */}
        <div className="lg:col-span-3 flex justify-center lg:justify-start order-2 lg:order-1">
          <div
            ref={leftCardRef}
            className={`relative p-3 sm:p-4 pb-8 sm:pb-12 rounded-xs polaroid-shadow border transform -rotate-6 hover:rotate-0 transition-transform duration-500 max-w-[260px] sm:max-w-[300px] w-full ${
              isDarkMode ? 'bg-[#1c1a17] border-[#332f28]' : 'bg-white border-[#e8e4dc]'
            }`}
          >
            <div
              className={`relative aspect-[3/4] overflow-hidden ${
                isDarkMode ? 'bg-[#282521]' : 'bg-[#e8e4dc]/40'
              }`}
            >
              <img
                src={HERO_IMAGES.coupleHero}
                alt="Mariés intimistes"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Corner White Flower Overlay */}
              <div
                className={`absolute -top-3 -right-3 w-10 h-10 sm:w-12 sm:h-12 rounded-full p-0.5 shadow-md border ${
                  isDarkMode ? 'bg-[#25221d] border-[#3a352d]' : 'bg-white border-[#e8e4dc]'
                }`}
              >
                <img
                  src={HERO_IMAGES.flowerOverlay1}
                  alt="Décor floral"
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <p
              className={`mt-3 text-center font-serif-main text-xs sm:text-sm italic ${
                isDarkMode ? 'text-[#e8e4dc]' : 'text-[#5c6954]'
              }`}
            >
              « L'art de sublimer chaque instant »
            </p>
          </div>
        </div>

        {/* Center Text Block */}
        <div className="lg:col-span-6 text-center order-1 lg:order-2 my-4 sm:my-0">
          <h2
            ref={titleRef}
            className={`font-serif-main text-3xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] font-normal tracking-tight break-words ${
              isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'
            }`}
          >
            Nous transformons vos{' '}
            <span
              className={`font-script text-4xl sm:text-6xl lg:text-7xl px-1 font-normal inline-block ${
                isDarkMode ? 'text-[#c8c0f5]' : 'text-[#78876e]'
              }`}
            >
              plus beaux instants
            </span>{' '}
            en souvenirs qui durent toute une{' '}
            <span
              className={`font-script text-4xl sm:text-6xl lg:text-7xl px-1 font-normal inline-block ${
                isDarkMode ? 'text-[#c8c0f5]' : 'text-[#78876e]'
              }`}
            >
              vie
            </span>
          </h2>

          {/* Small Photo Collage */}
          <Reveal variant="zoom" delay={150} className="mx-auto mt-8 sm:mt-10 mb-6 sm:mb-8 relative h-[150px] sm:h-[190px] w-[300px] sm:w-[400px]">
            <img
              src={HERO_IMAGES.collage1}
              alt="Mariés authentiques"
              referrerPolicy="no-referrer"
              className="absolute left-0 top-5 w-[115px] sm:w-[145px] border-4 sm:border-[6px] border-current object-cover aspect-[3/4] shadow-xl -rotate-6"
              style={{ borderColor: isDarkMode ? '#1c1a17' : '#ffffff' }}
            />
            <img
              src={HERO_IMAGES.collage2}
              alt="Bouquet nuptial"
              referrerPolicy="no-referrer"
              className="absolute left-1/2 -translate-x-1/2 top-0 w-[130px] sm:w-[165px] border-4 sm:border-[6px] object-cover aspect-[3/4] shadow-xl rotate-2 z-10"
              style={{ borderColor: isDarkMode ? '#1c1a17' : '#ffffff' }}
            />
            <img
              src={HERO_IMAGES.collage3}
              alt="Alliances et émotions"
              referrerPolicy="no-referrer"
              className="absolute right-0 top-5 w-[100px] sm:w-[130px] border-4 sm:border-[6px] object-cover aspect-[3/4] shadow-xl rotate-6"
              style={{ borderColor: isDarkMode ? '#1c1a17' : '#ffffff' }}
            />
          </Reveal>

          <p
            className={`mt-8 sm:mt-10 text-sm sm:text-base lg:text-lg font-sans-clean max-w-xl mx-auto leading-relaxed ${
              isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
            }`}
          >
            Le Oui Parfait, c'est l'art de sublimer chaque instant : de la planification budgétaire
            à la coordination du jour J, nous vous accompagnons pour créer des moments inoubliables.
          </p>


        </div>

        {/* Right Photo Card (Tilted Dress Hanging Photo) */}
        <div className="lg:col-span-3 flex justify-center lg:justify-end order-3">
          <div
            ref={rightCardRef}
            className={`relative p-3 sm:p-4 pb-8 sm:pb-12 rounded-xs polaroid-shadow border transform rotate-6 hover:rotate-0 transition-transform duration-500 max-w-[260px] sm:max-w-[300px] w-full ${
              isDarkMode ? 'bg-[#1c1a17] border-[#332f28]' : 'bg-white border-[#e8e4dc]'
            }`}
          >
            <div
              className={`relative aspect-[3/4] overflow-hidden ${
                isDarkMode ? 'bg-[#282521]' : 'bg-[#e8e4dc]/40'
              }`}
            >
              <img
                src={HERO_IMAGES.dressHero}
                alt="Décoration florale de mariage"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Top Flower Overlay */}
              <div
                className={`absolute top-2 left-2 w-10 h-10 sm:w-12 sm:h-12 rounded-full p-0.5 shadow-md border ${
                  isDarkMode ? 'bg-[#25221d] border-[#3a352d]' : 'bg-white border-[#e8e4dc]'
                }`}
              >
                <img
                  src={HERO_IMAGES.flowerOverlay2}
                  alt="Pétale"
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <p
              className={`mt-3 text-center font-serif-main text-xs sm:text-sm italic ${
                isDarkMode ? 'text-[#e8e4dc]' : 'text-[#5c6954]'
              }`}
            >
              « Décoration florale »
            </p>
          </div>
        </div>
      </div>

      {/* Circle Quote Panel */}
      <Reveal variant="zoom" delay={100} className="mt-14 sm:mt-16 max-w-7xl mx-auto px-4 sm:px-6 flex justify-center relative z-10">
        <div
          className={`w-full max-w-[300px] sm:max-w-[420px] aspect-square rounded-full border flex flex-col items-center justify-center gap-4 sm:gap-6 text-center px-8 sm:px-12 ${
            isDarkMode ? 'border-[#c8c0f5]/60' : 'border-[#8b9a82]/60'
          }`}
        >
          <p
            className={`font-sans-clean text-xs sm:text-sm leading-relaxed max-w-[260px] ${
              isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
            }`}
          >
            Notre approche est humaine, à l'écoute et ancrée dans l'émotion. Nous ne cherchons pas la
            perfection, mais la sincérité et la magie des vrais instants partagés.
          </p>
          <a
            href="#services"
            className={`inline-flex px-5 sm:px-7 py-2 sm:py-2.5 rounded-full font-sans-clean font-medium text-xs sm:text-sm transition-all shadow-md active:scale-95 ${
              isDarkMode
                ? 'bg-[#c8c0f5] text-[#141311] hover:bg-[#e8e4dc]'
                : 'bg-[#8b9a82] text-white hover:bg-[#74836b]'
            }`}
          >
            Découvrir nos offres
          </a>
        </div>
      </Reveal>

      {/* Thread & Bow Divider */}
      <div className="mt-10 sm:mt-14 flex items-center max-w-7xl mx-auto px-4 sm:px-6">
        <span className={`flex-1 h-px ${isDarkMode ? 'bg-[#c8c0f5]/40' : 'bg-[#8b9a82]/40'}`} />
        <svg className="w-24 sm:w-36 mx-3 sm:mx-5 shrink-0" viewBox="0 0 170 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M85 45 C 40 5, 5 20, 15 45 C 5 70, 40 85, 85 45"
            stroke={isDarkMode ? '#c8c0f5' : '#8b9a82'}
            strokeWidth="1.5"
          />
          <path
            d="M85 45 C 130 5, 165 20, 155 45 C 165 70, 130 85, 85 45"
            stroke={isDarkMode ? '#c8c0f5' : '#8b9a82'}
            strokeWidth="1.5"
          />
          <circle cx="85" cy="45" r="4" fill={isDarkMode ? '#c8c0f5' : '#8b9a82'} />
          <path d="M85 45 L 60 88" stroke={isDarkMode ? '#c8c0f5' : '#8b9a82'} strokeWidth="1.5" />
          <path d="M85 45 L 110 88" stroke={isDarkMode ? '#c8c0f5' : '#8b9a82'} strokeWidth="1.5" />
        </svg>
        <span className={`flex-1 h-px ${isDarkMode ? 'bg-[#c8c0f5]/40' : 'bg-[#8b9a82]/40'}`} />
      </div>
    </section>
  );
};
