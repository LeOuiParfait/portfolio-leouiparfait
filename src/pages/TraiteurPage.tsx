import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, ChevronDown, X } from 'lucide-react';
import { RomanticBackground } from '../components/RomanticBackground';
import { BowDivider } from '../components/BowDivider';
import { Reveal } from '../components/Reveal';
import { FooterBanner } from '../components/FooterBanner';
import { FloatingPartnerMenu } from '../components/FloatingPartnerMenu';
import { TRAITEUR_PARTNER } from '../data/partnersData';
import gsap from 'gsap';

const TRAITEUR_HERO_IMAGES = {
  left: '/chef traiteur (3).png',
  right: '/chef traiteur (5).png',
  collage1: '/plats (1).png',
  collage2: '/chef traiteur (4).png',
  collage3: '/plats (2).png',
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
  const [accordionOpen, setAccordionOpen] = useState(false);

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
                      alt="Notre Chef coordonnatrice toque blanche et Kathy gérante Le Oui Parfait"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <p
                    className={`mt-3 text-center font-serif-main text-xs sm:text-sm italic ${
                      isDarkMode ? 'text-[#e8e4dc]' : 'text-[#5c6954]'
                    }`}
                  >
                    « Notre Chef coordonnatrice toque blanche & Kathy, gérante Le Oui Parfait »
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
                      isDarkMode ? 'text-[#f4a8bf]' : 'text-[#f4a8bf]'
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

                <div
                  className={`mt-8 sm:mt-10 space-y-5 text-sm sm:text-base lg:text-lg font-sans-clean max-w-xl mx-auto leading-relaxed ${
                    isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
                  }`}
                >
                  <p>Une cuisine de mariage signée Le Oui Parfait</p>
                  <p>
                    Chaque mariage a son histoire, son ambiance et ses envies.
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
                      src={TRAITEUR_HERO_IMAGES.right}
                      alt="Béatrice"
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <p
                    className={`mt-3 text-center font-serif-main text-xs sm:text-sm italic ${
                      isDarkMode ? 'text-[#e8e4dc]' : 'text-[#5c6954]'
                    }`}
                  >
                    « Béatrice »
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
                  Chaque mariage a son histoire, son ambiance et ses envies. <br /> <br />Ensemble, imaginons une cuisine qui vous ressemble et qui laissera à vos invités le souvenir d'un beau moment partagé.
                </p>
                <p
                  className={`font-sans-clean text-xs sm:text-sm italic leading-relaxed max-w-[260px] ${
                    isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
                  }`}
                >
                  Une cuisine généreuse, élégante et personnalisée, conçue pour sublimer votre journée.
                </p>
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
                  « Béatrice  Toque Blanche et  Hata »
                </p>
              </div>
            </Reveal>

            <Reveal variant="right" className="lg:col-span-7">
              {(() => {
                const renderFormattedText = (text: string) => {
                  const parts: React.ReactNode[] = [];
                  let remaining = text;
                  let keyCounter = 0;

                  while (remaining.length > 0) {
                    const boldStart = remaining.indexOf('**');
                    const linkStart = remaining.indexOf('[[');

                    if (boldStart === -1 && linkStart === -1) {
                      parts.push(<React.Fragment key={keyCounter++}>{remaining}</React.Fragment>);
                      break;
                    }

                    const nextStart =
                      linkStart !== -1 && (boldStart === -1 || linkStart < boldStart)
                        ? { type: 'link' as const, index: linkStart }
                        : { type: 'bold' as const, index: boldStart };

                    if (nextStart.index > 0) {
                      parts.push(
                        <React.Fragment key={keyCounter++}>
                          {remaining.slice(0, nextStart.index)}
                        </React.Fragment>
                      );
                      remaining = remaining.slice(nextStart.index);
                    }

                    if (nextStart.type === 'bold') {
                      const boldEnd = remaining.indexOf('**', 2);
                      if (boldEnd === -1) {
                        parts.push(<React.Fragment key={keyCounter++}>{remaining}</React.Fragment>);
                        break;
                      }
                      parts.push(
                        <strong key={keyCounter++} className="font-semibold">
                          {remaining.slice(2, boldEnd)}
                        </strong>
                      );
                      remaining = remaining.slice(boldEnd + 2);
                    } else {
                      const linkEnd = remaining.indexOf(']]');
                      if (linkEnd === -1) {
                        parts.push(<React.Fragment key={keyCounter++}>{remaining}</React.Fragment>);
                        break;
                      }
                      const linkContent = remaining.slice(2, linkEnd);
                      const [url, linkText] = linkContent.split('|');
                      parts.push(
                        <a
                          key={keyCounter++}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`underline underline-offset-4 transition-colors ${
                            isDarkMode
                              ? 'text-[#f4a8bf] hover:text-[#e8e4dc]'
                              : 'text-[#78876e] hover:text-[#5c6954]'
                          }`}
                        >
                          {linkText}
                        </a>
                      );
                      remaining = remaining.slice(linkEnd + 2);
                    }
                  }

                  return parts;
                };

                const sections = story.split(/^### /m);
                const mainSection = sections[0];
                const accordionSection = sections.slice(1).join('### ');

                const mainParagraphs = mainSection
                  .split('\n\n')
                  .filter((p) => p.trim());

                const accordionParagraphs = accordionSection
                  .split('\n\n')
                  .filter((p) => p.trim());

                return (
                  <>
                    {mainParagraphs.map((p, i) => {
                      if (p.startsWith('## ')) {
                        return (
                          <h3
                            key={`h-${i}`}
                            className={`font-serif-main text-2xl sm:text-3xl mb-5 mt-2 ${
                              isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'
                            }`}
                          >
                            {renderFormattedText(p.replace(/^## /, ''))}
                          </h3>
                        );
                      }
                      return (
                        <p
                          key={`p-${i}`}
                          className={`text-sm sm:text-base lg:text-lg font-sans-clean leading-relaxed mb-5 ${
                            isDarkMode ? 'text-[#e8e4dc]/90' : 'text-[#2c2b29]'
                          }`}
                        >
                          {renderFormattedText(p)}
                        </p>
                      );
                    })}

                    {accordionSection && (
                      <div
                        className={`mt-4 rounded-xs border overflow-hidden ${
                          isDarkMode
                            ? 'border-[#332f28] bg-[#1c1a17]/60'
                            : 'border-[#e8e4dc] bg-white/60'
                        }`}
                      >
                        <button
                          onClick={() => setAccordionOpen(!accordionOpen)}
                          className={`w-full flex items-center justify-between px-5 py-4 text-left transition-colors ${
                            isDarkMode
                              ? 'hover:bg-[#282521]/60'
                              : 'hover:bg-[#f5f3f0]'
                          }`}
                        >
                          <span
                            className={`font-serif-main text-lg sm:text-xl ${
                              isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'
                            }`}
                          >
                            Le Traiteur Parfait, par Le Oui Parfait
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                              accordionOpen ? 'rotate-180' : ''
                            } ${
                              isDarkMode ? 'text-[#c8c0f5]' : 'text-[#78876e]'
                            }`}
                          />
                        </button>
                        {accordionOpen && (
                          <div className="px-5 pb-5 pt-1">
                            {accordionParagraphs.map((p, i) => (
                              <p
                                key={`acc-${i}`}
                                className={`text-sm sm:text-base lg:text-lg font-sans-clean leading-relaxed mb-4 last:mb-0 ${
                                  isDarkMode
                                    ? 'text-[#e8e4dc]/90'
                                    : 'text-[#2c2b29]'
                                }`}
                              >
                                {renderFormattedText(p)}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </>
                );
              })()}

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

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {dishes.map((dish, index) => (
              <Reveal key={dish.id} variant="up" delay={index * 20} className="mb-4">
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
          className="fixed inset-0 z-50 flex bg-[#141311]/97"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Sidebar gauche — nom du menu courant */}
          <aside
            className="w-[200px] sm:w-[260px] shrink-0 h-full border-r border-white/10 bg-[#1c1a17]/80 p-5 sm:p-8 flex flex-col justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-sans-clean mb-4">
              Menu
            </p>
            <h3 className="font-serif-main text-xl sm:text-2xl text-[#f4a8bf] leading-tight mb-3">
              {dishes[selectedIndex].name}
            </h3>
            <p className="text-xs sm:text-sm font-sans-clean italic text-[#e8e4dc]/80 leading-relaxed">
              {dishes[selectedIndex].description}
            </p>
            <div className="mt-6 flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/40 font-sans-clean">
              <span>{selectedIndex + 1}</span>
              <span className="w-8 h-px bg-white/20" />
              <span>{dishes.length}</span>
            </div>
          </aside>

          {/* Zone principale — image plein écran */}
          <div
            className="flex-1 relative min-w-0 h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
              onClick={() => setSelectedIndex(null)}
              aria-label="Fermer"
            >
              <X className="w-8 h-8" />
            </button>

            {selectedIndex > 0 && (
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors z-10"
                onClick={() => setSelectedIndex(selectedIndex - 1)}
                aria-label="Précédent"
              >
                <ChevronLeft className="w-10 h-10" />
              </button>
            )}

            {selectedIndex < dishes.length - 1 && (
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors z-10"
                onClick={() => setSelectedIndex(selectedIndex + 1)}
                aria-label="Suivant"
              >
                <ChevronRight className="w-10 h-10" />
              </button>
            )}

            <img
              src={dishes[selectedIndex].image}
              alt={dishes[selectedIndex].name}
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      )}

      <FooterBanner isDarkMode={isDarkMode} onOpenContact={onOpenContact} />

      <FloatingPartnerMenu isDarkMode={isDarkMode} />
    </div>
  );
};
