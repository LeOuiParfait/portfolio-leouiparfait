import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Cake,
  Sparkles,
  Globe,
  Instagram,
  UtensilsCrossed,
  IceCream,
  Cookie,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import gsap from 'gsap';

import { RomanticBackground } from '../components/RomanticBackground';
import { BowDivider } from '../components/BowDivider';
import { Reveal } from '../components/Reveal';
import { FooterBanner } from '../components/FooterBanner';
import { FloatingPartnerMenu } from '../components/FloatingPartnerMenu';

const NORA_IMAGES = {
  heroLeft: '/nora/nora hero (1).png',
  heroRight: '/nora/nora hero (2).png',
  nora1: '/nora/création.png',
  nora2: '/nora/nora (2).png',
};

const WEDDING_CAKE_IMAGES = [
  '/nora/wedding cake/wedding cake (1).png',
  '/nora/wedding cake/wedding cake (2).png',
  '/nora/wedding cake/wedding cake (3).png',
  '/nora/wedding cake/wedding cake (4).png',
  '/nora/wedding cake/wedding cake (5).png',
  '/nora/wedding cake/wedding cake (6).png',
  '/nora/wedding cake/wedding cake (7).png',
  '/nora/wedding cake/wedding cake (8).png',
];

const FLAVORS = [
  'Vanille',
  'Mangue / Passion',
  'Pistache / Framboisier',
  'Framboisier',
  'Chocolat Blanc / Framboise',
  'Coco / Framboise',
  'Fraisier (selon saison)',
  'Pistache / Fraise',
  'Praliné',
  '3 Chocolats',
  'Caramel',
  'Poirier',
  'Mangue / Passion / Coco',
  'Nutella',
  'Crème de Sureau / Figue',
];

const CREATIONS = [
  {
    icon: Cake,
    title: 'Wedding Cakes sur-mesure',
    description:
      "Avec ou sans pâte à sucre, aux saveurs de votre choix, et dans les couleurs et le thème de votre mariage. Exprimez vos envies, et nous les réaliserons.",
  },
  {
    icon: Cookie,
    title: 'Cupcakes & Mignardises',
    description:
      "Des bouchées sucrées raffinées pour compléter votre buffet de desserts ou offrir un moment gourmand à vos invités.",
  },
  {
    icon: IceCream,
    title: 'Entremets & Douceurs',
    description:
      "Toutes sortes de douceurs : entremets, tartes, et autres délices sucrés pour sublimer votre réception.",
  },
  {
    icon: UtensilsCrossed,
    title: 'Présentoirs & Buffets',
    description:
      "Une variété de présentoirs pour mettre en valeur votre buffet de desserts et créer un visuel d'exception.",
  },
];

interface NoraPageProps {
  isDarkMode?: boolean;
  onOpenContact: () => void;
}

