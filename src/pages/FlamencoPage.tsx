import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Music, User, Layers, Play, Sparkles, Volume2, VolumeX, Instagram, Globe, ExternalLink } from 'lucide-react';
import { HlsVideo } from '../components/LoveAndLifeSection';
import { RomanticBackground } from '../components/RomanticBackground';
import { BowDivider } from '../components/BowDivider';
import { Reveal } from '../components/Reveal';
import { FooterBanner } from '../components/FooterBanner';
import { FloatingPartnerMenu } from '../components/FloatingPartnerMenu';
import gsap from 'gsap';

const FLAMENCO_IMAGES = {
  heroLeft: '/caroline pastor (2).png',
  heroRight: '/caroline pastor (1).png',
  artist: '/caroline desc.jpg',
};

const MISE_EN_SCENE = [
  {
    num: '01',
    title: 'Cocktail ou vin d\'honneur',
    description: 'Une présence artistique raffinée pour accueillir les invités.',
  },
  {
    num: '02',
    title: 'Moment surprise',
    description: 'Une intervention courte et puissante pour marquer les esprits.',
  },
  {
    num: '03',
    title: 'Soirée dansante',
    description: 'Une énergie festive, visuelle et fédératrice.',
  },
];

interface FlamencoPageProps {
  isDarkMode?: boolean;
  onOpenContact: () => void;
}

interface FlamencoVideoProps {
  src: string;
  poster?: string;
  isDarkMode: boolean;
}

const FlamencoVideo: React.FC<FlamencoVideoProps> = ({ src, poster, isDarkMode }) => {
  return (
    <div className="relative flex-1 min-w-0 group">
      <div className="relative aspect-video overflow-hidden bg-black rounded-sm">
        <HlsVideo
          src={src}
          poster={poster}
          controls
          hoverUnmute
          unmuteOnClick
          disableFullscreen
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.025]"
        />
      </div>
    </div>
  );
};

