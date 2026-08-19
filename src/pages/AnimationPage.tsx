import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, Palette, Backpack, Lightbulb, Mic, Drama, Sparkles, Check, Users, Brush, Gamepad2, Heart } from 'lucide-react';
import { RomanticBackground } from '../components/RomanticBackground';
import { BowDivider } from '../components/BowDivider';
import { Reveal } from '../components/Reveal';
import { FooterBanner } from '../components/FooterBanner';
import { FloatingPartnerMenu } from '../components/FloatingPartnerMenu';
import gsap from 'gsap';

const ANIMATION_HERO_IMAGES = {
  main: '/la maison des 4A.webp',
  logo: '/maison des 4A logo.webp',
  montessori: '/methode montesouris.webp',
  childLeft: '/animation enfant (1).mp4',
  childRight: '/animation enfant (2).mp4',
};

interface AnimationPageProps {
  isDarkMode?: boolean;
  onOpenContact: () => void;
}

const ATELIERS = [
  {
    icon: Palette,
    emoji: '🎨',
    title: 'Imagine, crée & customise',
    description:
      "Tote bags, tee-shirts, petits objets, dessin, peinture ou créations manuelles… Chaque enfant laisse parler son imagination et repart avec sa propre création.",
  },
  {
    icon: Backpack,
    emoji: '🎒',
    title: 'Customise ta création',
    description:
      "Un atelier manuel autour d'un objet personnalisé que les enfants décorent eux-mêmes. Couleurs, matières, accessoires : chacun crée quelque chose qui lui ressemble.",
  },
  {
    icon: Lightbulb,
    emoji: '💡',
    title: 'Crée ta marque !',
    description:
      "Et si vos petits invités devenaient entrepreneurs le temps d'un atelier ? Ils imaginent un nom, un logo, un produit et apprennent ensuite à présenter leur idée aux autres.",
  },
  {
    icon: Mic,
    emoji: '🎤',
    title: "À toi l'interview !",
    description:
      "Journaliste ou personnalité ? Les enfants préparent leurs questions, s'interviewent, changent de rôle et apprennent à s'exprimer tout en s'amusant.",
  },
  {
    icon: Drama,
    emoji: '🎭',
    title: 'Jeux de rôle & défis en équipe',
    description:
      "Des petits challenges pensés pour les faire réfléchir, communiquer, coopérer… et surtout rire ensemble.",
  },
];

const FORMULA_ITEMS = [
  { icon: Users, label: "Jusqu'à 25 enfants" },
  { icon: Sparkles, label: '2 animatrices incluses' },
  { icon: Brush, label: 'Ateliers & matériel' },
  { icon: Gamepad2, label: 'Jeux & défis' },
  { icon: Heart, label: 'Programme personnalisé' },
  { icon: Heart, label: 'Spécial mariages & événements' },
];

const INCLUDED_ITEMS = [
  "Jusqu'à 25 enfants",
  '2 animatrices incluses',
  'Mise en place et animation des activités',
  'Ateliers créatifs et activités manuelles',
  'Jeux collectifs',
  'Jeux de rôle et défis en équipe',
  "Activités favorisant la créativité et l'expression",
  "Programme adapté à l'âge et à la composition du groupe",
  'Matériel nécessaire aux ateliers sélectionnés',
  'Encadrement pendant la durée de la prestation',
];

