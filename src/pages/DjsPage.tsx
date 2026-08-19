import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import gsap from 'gsap';

import { RomanticBackground } from '../components/RomanticBackground';
import { DjShowcase } from '../components/DjShowcase';
import { BowDivider } from '../components/BowDivider';
import { Reveal } from '../components/Reveal';
import { FooterBanner } from '../components/FooterBanner';
import { FloatingPartnerMenu } from '../components/FloatingPartnerMenu';
import { DJ_PARTNERS } from '../data/partnersData';

const DJ_HERO_IMAGES = {
  collage1: '/dj/violoniste.jpg',
  collage2: '/dj/ambiance couple.jpg',
  collage3: '/dj/saxophoniste.jpg',
};

interface DjsPageProps {
  isDarkMode?: boolean;
  onOpenContact: () => void;
}

export const DjsPage: React.FC<DjsPageProps> = ({
  isDarkMode = true,
  onOpenContact,
}) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          y: 40,
          opacity: 0,
          duration: 1.1,
          ease: 'power3.out',
          delay: 0.2,
        });
      }

      if (leftCardRef.current) {
        gsap.from(leftCardRef.current, {
          x: -80,
          y: 30,
          rotation: -12,
          opacity: 0,
          duration: 1.3,
          ease: 'power3.out',
          delay: 0.4,
        });
      }

      if (rightCardRef.current) {
        gsap.from(rightCardRef.current, {
          x: 80,
          y: 30,
          rotation: 12,
          opacity: 0,
          duration: 1.3,
          ease: 'power3.out',
          delay: 0.5,
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode
          ? 'bg-[#141311] text-[#e8e4dc]'
          : 'bg-[#faf8f5] text-[#2c2b29]'
      }`}
    >
      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        ref={heroRef}
        className="relative pt-6 sm:pt-8 pb-16 sm:pb-20 px-4 sm:px-6 overflow-hidden transition-colors duration-300"
      >
        <RomanticBackground />

        <div
          className={`absolute inset-0 opacity-70 pointer-events-none ${
            isDarkMode
              ? 'bg-radial from-[#1e1c18] via-[#141311] to-[#0c0c0b]'
              : 'bg-radial from-white/80 via-[#faf8f5] to-[#c8c0f5]'
          }`}
        />

        {/* Navigation */}
        <Reveal
          variant="fade"
          className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10"
        >
          <div className="flex items-center justify-between text-[11px] sm:text-xs font-sans-clean mb-6 sm:mb-10">
            <Link
              to="/"
              className={`inline-flex items-center gap-2 transition-colors ${
                isDarkMode
                  ? 'text-[#b5b0a5] hover:text-[#c8c0f5]'
                  : 'text-[#5a5750] hover:text-[#78876e]'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              Retour à l&apos;accueil
            </Link>

            <span className="flex items-center gap-2 text-right">
              <span
                className={isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'}
              >
                Partenaires
                <br />
                <strong
                  className={
                    isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'
                  }
                >
                  Le Oui Parfait
                </strong>
              </span>

              <span
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border flex items-center justify-center shrink-0 ${
                  isDarkMode
                    ? 'border-[#c8c0f5] text-[#c8c0f5]'
                    : 'border-[#8b9a82] text-[#78876e]'
                }`}
              >
                •
              </span>
            </span>
          </div>
        </Reveal>

        {/* Hero principal */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Image gauche */}
          <div className="lg:col-span-3 flex justify-center lg:justify-start order-2 lg:order-1">
            <div
              ref={leftCardRef}
              className={`relative p-3 sm:p-4 pb-8 sm:pb-12 rounded-xs polaroid-shadow border transform -rotate-6 hover:rotate-0 transition-transform duration-500 max-w-[260px] sm:max-w-[300px] w-full ${
                isDarkMode
                  ? 'bg-[#1c1a17] border-[#332f28]'
                  : 'bg-white border-[#e8e4dc]'
              }`}
            >
              <div
                className={`relative aspect-[3/4] overflow-hidden ${
                  isDarkMode ? 'bg-[#282521]' : 'bg-[#e8e4dc]/40'
                }`}
              >
                <img
                  src="/dj/anat-landa-2162599192-38446274.jpg"
                  alt="La magie du dancefloor"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              <p
                className={`mt-3 text-center font-serif-main text-xs sm:text-sm italic ${
                  isDarkMode ? 'text-[#e8e4dc]' : 'text-[#5c6954]'
                }`}
              >
                « La magie du dancefloor »
              </p>
            </div>
          </div>

          {/* Centre */}
          <div className="lg:col-span-6 text-center order-1 lg:order-2 my-4 sm:my-0">
            <h1
              ref={titleRef}
              className={`font-serif-main text-3xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] font-normal tracking-tight break-words ${
                isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'
              }`}
            >
              Une soirée de mariage qui{' '}
              <span
                className={`font-script text-4xl sm:text-6xl lg:text-7xl px-1 font-normal inline-block ${
                  isDarkMode ? 'text-[#f4a8bf]' : 'text-[#78876e]'
                }`}
              >
                vibre
              </span>{' '}
              jusqu’au bout de la nuit
            </h1>

            <Reveal
              variant="zoom"
              delay={150}
              className="mx-auto mt-8 sm:mt-10 mb-6 sm:mb-8 relative h-[150px] sm:h-[190px] w-[300px] sm:w-[400px]"
            >
              <img
                src={DJ_HERO_IMAGES.collage1}
                alt="DJ mix"
                referrerPolicy="no-referrer"
                className="absolute left-0 top-5 w-[115px] sm:w-[145px] border-4 sm:border-[6px] border-current object-cover aspect-[3/4] shadow-xl -rotate-6"
                style={{ borderColor: isDarkMode ? '#1c1a17' : '#ffffff' }}
              />
              <img
                src={DJ_HERO_IMAGES.collage2}
                alt="DJ en action"
                referrerPolicy="no-referrer"
                className="absolute left-1/2 -translate-x-1/2 top-0 w-[130px] sm:w-[165px] border-4 sm:border-[6px] object-cover aspect-[3/4] shadow-xl rotate-2 z-10"
                style={{ borderColor: isDarkMode ? '#1c1a17' : '#ffffff' }}
              />
              <img
                src={DJ_HERO_IMAGES.collage3}
                alt="Show lumineux"
                referrerPolicy="no-referrer"
                className="absolute right-0 top-5 w-[100px] sm:w-[130px] border-4 sm:border-[6px] object-cover aspect-[3/4] shadow-xl rotate-6"
                style={{ borderColor: isDarkMode ? '#1c1a17' : '#ffffff' }}
              />
            </Reveal>

            <div
              className={`mt-8 sm:mt-10 space-y-5 text-sm sm:text-base lg:text-lg font-sans-clean max-w-xl mx-auto leading-relaxed ${
                isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
              }`}
            >
              <p>Une soirée portée par des artistes du son</p>
              <p>
                Un mariage, ce n’est pas seulement une belle cérémonie. C’est une succession de moments que l’on partage, de rires, de danse et de souvenirs qui restent.
              </p>
              <p>
                Chez Le Oui Parfait, cette énergie repose sur une équipe de DJ professionnels, intégrés à l’équipe et sélectionnés avec exigence. À leurs côtés, chaque transition, chaque lumière, chaque silence est pensé pour créer l’atmosphère que vous vivez.
              </p>
            </div>
          </div>

          {/* Image droite */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end order-3">
            <div
              ref={rightCardRef}
              className={`relative p-3 sm:p-4 pb-8 sm:pb-12 rounded-xs polaroid-shadow border transform rotate-6 hover:rotate-0 transition-transform duration-500 max-w-[260px] sm:max-w-[300px] w-full ${
                isDarkMode
                  ? 'bg-[#1c1a17] border-[#332f28]'
                  : 'bg-white border-[#e8e4dc]'
              }`}
            >
              <div
                className={`relative aspect-[3/4] overflow-hidden ${
                  isDarkMode ? 'bg-[#282521]' : 'bg-[#e8e4dc]/40'
                }`}
              >
                <img
                  src="/dj/L'effervescence du oui.png"
                  alt="Show lumineux"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              <p
                className={`mt-3 text-center font-serif-main text-xs sm:text-sm italic ${
                  isDarkMode ? 'text-[#e8e4dc]' : 'text-[#5c6954]'
                }`}
              >
                « L&apos;effervescence du oui »
              </p>
            </div>
          </div>
        </div>

        <Reveal variant="zoom" delay={100} className="mt-14 sm:mt-16 flex justify-center relative z-10">
          <div
            className={`w-full max-w-[300px] sm:max-w-[420px] aspect-square rounded-full border flex flex-col items-center justify-center gap-4 sm:gap-6 text-center px-8 sm:px-12 ${
              isDarkMode ? 'border-[#c8c0f5]/60' : 'border-[#8b9a82]/60'
            }`}
          >
            <p
              className={`font-sans-clean text-xs sm:text-sm italic leading-relaxed max-w-[260px] ${
                isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
              }`}
            >
              Chaque mariage mérite une bande-son sur mesure. Créons ensemble une
              soirée inoubliable.
            </p>
          </div>
        </Reveal>

        <BowDivider
          isDarkMode={isDarkMode}
          className="mt-10 sm:mt-14 relative z-10"
        />
      </section>

      {/* =====================================================
          DJ SHOWCASES
      ====================================================== */}

      <section className="relative z-10 space-y-16 sm:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {DJ_PARTNERS.map((dj, index) => (
          <DjShowcase
            key={dj.id}
            dj={dj}
            index={index}
            isDarkMode={isDarkMode}
            showDivider={index < DJ_PARTNERS.length - 1}
          />
        ))}
      </section>

      <FooterBanner
        isDarkMode={isDarkMode}
        onOpenContact={onOpenContact}
      />

      <FloatingPartnerMenu isDarkMode={isDarkMode} />
    </div>
  );
};