export const NoraPage: React.FC<NoraPageProps> = ({
  isDarkMode = true,
  onOpenContact,
}) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const nextPhoto = useCallback(
    () => setLightboxIndex((p) => (p === null ? null : (p + 1) % WEDDING_CAKE_IMAGES.length)),
    []
  );
  const prevPhoto = useCallback(
    () => setLightboxIndex((p) => (p === null ? null : (p - 1 + WEDDING_CAKE_IMAGES.length) % WEDDING_CAKE_IMAGES.length)),
    []
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, nextPhoto, prevPhoto]);

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
          x: -80, y: 30, rotation: -12, opacity: 0,
          duration: 1.3, ease: 'power3.out', delay: 0.4,
        });
      }
      if (rightCardRef.current) {
        gsap.from(rightCardRef.current, {
          x: 80, y: 30, rotation: 12, opacity: 0,
          duration: 1.3, ease: 'power3.out', delay: 0.5,
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
              <span className={isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'}>
                Partenaire
                <br />
                <strong className={isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'}>
                  Les Délices de Nora
                </strong>
              </span>
              <span
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border flex items-center justify-center shrink-0 ${
                  isDarkMode
                    ? 'border-[#c8c0f5] text-[#c8c0f5]'
                    : 'border-[#8b9a82] text-[#78876e]'
                }`}
              >
                <Cake className="w-4 h-4" />
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
                  src={NORA_IMAGES.heroLeft}
                  alt="Les Délices de Nora — Wedding cake"
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
                « L'art sucré »
              </p>
            </div>
          </div>

          {/* Centre */}
          <div className="lg:col-span-6 text-center order-1 lg:order-2 my-4 sm:my-0">
            <p
              className={`text-[10px] sm:text-xs uppercase tracking-[0.25em] font-sans-clean mb-3 ${
                isDarkMode ? 'text-[#807b71]' : 'text-[#8a8780]'
              }`}
            >
              Pâtisserie d'exception · Le Oui Parfait
            </p>

            <h1
              ref={titleRef}
              className={`font-serif-main text-3xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] font-normal tracking-tight break-words ${
                isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'
              }`}
            >
              <span
                className={`font-script text-4xl sm:text-6xl lg:text-7xl px-1 font-normal inline-block text-[#f4a8bf]`}
              >
                Les Délices
              </span>{' '}
              de Nora
            </h1>

            <p
              className={`mt-4 text-lg sm:text-xl font-serif-main ${
                isDarkMode ? 'text-[#e8e4dc]' : 'text-[#2c2b29]'
              }`}
            >
              Wedding cakes & pâtisseries sur-mesure
            </p>

            <div
              className={`mt-6 sm:mt-8 space-y-4 text-sm sm:text-base lg:text-lg font-sans-clean max-w-xl mx-auto leading-relaxed ${
                isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
              }`}
            >
              <p>
                Vous rêvez d'un gâteau de mariage aussi magnifique que délicieux ?
                Les Délices de Nora exaucent vos souhaits !
              </p>
              <p
                className={`text-xs sm:text-sm uppercase tracking-widest ${
                  isDarkMode ? 'text-[#807b71]' : 'text-[#8a8780]'
                }`}
              >
                Naked cake · Design raffiné · Saveurs sur-mesure
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
                  src={NORA_IMAGES.heroRight}
                  alt="Les Délices de Nora — Création pâtissière"
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
                « Le goût du rêve »
              </p>
            </div>
          </div>
        </div>

        <BowDivider
          isDarkMode={isDarkMode}
          className="mt-10 sm:mt-14 relative z-10"
        />
      </section>

      {/* =====================================================
          01 — QUI EST NORA ?
      ====================================================== */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <Reveal variant="fade" className="mb-6 sm:mb-8">
          <div className="flex items-center gap-4 mb-2">
            <span
              className={`font-serif-main text-5xl sm:text-6xl ${
                isDarkMode ? 'text-[#332f28]' : 'text-[#e8e4dc]'
              }`}
            >
              01
            </span>
            <div>
              <p
                className={`text-[10px] sm:text-xs uppercase tracking-[0.25em] font-sans-clean ${
                  isDarkMode ? 'text-[#807b71]' : 'text-[#8a8780]'
                }`}
              >
                Qui est Nora ?
              </p>
              <h2
                className={`font-serif-main text-2xl sm:text-3xl lg:text-4xl ${
                  isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'
                }`}
              >
                Une pâtissière{' '}
                <span className="font-script text-3xl sm:text-4xl text-[#f4a8bf]">
                  passionnée
                </span>
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Texte — gauche */}
          <div
            className={`space-y-5 text-sm sm:text-base lg:text-lg font-sans-clean leading-relaxed ${
              isDarkMode ? 'text-[#e8e4dc]/90' : 'text-[#2c2b29]'
            }`}
          >
            <Reveal variant="up">
              <p>
                Que vous préfériez un naked cake élégant ou un gâteau au design raffiné et
                original, vous trouverez celui qui correspond parfaitement à votre style et
                sublimera votre réception.
              </p>
            </Reveal>
            <Reveal variant="up" delay={80}>
              <p>
                La pâtisserie Délices de Nora vous offre la possibilité de créer un wedding cake
                sur-mesure : avec ou sans pâte à sucre, aux saveurs de votre choix, et dans les
                couleurs et le thème de votre mariage. Exprimez vos envies, et nous les
                réaliserons.
              </p>
            </Reveal>
            <Reveal variant="up" delay={160}>
              <p
                className={`text-base sm:text-lg font-serif-main italic ${
                  isDarkMode ? 'text-[#c8c0f5]' : 'text-[#78876e]'
                }`}
              >
                Ne laissez rien au hasard pour le jour le plus important de votre vie. Pour des
                créations pâtissières qui marqueront vos invités et rendront votre réception
                inoubliable.
              </p>
            </Reveal>

            {/* Liens rapides — Mariages.net, site, Instagram */}
            <Reveal variant="up" delay={240}>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4">
                <a
                  href="https://www.mariages.net/wedding-cake/delices-de-nora-dn-academy--e181599"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full border text-xs sm:text-sm font-sans-clean transition-all ${
                    isDarkMode
                      ? 'bg-[#1c1a17] border-[#332f28] text-[#e8e4dc] hover:border-[#c8c0f5]/50'
                      : 'bg-[#faf8f5] border-[#e8e4dc] text-[#2c2b29] hover:border-[#8b9a82]/50'
                  }`}
                >
                  <Globe className="w-4 h-4 text-[#f4a8bf]" />
                  Mariages.net
                </a>
                <a
                  href="https://www.dnacademy.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full border text-xs sm:text-sm font-sans-clean transition-all ${
                    isDarkMode
                      ? 'bg-[#1c1a17] border-[#332f28] text-[#e8e4dc] hover:border-[#c8c0f5]/50'
                      : 'bg-[#faf8f5] border-[#e8e4dc] text-[#2c2b29] hover:border-[#8b9a82]/50'
                  }`}
                >
                  <Globe className="w-4 h-4 text-[#f4a8bf]" />
                  dnacademy.fr
                </a>
                <a
                  href="https://www.instagram.com/delicesdenora/?hl=fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full border text-xs sm:text-sm font-sans-clean transition-all ${
                    isDarkMode
                      ? 'bg-[#1c1a17] border-[#332f28] text-[#e8e4dc] hover:border-[#c8c0f5]/50'
                      : 'bg-[#faf8f5] border-[#e8e4dc] text-[#2c2b29] hover:border-[#8b9a82]/50'
                  }`}
                >
                  <Instagram className="w-4 h-4 text-[#f4a8bf]" />
                  @delicesdenora
                </a>
              </div>
            </Reveal>
          </div>

          {/* Image — droite */}
          <Reveal variant="up" delay={120} className="flex justify-center">
            <div
              className={`relative p-3 sm:p-4 pb-8 sm:pb-12 rounded-xs polaroid-shadow border transform rotate-3 hover:rotate-0 transition-transform duration-500 max-w-[320px] sm:max-w-[380px] w-full ${
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
                  src={NORA_IMAGES.nora1}
                  alt="Nora — Pâtissière"
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
                « Création sur-mesure »
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          02 — NOS CRÉATIONS
      ====================================================== */}
      <section
        className={`relative z-10 py-16 sm:py-24 px-4 sm:px-6 ${
          isDarkMode ? 'bg-[#181714]' : 'bg-white/50'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <Reveal variant="fade" className="mb-10 sm:mb-14 text-center">
            <p
              className={`text-[10px] sm:text-xs uppercase tracking-[0.25em] font-sans-clean mb-3 ${
                isDarkMode ? 'text-[#807b71]' : 'text-[#8a8780]'
              }`}
            >
              Nos créations
            </p>
            <h2
              className={`font-serif-main text-2xl sm:text-3xl lg:text-4xl ${
                isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'
              }`}
            >
              Des douceurs{' '}
              <span className="font-script text-3xl sm:text-4xl text-[#f4a8bf]">
                pour chaque occasion
              </span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CREATIONS.map((c, i) => (
              <Reveal key={i} variant="up" delay={i * 80}>
                <div
                  className={`flex items-start gap-4 rounded-2xl border p-6 sm:p-8 h-full ${
                    isDarkMode
                      ? 'bg-[#1c1a17] border-[#332f28]'
                      : 'bg-[#faf8f5] border-[#e8e4dc]'
                  }`}
                >
                  <span
                    className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                      isDarkMode
                        ? 'bg-[#c8c0f5]/15 text-[#c8c0f5]'
                        : 'bg-[#8b9a82]/15 text-[#78876e]'
                    }`}
                  >
                    <c.icon className="w-5 h-5" />
                  </span>
                  <div>
                    <h3
                      className={`font-serif-main text-lg sm:text-xl mb-2 ${
                        isDarkMode ? 'text-[#c8c0f5]' : 'text-[#78876e]'
                      }`}
                    >
                      {c.title}
                    </h3>
                    <p
                      className={`text-sm sm:text-base font-sans-clean leading-relaxed ${
                        isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
                      }`}
                    >
                      {c.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          03 — NOS PARFUMS
      ====================================================== */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <Reveal variant="fade" className="mb-10 sm:mb-14 text-center">
          <p
            className={`text-[10px] sm:text-xs uppercase tracking-[0.25em] font-sans-clean mb-3 ${
              isDarkMode ? 'text-[#807b71]' : 'text-[#8a8780]'
            }`}
          >
            Nos parfums
          </p>
          <h2
            className={`font-serif-main text-2xl sm:text-3xl lg:text-4xl ${
              isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'
            }`}
          >
            Une gamme de{' '}
            <span className="font-script text-3xl sm:text-4xl text-[#f4a8bf]">
              saveurs
            </span>
          </h2>
          <p
            className={`mt-4 text-sm sm:text-base font-sans-clean max-w-2xl mx-auto ${
              isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
            }`}
          >
            Découvrez la gamme de parfums que nous proposons pour nos créations.
          </p>
        </Reveal>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {FLAVORS.map((flavor, i) => (
            <Reveal key={i} variant="up" delay={i * 30}>
              <span
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm font-sans-clean transition-all ${
                  isDarkMode
                    ? 'bg-[#1c1a17] border-[#332f28] text-[#e8e4dc] hover:border-[#f4a8bf]/50'
                    : 'bg-[#faf8f5] border-[#e8e4dc] text-[#2c2b29] hover:border-[#f4a8bf]/50'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#f4a8bf]" />
                {flavor}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* =====================================================
          04 — RÉALISATIONS
      ====================================================== */}
      <section
        className={`relative z-10 py-16 sm:py-24 px-4 sm:px-6 ${
          isDarkMode ? 'bg-[#181714]' : 'bg-white/50'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <Reveal variant="fade" className="mb-10 sm:mb-14 text-center">
            <p
              className={`text-[10px] sm:text-xs uppercase tracking-[0.25em] font-sans-clean mb-3 ${
                isDarkMode ? 'text-[#807b71]' : 'text-[#8a8780]'
              }`}
            >
              Réalisations
            </p>
            <h2
              className={`font-serif-main text-2xl sm:text-3xl lg:text-4xl ${
                isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'
              }`}
            >
              Ses{' '}
              <span className="font-script text-3xl sm:text-4xl text-[#f4a8bf]">
                créations
              </span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {WEDDING_CAKE_IMAGES.map((src, i) => (
              <Reveal key={i} variant="up" delay={i * 40}>
                <button
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  className={`relative aspect-square rounded-xl border overflow-hidden group block w-full cursor-zoom-in ${
                    isDarkMode
                      ? 'bg-[#1c1a17] border-[#332f28]'
                      : 'bg-[#faf8f5] border-[#e8e4dc]'
                  }`}
                >
                  <img
                    src={src}
                    alt={`Réalisation Les Délices de Nora ${i + 1}`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 text-[#e8e4dc] hover:bg-[#f4a8bf] hover:text-white flex items-center justify-center transition-colors z-10"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <img
            src={WEDDING_CAKE_IMAGES[lightboxIndex]}
            alt={`Réalisation Les Délices de Nora ${lightboxIndex + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
            referrerPolicy="no-referrer"
          />

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 text-[#e8e4dc] hover:bg-[#f4a8bf] hover:text-white flex items-center justify-center transition-colors z-10"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 text-[#e8e4dc] hover:bg-[#f4a8bf] hover:text-white flex items-center justify-center transition-colors z-10"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <p className="absolute bottom-4 left-0 right-0 text-center text-[#e8e4dc]/70 text-sm font-sans-clean z-10">
            {lightboxIndex + 1} / {WEDDING_CAKE_IMAGES.length}
          </p>
        </div>
      )}

      <FooterBanner
        isDarkMode={isDarkMode}
        onOpenContact={onOpenContact}
      />
      <FloatingPartnerMenu isDarkMode={isDarkMode} />
    </div>
  );
};