export const AnimationPage: React.FC<AnimationPageProps> = ({
  isDarkMode = true,
  onOpenContact,
}) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [accordionOpen, setAccordionOpen] = useState(false);

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
          {/* Image gauche — Enfants en train de jouer */}
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
                <video
                  src={ANIMATION_HERO_IMAGES.childLeft}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p
                className={`mt-3 text-center font-serif-main text-xs sm:text-sm italic ${
                  isDarkMode ? 'text-[#e8e4dc]' : 'text-[#5c6954]'
                }`}
              >
                « L'imagination en action »
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
              Animation enfants · Le Oui Parfait × Maison des 4A
            </p>

            <h1
              ref={titleRef}
              className={`font-serif-main text-3xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] font-normal tracking-tight break-words ${
                isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'
              }`}
            >
              Les petits invités aussi ont droit à leur{' '}
              <span
                className={`font-script text-4xl sm:text-6xl lg:text-7xl px-1 font-normal inline-block ${
                  isDarkMode ? 'text-[#f4a8bf]' : 'text-[#f4a8bf]'
                }`}
              >
                moment parfait
              </span>
            </h1>

            <div
              className={`mt-8 sm:mt-10 space-y-5 text-sm sm:text-base lg:text-lg font-sans-clean leading-relaxed ${
                isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
              }`}
            >
              <p>
                Une animation Le Oui Parfait, en collaboration avec Maison des 4A
              </p>
              <p>
                Et si les petits invités avaient eux aussi leur propre programme ?{' '}
                <strong className={isDarkMode ? 'text-[#e8e4dc]' : 'text-[#2c2b29]'}>
                  Le Oui Parfait
                </strong>{' '}
                s'associe à{' '}
                <strong className={isDarkMode ? 'text-[#e8e4dc]' : 'text-[#2c2b29]'}>
                  Maison des 4A
                </strong>{' '}
                pour créer{' '}
                <span className="text-[#f4a8bf] font-semibold">Oui Oui Kids</span>, une
                animation pensée spécialement pour faire jouer, créer et s'amuser les
                enfants pendant votre événement.
              </p>
            </div>

            {/* Logos badges */}
            <div className="mt-8 flex items-center justify-center gap-6 sm:gap-8">
              <div
                className={`flex flex-col items-center gap-2 px-4 py-3 rounded-xs border ${
                  isDarkMode
                    ? 'border-[#332f28]'
                    : 'border-[#e8e4dc]'
                }`}
              >
                <div className="bg-white rounded-md p-2 flex items-center justify-center">
                  <img
                    src={ANIMATION_HERO_IMAGES.montessori}
                    alt="Méthode Montessori"
                    className="h-10 sm:h-12 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span
                  className={`text-[9px] sm:text-[10px] uppercase tracking-widest font-sans-clean ${
                    isDarkMode ? 'text-[#807b71]' : 'text-[#8a8780]'
                  }`}
                >
                  Méthode Montessori
                </span>
              </div>
              <div
                className={`flex flex-col items-center gap-2 px-4 py-3 rounded-xs border ${
                  isDarkMode
                    ? 'border-[#332f28]'
                    : 'border-[#e8e4dc]'
                }`}
              >
                <div className="bg-white rounded-md p-2 flex items-center justify-center">
                  <img
                    src={ANIMATION_HERO_IMAGES.logo}
                    alt="Maison des 4A"
                    className="h-10 sm:h-12 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span
                  className={`text-[9px] sm:text-[10px] uppercase tracking-widest font-sans-clean ${
                    isDarkMode ? 'text-[#807b71]' : 'text-[#8a8780]'
                  }`}
                >
                  Maison des 4A
                </span>
              </div>
            </div>
          </div>

          {/* Image droite — Enfants créatifs */}
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
                <video
                  src={ANIMATION_HERO_IMAGES.childRight}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p
                className={`mt-3 text-center font-serif-main text-xs sm:text-sm italic ${
                  isDarkMode ? 'text-[#e8e4dc]' : 'text-[#5c6954]'
                }`}
              >
                « La créativité en fête »
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
          PRÉSENTATION OUI OUI KIDS
      ====================================================== */}

      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <Reveal variant="fade" className="text-center mb-10 sm:mb-14">
          <h2
            className={`font-serif-main text-3xl sm:text-4xl lg:text-5xl ${
              isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'
            }`}
          >
            L'animation pensée spécialement
            <br />
            pour vos{' '}
            <span
              className={`font-script text-4xl sm:text-5xl ${
                isDarkMode ? 'text-[#f4a8bf]' : 'text-[#f4a8bf]'
              }`}
            >
              petits invités
            </span>
          </h2>
        </Reveal>

        <div
          className={`space-y-5 text-sm sm:text-base lg:text-lg font-sans-clean leading-relaxed ${
            isDarkMode ? 'text-[#e8e4dc]/90' : 'text-[#2c2b29]'
          }`}
        >
          <Reveal variant="up">
            <p>
              Et si les petits invités avaient eux aussi leur propre programme… ?{' '}
              <strong className={isDarkMode ? 'text-[#e8e4dc]' : 'text-[#2c2b29]'}>
                Le Oui Parfait
              </strong>{' '}
              s'associe à{' '}
              <strong className={isDarkMode ? 'text-[#e8e4dc]' : 'text-[#2c2b29]'}>
                Maison des 4A
              </strong>{' '}
              pour créer{' '}
              <span className="text-[#f4a8bf] font-semibold">Oui Oui Kids</span>, une
              animation pensée spécialement pour faire jouer, créer et s'amuser les
              enfants pendant votre événement.
            </p>
          </Reveal>
          <Reveal variant="up" delay={80}>
            <p>
              L'objectif : leur offrir bien plus qu'un simple espace pour les occuper.
            </p>
          </Reveal>
          <Reveal variant="up" delay={160}>
            <p>
              Avec Oui Oui Kids, les enfants créent, jouent, imaginent, échangent et
              participent à des activités adaptées à leur âge et à la dynamique du groupe.
            </p>
          </Reveal>
          <Reveal variant="up" delay={240}>
            <p>
              La philosophie de Maison des 4A repose justement sur quatre fondamentaux :{' '}
              <span className="text-[#f4a8bf] font-semibold">Apprendre</span>,{' '}
              <span className="text-[#f4a8bf] font-semibold">S'amuser</span>,{' '}
              <span className="text-[#f4a8bf] font-semibold">Partager</span>{' '}
              et{' '}
              <span className="text-[#f4a8bf] font-semibold">Accompagner</span>.
            </p>
          </Reveal>
          <Reveal variant="up" delay={320}>
            <p
              className={`text-base sm:text-lg lg:text-xl font-serif-main italic ${
                isDarkMode ? 'text-[#c8c0f5]' : 'text-[#78876e]'
              }`}
            >
              Pendant que vous profitez… eux aussi vivent leur événement.
            </p>
          </Reveal>
          <Reveal variant="up" delay={400}>
            <p>
              Oui Oui Kids permet aux mariés et à leurs invités de profiter plus
              sereinement de la réception, pendant que les enfants bénéficient d'un espace
              qui leur est entièrement consacré.
            </p>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          NOTRE PARTENAIRE — MAISON DES 4A
      ====================================================== */}

      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <Reveal variant="fade" className="text-center mb-10 sm:mb-14">
          <p
            className={`text-[10px] sm:text-xs uppercase tracking-[0.25em] font-sans-clean mb-3 ${
              isDarkMode ? 'text-[#807b71]' : 'text-[#8a8780]'
            }`}
          >
            Notre partenaire
          </p>
          <h2
            className={`font-serif-main text-3xl sm:text-4xl lg:text-5xl ${
              isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'
            }`}
          >
            Maison des{' '}
            <span
              className={`font-script text-4xl sm:text-5xl ${
                isDarkMode ? 'text-[#f4a8bf]' : 'text-[#f4a8bf]'
              }`}
            >
              4A
            </span>
          </h2>
          <p
            className={`mt-3 text-sm sm:text-base font-sans-clean ${
              isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
            }`}
          >
            Apprendre • S'amuser • Partager • Accompagner
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <Reveal variant="right" className="lg:col-span-1">
            <div
              className={`relative p-3 sm:p-4 pb-8 sm:pb-12 rounded-xs polaroid-shadow border max-w-[400px] w-full mx-auto ${
                isDarkMode
                  ? 'bg-[#1c1a17] border-[#332f28]'
                  : 'bg-white border-[#e8e4dc]'
              }`}
            >
              <div
                className={`relative aspect-[4/3] overflow-hidden ${
                  isDarkMode ? 'bg-[#282521]' : 'bg-[#e8e4dc]/40'
                }`}
              >
                <img
                  src={ANIMATION_HERO_IMAGES.main}
                  alt="La gérante de Maison des 4A — partenaire de Le Oui Parfait"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p
                className={`mt-3 text-center font-serif-main text-xs sm:text-sm italic ${
                  isDarkMode ? 'text-[#e8e4dc]' : 'text-[#5c6954]'
                }`}
              >
                « Anissa & Sarah de Maison des 4A, notre partenaire pour Oui Oui Kids »
              </p>
            </div>
          </Reveal>

          <Reveal variant="left" className="lg:col-span-1 space-y-5">
            <div className="flex items-center gap-4">
              <div className="bg-white rounded-lg p-3 flex items-center justify-center">
                <img
                  src={ANIMATION_HERO_IMAGES.logo}
                  alt="Logo Maison des 4A"
                  className="h-16 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="bg-white rounded-lg p-3 flex items-center justify-center">
                <img
                  src={ANIMATION_HERO_IMAGES.montessori}
                  alt="Méthode Montessori"
                  className="h-16 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <p
              className={`text-sm sm:text-base lg:text-lg font-sans-clean leading-relaxed ${
                isDarkMode ? 'text-[#e8e4dc]/90' : 'text-[#2c2b29]'
              }`}
            >
              Maison des 4A est le partenaire de confiance de Le Oui Parfait pour
              l'animation enfants. Leur approche repose sur la pédagogie active et la
              méthode Montessori, avec une conviction simple : chaque enfant a le droit de
              vivre l'événement à sa hauteur.
            </p>
            <p
              className={`text-sm sm:text-base lg:text-lg font-sans-clean leading-relaxed ${
                isDarkMode ? 'text-[#e8e4dc]/90' : 'text-[#2c2b29]'
              }`}
            >
              Les ateliers sont conçus pour s'adapter à l'âge des enfants, à la composition
              du groupe et à l'objectif recherché, avec une approche favorisant coopération,
              autonomie, expression et confiance en soi.
            </p>
            <div
              className={`flex flex-wrap gap-3 pt-2 ${
                isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
              }`}
            >
              {['Apprendre', "S'amuser", 'Partager', 'Accompagner'].map((value, i) => (
                <span
                  key={i}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-sans-clean border ${
                    isDarkMode
                      ? 'border-[#c8c0f5]/30 bg-[#c8c0f5]/5 text-[#c8c0f5]'
                      : 'border-[#8b9a82]/30 bg-[#8b9a82]/5 text-[#78876e]'
                  }`}
                >
                  {value}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          LA FORMULE — CE QUI EST INCLUS
      ====================================================== */}

      <section
        className={`relative z-10 py-16 sm:py-24 ${
          isDarkMode ? 'bg-[#181714]' : 'bg-[#f5f3f0]'
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <Reveal variant="fade" className="text-center mb-10 sm:mb-14">
            <h2
              className={`font-serif-main text-3xl sm:text-4xl lg:text-5xl ${
                isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'
              }`}
            >
              Tout est{' '}
              <span
                className={`font-script text-4xl sm:text-5xl ${
                  isDarkMode ? 'text-[#f4a8bf]' : 'text-[#f4a8bf]'
                }`}
              >
                prévu
              </span>{' '}
              pour les enfants
            </h2>
            <p
              className={`mt-4 text-sm sm:text-base font-sans-clean max-w-2xl mx-auto ${
                isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
              }`}
            >
              Une formule complète et encadrée, pensée pour s'adapter à chaque groupe.
            </p>
          </Reveal>

          {/* Grille formule */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mb-12">
            {FORMULA_ITEMS.map((item, i) => (
              <Reveal
                key={i}
                variant="up"
                delay={i * 60}
                className={`flex flex-col items-center gap-3 p-5 sm:p-6 rounded-xs border text-center ${
                  isDarkMode
                    ? 'bg-[#1c1a17] border-[#332f28]'
                    : 'bg-white border-[#e8e4dc]'
                }`}
              >
                <span
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    isDarkMode
                      ? 'bg-[#c8c0f5]/15 text-[#c8c0f5]'
                      : 'bg-[#8b9a82]/15 text-[#78876e]'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                </span>
                <span
                  className={`text-xs sm:text-sm font-sans-clean ${
                    isDarkMode ? 'text-[#e8e4dc]' : 'text-[#2c2b29]'
                  }`}
                >
                  {item.label}
                </span>
              </Reveal>
            ))}
          </div>

          {/* Liste détaillée — accordéon */}
          <Reveal variant="up" className="max-w-2xl mx-auto">
            <div
              className={`rounded-xs border overflow-hidden ${
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
                  La formule comprend
                </span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                    accordionOpen ? 'rotate-180' : ''
                  } ${isDarkMode ? 'text-[#c8c0f5]' : 'text-[#78876e]'}`}
                />
              </button>
              {accordionOpen && (
                <div className="px-5 pb-5 pt-1">
                  <ul className="space-y-3">
                    {INCLUDED_ITEMS.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-1 ${
                            isDarkMode ? 'text-[#f4a8bf]' : 'text-[#f4a8bf]'
                          }`}
                        />
                        <span
                          className={`text-sm sm:text-base font-sans-clean ${
                            isDarkMode ? 'text-[#e8e4dc]/90' : 'text-[#2c2b29]'
                          }`}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p
                    className={`mt-5 text-xs sm:text-sm font-sans-clean italic ${
                      isDarkMode ? 'text-[#807b71]' : 'text-[#8a8780]'
                    }`}
                  >
                    Les ateliers Maison des 4A sont conçus pour s'adapter à l'âge des
                    enfants, à la composition du groupe et à l'objectif recherché, avec une
                    approche favorisant coopération, autonomie, expression et confiance en
                    soi.
                  </p>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          ATELIERS CRÉATIFS
      ====================================================== */}

      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <Reveal variant="fade" className="text-center mb-10 sm:mb-14">
          <h2
            className={`font-serif-main text-3xl sm:text-4xl lg:text-5xl ${
              isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'
            }`}
          >
            Des ateliers qui{' '}
            <span
              className={`font-script text-4xl sm:text-5xl ${
                isDarkMode ? 'text-[#f4a8bf]' : 'text-[#f4a8bf]'
              }`}
            >
              changent
            </span>{' '}
            de l'animation classique
          </h2>
          <p
            className={`mt-4 text-sm sm:text-base font-sans-clean max-w-2xl mx-auto ${
              isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
            }`}
          >
            Selon l'événement, l'âge des enfants et le temps disponible, Oui Oui Kids peut
            proposer différents univers.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ATELIERS.map((atelier, i) => (
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
              <div className="flex items-center gap-4 mb-4">
                <span
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
                    isDarkMode
                      ? 'bg-[#c8c0f5]/15'
                      : 'bg-[#8b9a82]/15'
                  }`}
                >
                  {atelier.emoji}
                </span>
                <atelier.icon
                  className={`w-5 h-5 ${
                    isDarkMode ? 'text-[#c8c0f5]' : 'text-[#78876e]'
                  }`}
                />
              </div>
              <h3
                className={`font-serif-main text-xl sm:text-2xl mb-3 ${
                  isDarkMode ? 'text-[#e8e4dc]' : 'text-[#2c2b29]'
                }`}
              >
                {atelier.title}
              </h3>
              <p
                className={`text-sm font-sans-clean leading-relaxed ${
                  isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
                }`}
              >
                {atelier.description}
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
            Ces formats figurent parmi les exemples d'ateliers développés par Maison des 4A.
          </p>
        </Reveal>
      </section>

      {/* =====================================================
          PERSONNALISATION
      ====================================================== */}

      <section
        className={`relative z-10 py-16 sm:py-24 ${
          isDarkMode ? 'bg-[#181714]' : 'bg-[#f5f3f0]'
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Reveal variant="fade" className="text-center mb-10 sm:mb-14">
            <h2
              className={`font-serif-main text-3xl sm:text-4xl lg:text-5xl ${
                isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'
              }`}
            >
              Une animation qui{' '}
              <span
                className={`font-script text-4xl sm:text-5xl ${
                  isDarkMode ? 'text-[#f4a8bf]' : 'text-[#f4a8bf]'
                }`}
              >
                s'adapte
              </span>{' '}
              à votre mariage
            </h2>
            <p
              className={`mt-4 text-sm sm:text-base font-sans-clean max-w-2xl mx-auto ${
                isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
              }`}
            >
              Pas de programme complètement figé.
            </p>
          </Reveal>

          <Reveal variant="up" className="max-w-2xl mx-auto">
            <p
              className={`text-sm sm:text-base lg:text-lg font-sans-clean leading-relaxed mb-6 ${
                isDarkMode ? 'text-[#e8e4dc]/90' : 'text-[#2c2b29]'
              }`}
            >
              Avant l'événement, nous définissons les animations les plus adaptées en
              fonction de :
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "du nombre d'enfants",
                'de leur âge',
                'du lieu',
                'de la durée souhaitée',
                "de l'ambiance du mariage",
                'des activités sélectionnées',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#f4a8bf] shrink-0" />
                  <span
                    className={`text-sm sm:text-base font-sans-clean capitalize ${
                      isDarkMode ? 'text-[#e8e4dc]/90' : 'text-[#2c2b29]'
                    }`}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p
              className={`text-sm sm:text-base lg:text-lg font-sans-clean leading-relaxed ${
                isDarkMode ? 'text-[#e8e4dc]/90' : 'text-[#2c2b29]'
              }`}
            >
              Ainsi, Oui Oui Kids peut prendre la forme d'un atelier créatif, d'un programme
              de plusieurs animations ou d'un véritable petit univers enfants au cœur de
              votre réception.
            </p>
          </Reveal>
        </div>
      </section>

      <FooterBanner
        isDarkMode={isDarkMode}
        onOpenContact={onOpenContact}
      />

      <FloatingPartnerMenu isDarkMode={isDarkMode} />
    </div>
  );
};
