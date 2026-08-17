import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { RomanticBackground } from '../components/RomanticBackground';
import { BowDivider } from '../components/BowDivider';
import { Reveal } from '../components/Reveal';
import { FooterBanner } from '../components/FooterBanner';
import { FloatingPartnerMenu } from '../components/FloatingPartnerMenu';
import { TRAITEUR_PARTNER } from '../data/partnersData';
import gsap from 'gsap';

const TRAITEUR_HERO_IMAGES = {
  left: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=85',
  right: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=85',
  collage1: '/notre equipe traiteur (1).jpeg',
  collage2: '/notre equipe traiteur (2).jpeg',
  collage3: '/notre equipe traiteur (3).jpeg',
};

interface TraiteurPageProps {
  isDarkMode?: boolean;
  onOpenContact: () => void;
}

export const TraiteurPage: React.FC<TraiteurPageProps> = ({
  isDarkMode = true,
  onOpenContact,
}) => {
  const { intro, story, chefImage, dishes } = TRAITEUR_PARTNER;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

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
        isDarkMode ? 'bg-[#141311] text-[#e8e4dc]' : 'bg-[#faf8f5] text-[#2c2b29]'
      }`}
    >
      <section className="relative pt-6 sm:pt-8 pb-10 sm:pb-14 overflow-hidden">
        <RomanticBackground />

        <div
          className={`absolute inset-0 opacity-70 pointer-events-none ${
            isDarkMode
              ? 'bg-radial from-[#1e1c18] via-[#141311] to-[#0c0c0b]'
              : 'bg-radial from-white/80 via-[#faf8f5] to-[#c8c0f5]'
          }`}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <Link
            to="/"
            className={`inline-flex items-center gap-2 text-xs sm:text-sm font-sans-clean mb-8 transition-colors ${
              isDarkMode
                ? 'text-[#b5b0a5] hover:text-[#c8c0f5]'
                : 'text-[#5a5750] hover:text-[#78876e]'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l&apos;accueil
          </Link>

          <div ref={heroRef} className="relative mb-16 sm:mb-20">
            <Reveal
              variant="fade"
              className="max-w-7xl mx-auto mb-6 sm:mb-10"
            >
              <div
                className={`flex items-center justify-between text-[11px] sm:text-xs font-sans-clean gap-3 ${
                  isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
                }`}
              >
                <span>
                  Une cuisine de mariage
                  <br />
                  <strong className={isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'}>
                    signée Le Oui Parfait
                  </strong>
                </span>
                <span className="flex items-center gap-2 text-right">
                  <span>
                    Membre
                    <br />
                    de l&apos;équipe
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

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
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
                      src={TRAITEUR_HERO_IMAGES.left}
                      alt="Table dressée avec soin"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <p
                    className={`mt-3 text-center font-serif-main text-xs sm:text-sm italic ${
                      isDarkMode ? 'text-[#e8e4dc]' : 'text-[#5c6954]'
                    }`}
                  >
                    « L&apos;art de la table »
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6 text-center order-1 lg:order-2 my-4 sm:my-0">
                <h1
                  ref={titleRef}
                  className={`font-serif-main text-3xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] font-normal tracking-tight break-words ${
                    isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'
                  }`}
                >
                  Une cuisine qui{' '}
                  <span
                    className={`font-script text-4xl sm:text-6xl lg:text-7xl px-1 font-normal inline-block ${
                      isDarkMode ? 'text-[#f4a8bf]' : 'text-[#78876e]'
                    }`}
                  >
                    ravit
                  </span>{' '}
                  les sens et{' '}
                  <span
                    className={`font-script text-4xl sm:text-6xl lg:text-7xl px-1 font-normal inline-block ${
                      isDarkMode ? 'text-[#c8c0f5]' : 'text-[#78876e]'
                    }`}
                  >
                    sublime
                  </span>{' '}
                  votre réception
                </h1>

                <Reveal
                  variant="zoom"
                  delay={150}
                  className="mx-auto mt-8 sm:mt-10 mb-6 sm:mb-8 relative h-[150px] sm:h-[190px] w-[300px] sm:w-[400px]"
                >
                  <img
                    src={TRAITEUR_HERO_IMAGES.collage1}
                    alt="Mise en bouche"
                    referrerPolicy="no-referrer"
                    className="absolute left-0 top-5 w-[115px] sm:w-[145px] border-4 sm:border-[6px] border-current object-cover aspect-[3/4] shadow-xl -rotate-6"
                    style={{ borderColor: isDarkMode ? '#1c1a17' : '#ffffff' }}
                  />
                  <img
                    src={TRAITEUR_HERO_IMAGES.collage2}
                    alt="Assiette signature"
                    referrerPolicy="no-referrer"
                    className="absolute left-1/2 -translate-x-1/2 top-0 w-[130px] sm:w-[165px] border-4 sm:border-[6px] object-cover aspect-[3/4] shadow-xl rotate-2 z-10"
                    style={{ borderColor: isDarkMode ? '#1c1a17' : '#ffffff' }}
                  />
                  <img
                    src={TRAITEUR_HERO_IMAGES.collage3}
                    alt="Dessert raffiné"
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
                  Menus sur-mesure, produits de saison et attention portée à chaque détail . Notre équipe traiteur imagine une cuisine à votre image, pensée pour accompagner votre mariage et faire de chaque repas un véritable moment de partage.
                </p>
              </div>

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
                      src={TRAITEUR_HERO_IMAGES.right}
                      alt="Plat gastronomique"
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <p
                    className={`mt-3 text-center font-serif-main text-xs sm:text-sm italic ${
                      isDarkMode ? 'text-[#e8e4dc]' : 'text-[#5c6954]'
                    }`}
                  >
                    « Saveurs de saison »
                  </p>
                </div>
              </div>
            </div>

            <Reveal variant="zoom" delay={100} className="mt-14 sm:mt-16 flex justify-center">
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
                  Chaque mariage a son histoire, son ambiance et ses envies. Ensemble, imaginons une cuisine qui vous ressemble et qui laissera à vos invités le souvenir d’un beau moment partagé.
                </p>
                <button
                  type="button"
                  onClick={onOpenContact}
                  className={`inline-flex px-5 sm:px-7 py-2 sm:py-2.5 rounded-full font-sans-clean font-medium text-xs sm:text-sm transition-all shadow-md active:scale-95 ${
                    isDarkMode
                      ? 'bg-[#c8c0f5] text-[#141311] hover:bg-[#e8e4dc]'
                      : 'bg-[#8b9a82] text-white hover:bg-[#74836b]'
                  }`}
                >
                  Demander un devis traiteur
                </button>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 sm:mb-24">
            <Reveal variant="left" className="lg:col-span-5">
              <div
                className={`relative p-3 sm:p-4 pb-8 sm:pb-12 rounded-xs polaroid-shadow border transform -rotate-3 hover:rotate-0 transition-transform duration-500 max-w-[360px] mx-auto lg:mx-0 ${
                  isDarkMode ? 'bg-[#1c1a17] border-[#332f28]' : 'bg-white border-[#e8e4dc]'
                }`}
              >
                <div
                  className={`relative aspect-[4/5] overflow-hidden ${
                    isDarkMode ? 'bg-[#282521]' : 'bg-[#e8e4dc]/40'
                  }`}
                >
                  <img
                    src={chefImage}
                    alt="Kathy, Béatrice et Hata — notre équipe traiteur"
                    className="w-full h-full object-cover transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p
                  className={`mt-3 text-center font-serif-main text-sm italic ${
                    isDarkMode ? 'text-[#e8e4dc]' : 'text-[#5c6954]'
                  }`}
                >
                  « Béatrice Top chef étoilée · Hata formée par les tops chefs »
                </p>
              </div>
            </Reveal>

            <Reveal variant="right" className="lg:col-span-7">
              {intro.trim() &&
                intro.split('\n\n').map((p, i) => (
                  <p
                    key={`intro-${i}`}
                    className={`text-sm sm:text-base lg:text-lg font-sans-clean leading-relaxed mb-5 ${
                      isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
                    }`}
                  >
                    {p}
                  </p>
                ))}
              {story.split('\n\n').map((p, i, arr) => (
                <p
                  key={`story-${i}`}
                  className={`text-sm sm:text-base lg:text-lg font-sans-clean leading-relaxed ${
                    isDarkMode ? 'text-[#e8e4dc]/90' : 'text-[#2c2b29]'
                  } ${i === arr.length - 1 ? '' : 'mb-5'}`}
                >
                  {p}
                </p>
              ))}

              <div
                className={`mt-8 inline-flex items-center gap-3 px-4 py-3 rounded-full border ${
                  isDarkMode
                    ? 'border-[#c8c0f5]/30 bg-[#c8c0f5]/5'
                    : 'border-[#8b9a82]/30 bg-[#8b9a82]/5'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    isDarkMode ? 'bg-[#c8c0f5]' : 'bg-[#78876e]'
                  }`}
                />
                <span
                  className={`text-xs sm:text-sm font-sans-clean ${
                    isDarkMode ? 'text-[#c8c0f5]' : 'text-[#78876e]'
                  }`}
                >
                  Cuisine de saison · Service sur mesure · Menus personnalisés
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal variant="fade" className="text-center mb-10 sm:mb-14">
            <h2
              className={`font-serif-main text-3xl sm:text-4xl lg:text-5xl ${
                isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'
              }`}
            >
              Nos{' '}
              <span
                className={`font-script text-4xl sm:text-5xl ${
                  isDarkMode ? 'text-[#f4a8bf]' : 'text-[#78876e]'
                }`}
              >
                créations
              </span>
            </h2>
            <p
              className={`mt-4 text-sm sm:text-base font-sans-clean max-w-2xl mx-auto ${
                isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
              }`}
            >
              Chaque plat est pensé comme une étape de votre réception : une promesse de goût,
              de beauté et de partage.
            </p>
          </Reveal>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
            {dishes.map((dish, index) => (
              <Reveal key={dish.id} variant="up" delay={index * 20} className="break-inside-avoid mb-6">
                <article
                  className={`relative group w-full overflow-hidden rounded-xs border cursor-pointer transition-transform duration-500 hover:-translate-y-1 ${
                    isDarkMode
                      ? 'bg-[#1c1a17] border-[#332f28]'
                      : 'bg-white border-[#e8e4dc]'
                  }`}
                  onClick={() => setSelectedIndex(index)}
                >
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </article>
              </Reveal>
            ))}
          </div>

          <BowDivider isDarkMode={isDarkMode} className="mt-14 sm:mt-16" />
        </div>
      </section>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#141311]/95"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            onClick={() => setSelectedIndex(null)}
            aria-label="Fermer"
          >
            <X className="w-8 h-8" />
          </button>

          {selectedIndex > 0 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(selectedIndex - 1);
              }}
              aria-label="Précédent"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
          )}

          {selectedIndex < dishes.length - 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(selectedIndex + 1);
              }}
              aria-label="Suivant"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
          )}

          <div
            className="max-w-4xl w-full max-h-[90vh] flex flex-col items-center overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={dishes[selectedIndex].image}
              alt={dishes[selectedIndex].name}
              className="max-h-[70vh] w-auto object-contain rounded-xs shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="mt-4 text-center px-4">
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/60 mb-1">
                Au menu
              </p>
              <h3 className="font-serif-main text-2xl sm:text-3xl text-white">
                {dishes[selectedIndex].name}
              </h3>
              <p className="mt-1 font-sans-clean text-sm sm:text-base text-white/80 max-w-2xl">
                {dishes[selectedIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}

      <FooterBanner isDarkMode={isDarkMode} onOpenContact={onOpenContact} />

      <FloatingPartnerMenu isDarkMode={isDarkMode} />
    </div>
  );
};