export const FlamencoPage: React.FC<FlamencoPageProps> = ({
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
                Partenaires
                <br />
                <strong className={isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'}>
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
                  src={FLAMENCO_IMAGES.heroLeft}
                  alt="Caroline Pastor — danseuse flamenco"
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
                « L'art du flamenco »
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
              Animation Artistique Live · Le Oui Parfait
            </p>

            <h1
              ref={titleRef}
              className={`font-serif-main text-3xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] font-normal tracking-tight break-words ${
                isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'
              }`}
            >
              <span
                className={`font-script text-4xl sm:text-6xl lg:text-7xl px-1 font-normal inline-block ${
                  isDarkMode ? 'text-[#f4a8bf]' : 'text-[#f4a8bf]'
                }`}
              >
                Flamenco
              </span>{' '}
              Signature
            </h1>

            <p
              className={`mt-4 text-lg sm:text-xl font-serif-main ${
                isDarkMode ? 'text-[#e8e4dc]' : 'text-[#2c2b29]'
              }`}
            >
              Caroline Pastor
            </p>

            <div
              className={`mt-6 sm:mt-8 space-y-4 text-sm sm:text-base lg:text-lg font-sans-clean max-w-xl mx-auto leading-relaxed ${
                isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
              }`}
            >
              <p>
                Une performance intense, élégante et mémorable, pensée pour sublimer les
                temps forts d'un mariage ou d'un évènement privé.
              </p>
              <p
                className={`text-xs sm:text-sm uppercase tracking-widest ${
                  isDarkMode ? 'text-[#807b71]' : 'text-[#8a8780]'
                }`}
              >
                Danse flamenco • Guitare live • Moment d'exception
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
                  src={FLAMENCO_IMAGES.heroRight}
                  alt="Caroline Pastor — performance flamenco"
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
                « L'intensité du geste »
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
          01 — L'EXPÉRIENCE
      ====================================================== */}

      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <Reveal variant="fade" className="mb-10 sm:mb-14">
          <div className="flex items-center gap-4 mb-4">
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
                L'expérience
              </p>
              <h2
                className={`font-serif-main text-2xl sm:text-3xl lg:text-4xl ${
                  isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'
                }`}
              >
                Un moment vivant, chic et{' '}
                <span
                  className={`font-script text-3xl sm:text-4xl ${
                    isDarkMode ? 'text-[#f4a8bf]' : 'text-[#f4a8bf]'
                  }`}
                >
                  spectaculaire
                </span>
              </h2>
            </div>
          </div>
        </Reveal>

        <div
          className={`space-y-5 text-sm sm:text-base lg:text-lg font-sans-clean leading-relaxed ${
            isDarkMode ? 'text-[#e8e4dc]/90' : 'text-[#2c2b29]'
          }`}
        >
          <Reveal variant="up">
            <p>
              Le flamenco apporte une énergie rare : le rythme des talons, la grâce du
              mouvement, l'intensité du regard et l'émotion de la guitare en direct.
            </p>
          </Reveal>
          <Reveal variant="up" delay={80}>
            <p>
              Dans l'univers Le Oui Parfait, cette animation devient un véritable tableau
              vivant : élégante, maîtrisée, surprenante et parfaitement intégrée au déroulé
              de votre réception.
            </p>
          </Reveal>
          <Reveal variant="up" delay={160}>
            <p
              className={`text-base sm:text-lg font-serif-main italic ${
                isDarkMode ? 'text-[#c8c0f5]' : 'text-[#78876e]'
              }`}
            >
              Idéal pour : cocktail, arrivée des mariés, transition dîner, ouverture de
              soirée ou animation surprise.
            </p>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          02 — L'ARTISTE PARTENAIRE
      ====================================================== */}

      <section
        className={`relative z-10 py-16 sm:py-24 ${
          isDarkMode ? 'bg-[#181714]' : 'bg-[#f5f3f0]'
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <Reveal variant="fade" className="mb-10 sm:mb-14">
            <div className="flex items-center gap-4 mb-4">
              <span
                className={`font-serif-main text-5xl sm:text-6xl ${
                  isDarkMode ? 'text-[#332f28]' : 'text-[#e8e4dc]'
                }`}
              >
                02
              </span>
              <div>
                <p
                  className={`text-[10px] sm:text-xs uppercase tracking-[0.25em] font-sans-clean ${
                    isDarkMode ? 'text-[#807b71]' : 'text-[#8a8780]'
                  }`}
                >
                  L'artiste partenaire
                </p>
                <h2
                  className={`font-serif-main text-2xl sm:text-3xl lg:text-4xl ${
                    isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'
                  }`}
                >
                  Caroline{' '}
                  <span
                    className={`font-script text-3xl sm:text-4xl ${
                      isDarkMode ? 'text-[#f4a8bf]' : 'text-[#f4a8bf]'
                    }`}
                  >
                    Pastor
                  </span>
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <Reveal variant="right" className="lg:col-span-1">
              <div
                className={`relative rounded-xs overflow-hidden max-w-[400px] w-full mx-auto ${
                  isDarkMode ? 'bg-[#282521]' : 'bg-[#e8e4dc]/40'
                }`}
              >
                <img
                  src={FLAMENCO_IMAGES.artist}
                  alt="Caroline Pastor — danseuse de flamenco"
                  className="w-full h-full object-cover aspect-[4/3]"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Liens sociaux */}
              <div className="max-w-[400px] w-full mx-auto mt-6 flex flex-col gap-3">
                <a
                  href="https://www.instagram.com/carolinepastorflamenco/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-3 px-5 py-3.5 rounded-xs border transition-all hover:scale-[1.02] ${
                    isDarkMode
                      ? 'border-[#332f28] bg-[#1c1a17] hover:border-[#f4a8bf]/50'
                      : 'border-[#e8e4dc] bg-white hover:border-[#f4a8bf]/50'
                  }`}
                >
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#f4a8bf]/20 to-[#c8c0f5]/20 flex items-center justify-center shrink-0">
                    <Instagram className="w-4.5 h-4.5 text-[#f4a8bf]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-[10px] uppercase tracking-widest font-sans-clean ${
                      isDarkMode ? 'text-[#807b71]' : 'text-[#8a8780]'
                    }`}>
                      Instagram
                    </p>
                    <p className={`text-xs sm:text-sm font-sans-clean truncate ${
                      isDarkMode ? 'text-[#e8e4dc]' : 'text-[#2c2b29]'
                    }`}>
                      @carolinepastorflamenco
                    </p>
                  </div>
                  <ExternalLink className={`w-4 h-4 shrink-0 transition-colors ${
                    isDarkMode ? 'text-[#807b71] group-hover:text-[#f4a8bf]' : 'text-[#8a8780] group-hover:text-[#f4a8bf]'
                  }`} />
                </a>

                <a
                  href="https://carolinapastor.wixsite.com/flamenco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-3 px-5 py-3.5 rounded-xs border transition-all hover:scale-[1.02] ${
                    isDarkMode
                      ? 'border-[#332f28] bg-[#1c1a17] hover:border-[#f4a8bf]/50'
                      : 'border-[#e8e4dc] bg-white hover:border-[#f4a8bf]/50'
                  }`}
                >
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#c8c0f5]/20 to-[#f4a8bf]/20 flex items-center justify-center shrink-0">
                    <Globe className="w-4.5 h-4.5 text-[#c8c0f5]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-[10px] uppercase tracking-widest font-sans-clean ${
                      isDarkMode ? 'text-[#807b71]' : 'text-[#8a8780]'
                    }`}>
                      Site officiel
                    </p>
                    <p className={`text-xs sm:text-sm font-sans-clean truncate ${
                      isDarkMode ? 'text-[#e8e4dc]' : 'text-[#2c2b29]'
                    }`}>
                      carolinapastor.wixsite.com
                    </p>
                  </div>
                  <ExternalLink className={`w-4 h-4 shrink-0 transition-colors ${
                    isDarkMode ? 'text-[#807b71] group-hover:text-[#f4a8bf]' : 'text-[#8a8780] group-hover:text-[#f4a8bf]'
                  }`} />
                </a>

                <a
                  href="https://www.flamencoenfrance.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-3 px-5 py-3.5 rounded-xs border transition-all hover:scale-[1.02] ${
                    isDarkMode
                      ? 'border-[#332f28] bg-[#1c1a17] hover:border-[#f4a8bf]/50'
                      : 'border-[#e8e4dc] bg-white hover:border-[#f4a8bf]/50'
                  }`}
                >
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#f4a8bf]/20 to-[#c8c0f5]/20 flex items-center justify-center shrink-0">
                    <Music className="w-4.5 h-4.5 text-[#f4a8bf]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-[10px] uppercase tracking-widest font-sans-clean ${
                      isDarkMode ? 'text-[#807b71]' : 'text-[#8a8780]'
                    }`}>
                      Flamenco en France
                    </p>
                    <p className={`text-xs sm:text-sm font-sans-clean truncate ${
                      isDarkMode ? 'text-[#e8e4dc]' : 'text-[#2c2b29]'
                    }`}>
                      flamencoenfrance.fr
                    </p>
                  </div>
                  <ExternalLink className={`w-4 h-4 shrink-0 transition-colors ${
                    isDarkMode ? 'text-[#807b71] group-hover:text-[#f4a8bf]' : 'text-[#8a8780] group-hover:text-[#f4a8bf]'
                  }`} />
                </a>
              </div>
            </Reveal>

            <Reveal variant="left" className="lg:col-span-1 space-y-5">
              <p
                className={`text-sm sm:text-base lg:text-lg font-sans-clean leading-relaxed ${
                  isDarkMode ? 'text-[#e8e4dc]/90' : 'text-[#2c2b29]'
                }`}
              >
                Danseuse, chorégraphe et professeure de flamenco, Caroline Pastor se forme
                dès l'enfance puis poursuit son apprentissage entre la France et l'Espagne,
                auprès de grands maîtres du flamenco.
              </p>
              <p
                className={`text-sm sm:text-base lg:text-lg font-sans-clean leading-relaxed ${
                  isDarkMode ? 'text-[#e8e4dc]/90' : 'text-[#2c2b29]'
                }`}
              >
                Installée un temps à Séville, elle se produit dans plusieurs tablaos
                reconnus et développe aujourd'hui sa propre compagnie. Son univers mêle
                exigence artistique, émotion scénique et élégance du geste.
              </p>
              <p
                className={`text-base sm:text-lg font-serif-main italic ${
                  isDarkMode ? 'text-[#c8c0f5]' : 'text-[#78876e]'
                }`}
              >
                Une animation pensée pour créer un souvenir fort auprès des invités.
              </p>
              <div
                className={`flex flex-wrap gap-3 pt-2 ${
                  isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
                }`}
              >
                {['Scène', 'Mariage', 'Évènement privé', 'Expérience culturelle'].map((tag, i) => (
                  <span
                    key={i}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-sans-clean border ${
                      isDarkMode
                        ? 'border-[#c8c0f5]/30 bg-[#c8c0f5]/5 text-[#c8c0f5]'
                        : 'border-[#8b9a82]/30 bg-[#8b9a82]/5 text-[#78876e]'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          03 — MISE EN SCÈNE
      ====================================================== */}

      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <Reveal variant="fade" className="mb-10 sm:mb-14">
          <div className="flex items-center gap-4 mb-4">
            <span
              className={`font-serif-main text-5xl sm:text-6xl ${
                isDarkMode ? 'text-[#332f28]' : 'text-[#e8e4dc]'
              }`}
            >
              03
            </span>
            <div>
              <p
                className={`text-[10px] sm:text-xs uppercase tracking-[0.25em] font-sans-clean ${
                  isDarkMode ? 'text-[#807b71]' : 'text-[#8a8780]'
                }`}
              >
                Mise en scène
              </p>
              <h2
                className={`font-serif-main text-2xl sm:text-3xl lg:text-4xl ${
                  isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'
                }`}
              >
                Des formats adaptés à votre{' '}
                <span
                  className={`font-script text-3xl sm:text-4xl ${
                    isDarkMode ? 'text-[#f4a8bf]' : 'text-[#f4a8bf]'
                  }`}
                >
                  réception
                </span>
              </h2>
            </div>
          </div>
        </Reveal>

        <Reveal variant="up" className="max-w-2xl mb-10">
          <p
            className={`text-sm sm:text-base lg:text-lg font-sans-clean leading-relaxed ${
              isDarkMode ? 'text-[#e8e4dc]/90' : 'text-[#2c2b29]'
            }`}
          >
            L'animation peut être intégrée avec finesse, sans casser le rythme du mariage.
            Elle vient souligner un instant précis et créer un effet « waouh » naturel.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {MISE_EN_SCENE.map((item, i) => (
            <Reveal
              key={i}
              variant="up"
              delay={i * 80}
              className={`group relative p-6 sm:p-8 rounded-xs border transition-all duration-500 hover:-translate-y-1 ${
                isDarkMode
                  ? 'bg-[#1c1a17] border-[#332f28] hover:border-[#c8c0f5]/30'
                  : 'bg-white border-[#e8e4dc] hover:border-[#8b9a82]/30'
              }`}
            >
              <span
                className={`font-serif-main text-4xl sm:text-5xl block mb-4 ${
                  isDarkMode ? 'text-[#c8c0f5]/40' : 'text-[#8b9a82]/40'
                }`}
              >
                {item.num}
              </span>
              <h3
                className={`font-serif-main text-lg sm:text-xl mb-3 ${
                  isDarkMode ? 'text-[#e8e4dc]' : 'text-[#2c2b29]'
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`text-sm font-sans-clean leading-relaxed ${
                  isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
                }`}
              >
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal variant="fade" className="mt-10 text-center">
          <p
            className={`text-xs sm:text-sm font-sans-clean italic ${
              isDarkMode ? 'text-[#807b71]' : 'text-[#8a8780]'
            }`}
          >
            À ajuster selon le lieu, la durée souhaitée et le déroulé du mariage.
          </p>
        </Reveal>
      </section>

      {/* =====================================================
          04 — DÉMO VIDÉO 01
      ====================================================== */}

      <section className="relative z-10 w-full py-16 sm:py-24 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <Reveal variant="fade" className="mb-8 sm:mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span
                className="font-serif-main text-5xl sm:text-6xl text-[#332f28]"
              >
                04
              </span>
              <div>
                <p
                  className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-sans-clean text-[#807b71]"
                >
                  Démo vidéo 01
                </p>
                <h2
                  className="font-serif-main text-2xl sm:text-3xl lg:text-4xl text-[#c8c0f5]"
                >
                  Performance{' '}
                  <span
                    className="font-script text-3xl sm:text-4xl text-[#f4a8bf]"
                  >
                    scénique
                  </span>
                </h2>
              </div>
            </div>
          </Reveal>

          {/* Vidéo 01 — vidéo à gauche, texte à droite */}
          <Reveal variant="zoom" className="w-full">
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 max-w-5xl mx-auto w-full">
              <FlamencoVideo
                src="https://customer-wqxo6nzwlwy95bai.cloudflarestream.com/76944bd08acbf2942bb4ca97b304ecc9/manifest/video.m3u8"
                isDarkMode={isDarkMode}
              />

              {/* Texte à droite */}
              <div className="sm:w-[280px] shrink-0 text-left sm:text-right">
                <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] font-sans-clean text-[#f4a8bf] mb-2">
                  Démo vidéo 01
                </p>
                <h3 className="font-serif-main text-xl sm:text-2xl lg:text-3xl leading-tight text-[#e8e4dc]">
                  Performance scénique
                </h3>
                <p className="mt-4 text-xs sm:text-sm font-sans-clean leading-relaxed text-[#b5b0a5]">
                  Une démonstration brute de l'intensité scénique de Caroline Pastor : rythme, grâce et émotion réunis en un seul tableau vivant.
                </p>
                <p className="mt-4 text-[9px] sm:text-[10px] font-sans-clean text-[#807b71] uppercase tracking-widest">
                  Le Oui Parfait • Animations mariage & évènementiel
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          05 — DÉMO VIDÉO 02
      ====================================================== */}

      <section
        className="relative z-10 w-full py-16 sm:py-24 bg-black"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <Reveal variant="fade" className="mb-8 sm:mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span
                className="font-serif-main text-5xl sm:text-6xl text-[#332f28]"
              >
                05
              </span>
              <div>
                <p
                  className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-sans-clean text-[#807b71]"
                >
                  Démo vidéo 02
                </p>
                <h2
                  className="font-serif-main text-2xl sm:text-3xl lg:text-4xl text-[#c8c0f5]"
                >
                  Un final{' '}
                  <span
                    className="font-script text-3xl sm:text-4xl text-[#f4a8bf]"
                  >
                    vibrant
                  </span>{' '}
                  pour vos invités
                </h2>
              </div>
            </div>
          </Reveal>

          {/* Vidéo 02 — vidéo à gauche, texte à droite */}
          <Reveal variant="zoom" className="w-full">
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 max-w-5xl mx-auto w-full">
              <FlamencoVideo
                src="https://customer-wqxo6nzwlwy95bai.cloudflarestream.com/448a743cba30f2385b29c192ddeecb10/manifest/video.m3u8"
                isDarkMode={isDarkMode}
              />

              {/* Texte à droite */}
              <div className="sm:w-[280px] shrink-0 text-left sm:text-right">
                <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] font-sans-clean text-[#f4a8bf] mb-2">
                  Démo vidéo 02
                </p>
                <h3 className="font-serif-main text-xl sm:text-2xl lg:text-3xl leading-tight text-[#e8e4dc]">
                  Un final vibrant pour vos invités
                </h3>
                <p className="mt-4 text-xs sm:text-sm font-sans-clean leading-relaxed text-[#b5b0a5]">
                  Le moment d'aboutissement où la danse et la guitare se rejoignent pour laisser à vos invités un souvenir inoubliable.
                </p>
                <p className="mt-4 text-[9px] sm:text-[10px] font-sans-clean text-[#807b71] uppercase tracking-widest">
                  Le Oui Parfait • Animations mariage & évènementiel
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          PROPOSITION PARTENAIRE
      ====================================================== */}

      <section className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
        <Reveal variant="fade" className="mb-8">
          <p
            className={`text-[10px] sm:text-xs uppercase tracking-[0.25em] font-sans-clean mb-3 ${
              isDarkMode ? 'text-[#807b71]' : 'text-[#8a8780]'
            }`}
          >
            Proposition partenaire
          </p>
          <h2
            className={`font-serif-main text-3xl sm:text-4xl lg:text-5xl ${
              isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'
            }`}
          >
            Une animation{' '}
            <span
              className={`font-script text-4xl sm:text-5xl ${
                isDarkMode ? 'text-[#f4a8bf]' : 'text-[#f4a8bf]'
              }`}
            >
              premium
            </span>
            , culturelle et émotionnelle
          </h2>
        </Reveal>

        <Reveal variant="up" delay={80}>
          <div
            className={`mt-8 p-8 sm:p-10 rounded-xs border text-left ${
              isDarkMode
                ? 'bg-[#1c1a17] border-[#332f28]'
                : 'bg-white border-[#e8e4dc]'
            }`}
          >
            <p
              className={`font-serif-main text-xl sm:text-2xl mb-4 ${
                isDarkMode ? 'text-[#e8e4dc]' : 'text-[#2c2b29]'
              }`}
            >
              Le Oui Parfait
            </p>
            <p
              className={`text-sm sm:text-base font-sans-clean leading-relaxed ${
                isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
              }`}
            >
              Animation flamenco live avec danse et guitare, à intégrer selon le lieu, la
              durée et le déroulé de la réception.
            </p>
          </div>
        </Reveal>

        <Reveal variant="zoom" delay={160} className="mt-10">
          <button
            type="button"
            onClick={onOpenContact}
            className={`inline-flex px-6 sm:px-8 py-3 rounded-full font-sans-clean font-medium text-sm transition-all shadow-md active:scale-95 ${
              isDarkMode
                ? 'bg-[#c8c0f5] text-[#141311] hover:bg-[#e8e4dc]'
                : 'bg-[#8b9a82] text-white hover:bg-[#74836b]'
            }`}
          >
            Réserver cette animation
          </button>
        </Reveal>
      </section>

      <FooterBanner
        isDarkMode={isDarkMode}
        onOpenContact={onOpenContact}
      />

      <FloatingPartnerMenu isDarkMode={isDarkMode} />
    </div>
  );
};
