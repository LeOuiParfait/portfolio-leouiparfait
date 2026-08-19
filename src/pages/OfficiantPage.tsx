import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Heart,
  Mail,
  Phone,
  Instagram,
  Sparkles,
  PenLine,
  Mic,
  CalendarCheck,
  Users,
  MapPin,
  Music,
} from 'lucide-react';
import gsap from 'gsap';

import { RomanticBackground } from '../components/RomanticBackground';
import { BowDivider } from '../components/BowDivider';
import { Reveal } from '../components/Reveal';
import { FooterBanner } from '../components/FooterBanner';
import { FloatingPartnerMenu } from '../components/FloatingPartnerMenu';

const OFFICIANT_IMAGES = {
  heroLeft: '/officiant/officiant hero (1).png',
  heroRight: '/officiant/officiant hero (2).png',
  vincent1: '/officiant/vincent (1).png',
  vincent2: '/officiant/vincent (2).png',
};

const PROCESS_STEPS = [
  {
    num: '01',
    icon: MapPin,
    title: 'Le Rendez-vous "Découverte"',
    description:
      "Premier échange en visio afin de faire connaissance et de découvrir les offres qui vous correspondent, avant de réserver la prestation de votre Officiant de Rêve en signant notre contrat de prestation.",
  },
  {
    num: '02',
    icon: PenLine,
    title: 'Le Rendez-vous "Confidence"',
    description:
      "Un rendez-vous de prise d'informations pour connaître vos attentes, vos souhaits, votre histoire... À l'issue de ce rendez-vous, votre officiant écrira une cérémonie à votre image en vous conseillant sur le choix des textes, des musiques, des rituels...",
  },
  {
    num: '03',
    icon: Mic,
    title: 'Le Rendez-vous "Révélation"',
    description:
      "Restitution orale de la cérémonie, qui vous permet de vous projeter dans cette belle journée et d'affiner les détails. L'officiant contacte vos témoins et les différents intervenants afin de les briefer et de coordonner leurs interventions — gardées secrètes pour vous jusqu'au Jour J...",
  },
  {
    num: '04',
    icon: CalendarCheck,
    title: 'La Prestation du Jour J',
    description:
      "Le jour de la cérémonie, votre officiant arrivera suffisamment tôt sur le lieu de la célébration pour s'assurer de son bon déroulement (tests son, brief sonorisateur...). Il ne vous reste qu'à profiter de votre cérémonie !",
  },
];

const PRESTATIONS = [
  {
    id: 'odr',
    badge: 'Officiant de Rêve',
    title: 'Officiant de Rêve (ODR)',
    icon: Sparkles,
    description:
      "La prestation destinée aux couples souhaitant faire appel à un officiant professionnel pour créer, écrire et célébrer leur cérémonie de mariage ou de renouvellement de vœux.",
    features: [
      "Création, écriture et célébration de votre cérémonie laïque par un professionnel",
      "Les rendez-vous de préparation de votre cérémonie",
      "L'écriture du texte personnalisé",
      "Les conseils sur les rituels, musiques...",
      "La prise de contact avec les intervenants",
      "La prestation du Jour J",
    ],
    options: [
      "Offre Silver — L'essentiel : votre officiant « seul »",
      "Offre Gold — En complément : coordinateur de cérémonie ou sonorisateur avec matériel",
      "Offre Platinum — Service de wedding planning professionnel pour la coordination complète",
    ],
  },
  {
    id: 'jn2',
    badge: 'Juste Nous Deux',
    title: 'Juste Nous Deux (JN2)',
    icon: Heart,
    description:
      "La prestation spécialement conçue pour les couples souhaitant s'évader en petit comité pour célébrer un mariage intimiste (« Elopements ») dans un lieu symbolique ou atypique, pour moins de 6 invités.",
    features: [
      "Des propositions de lieux à Paris ou ailleurs pour célébrer votre union intimiste",
      "Nos échanges pour créer votre cérémonie",
      "L'écriture du texte personnalisé",
      "La prestation de l'officiant le Jour J",
    ],
    options: [
      "Offre Silver — L'essentiel : propositions de lieux, échanges, écriture et prestation",
      "Offre Gold — En complément : bouquet de mariée, boutonnière et séance photo de 2h",
      "Offre Platinum — En complément : photo 4h, vidéaste, voiture de prestige et wedding planning",
    ],
  },
  {
    id: 'o1j',
    badge: "Officiant d'Un Jour",
    title: "Officiant d'Un Jour (O1J)",
    icon: Users,
    description:
      "La prestation où nous accompagnons un de vos proches (coaching) dans la création, l'écriture et/ou la célébration de votre cérémonie.",
    features: [
      "1h de mentorat avec un officiant professionnel",
      "Des outils d'aide à la création de cérémonies : questionnaire, trame de cérémonie...",
      "Des conseils : choix des textes, rituels, musiques, déroulement, placement, etc.",
    ],
    options: [
      "Offre Silver — Mentorat et outils d'aide à la création",
      "Offre Gold — En complément : coaching d'écriture et coaching de célébration en visio",
      "Offre Platinum — En complément : écriture intégrale de votre cérémonie et tips personnalisés",
    ],
  },
];

const OPTIONS = [
  { label: 'Coordination de cérémonie pour fluidifier son déroulement', icon: Sparkles },
  { label: 'Sonorisation de cérémonie (sonorisateur et matériel)', icon: Music },
  { label: "Coaching d'écriture de vœux pour l'un des mariés", icon: PenLine },
  { label: "Coaching d'écriture de discours pour les intervenants", icon: Mic },
  { label: 'Écriture de poème personnalisé ou slam', icon: PenLine },
  { label: 'Scénographie / Décoration (selon la région)', icon: MapPin },
  { label: 'Accompagnement musical : clavier, harpe, guitare...', icon: Music },
  { label: 'Photographe, Vidéaste', icon: Sparkles },
  { label: 'Service de Wedding Planning', icon: CalendarCheck },
];

interface OfficiantPageProps {
  isDarkMode?: boolean;
  onOpenContact: () => void;
}

export const OfficiantPage: React.FC<OfficiantPageProps> = ({
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
                Partenaire
                <br />
                <strong className={isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'}>
                  Cérémonie de Rêve
                </strong>
              </span>
              <span
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border flex items-center justify-center shrink-0 ${
                  isDarkMode
                    ? 'border-[#c8c0f5] text-[#c8c0f5]'
                    : 'border-[#8b9a82] text-[#78876e]'
                }`}
              >
                <Heart className="w-4 h-4" />
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
                  src={OFFICIANT_IMAGES.heroLeft}
                  alt="Vincent — Officiant de cérémonie"
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
                « L'art de célébrer »
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
              Cérémonie de Rêve · by FLOVINNO · Le Oui Parfait
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
                Votre
              </span>{' '}
              Officiant
            </h1>

            <p
              className={`mt-4 text-lg sm:text-xl font-serif-main ${
                isDarkMode ? 'text-[#e8e4dc]' : 'text-[#2c2b29]'
              }`}
            >
              Vincent · Cérémonie de Rêve by FLOVINNO
            </p>

            <div
              className={`mt-6 sm:mt-8 space-y-4 text-sm sm:text-base lg:text-lg font-sans-clean max-w-xl mx-auto leading-relaxed ${
                isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
              }`}
            >
              <p>
                Directeur de Cérémonie de Rêve et officiant depuis une quinzaine d'années,
                Vincent conçoit des cérémonies uniques, mixant subtilement solennité, humour
                et émotions.
              </p>
              <p
                className={`text-xs sm:text-sm uppercase tracking-widest ${
                  isDarkMode ? 'text-[#807b71]' : 'text-[#8a8780]'
                }`}
              >
                En français comme en anglais, sa voix parlée ou chantée saura vous toucher.
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
                src={OFFICIANT_IMAGES.heroRight}
                alt="Vincent — Cérémonie de Rêve"
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
              « Découvrez sa voix... »
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
          01 — QUI EST VINCENT ?
      ====================================================== */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
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
                Qui est Vincent ?
              </p>
              <h2
                className={`font-serif-main text-2xl sm:text-3xl lg:text-4xl ${
                  isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'
                }`}
              >
                L'homme qui donne voix à{' '}
                <span className="font-script text-3xl sm:text-4xl text-[#f4a8bf]">
                  votre histoire
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
                Depuis la création de l'Agence FLOVINNO en 2008, Vincent a créé et organisé
                plusieurs centaines de cérémonies symboliques en France comme à l'étranger sous
                sa marque « Cérémonie de Rêve by FLOVINNO ».
              </p>
            </Reveal>
            <Reveal variant="up" delay={80}>
              <p>
                Écriture, célébration, organisation, scénographie, décoration, sonorisation...
                Vincent et son équipe d'officiants et officiantes constituent un cocktail de
                talents indispensables pour réaliser une cérémonie personnalisée et à votre
                image.
              </p>
            </Reveal>
            <Reveal variant="up" delay={160}>
              <p
                className={`text-base sm:text-lg font-serif-main italic ${
                  isDarkMode ? 'text-[#c8c0f5]' : 'text-[#78876e]'
                }`}
              >
                Au-delà de ses qualités d'auteur et d'orateur, Vincent vous conseille et vous
                guide en amont de la cérémonie jusqu'au Jour J. Son expérience dans ce métier
                vous garantit un vrai professionnalisme.
              </p>
            </Reveal>

            {/* Liens rapides — téléphone, email, Instagram */}
            <Reveal variant="up" delay={240}>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4">
                <a
                  href="tel:0630396089"
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full border text-xs sm:text-sm font-sans-clean transition-all ${
                    isDarkMode
                      ? 'bg-[#1c1a17] border-[#332f28] text-[#e8e4dc] hover:border-[#c8c0f5]/50'
                      : 'bg-[#faf8f5] border-[#e8e4dc] text-[#2c2b29] hover:border-[#8b9a82]/50'
                  }`}
                >
                  <Phone className="w-4 h-4 text-[#f4a8bf]" />
                  06 30 39 60 89
                </a>
                <a
                  href="mailto:vincent@flovinno.com"
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full border text-xs sm:text-sm font-sans-clean transition-all ${
                    isDarkMode
                      ? 'bg-[#1c1a17] border-[#332f28] text-[#e8e4dc] hover:border-[#c8c0f5]/50'
                      : 'bg-[#faf8f5] border-[#e8e4dc] text-[#2c2b29] hover:border-[#8b9a82]/50'
                  }`}
                >
                  <Mail className="w-4 h-4 text-[#f4a8bf]" />
                  vincent@flovinno.com
                </a>
                <a
                  href="https://www.instagram.com/vincent_flovinno"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full border text-xs sm:text-sm font-sans-clean transition-all ${
                    isDarkMode
                      ? 'bg-[#1c1a17] border-[#332f28] text-[#e8e4dc] hover:border-[#c8c0f5]/50'
                      : 'bg-[#faf8f5] border-[#e8e4dc] text-[#2c2b29] hover:border-[#8b9a82]/50'
                  }`}
                >
                  <Instagram className="w-4 h-4 text-[#f4a8bf]" />
                  @vincent_flovinno
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
                  src={OFFICIANT_IMAGES.vincent1}
                  alt="Vincent — Officiant de cérémonie"
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
                « L'art de célébrer »
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          02 — LA CÉRÉMONIE LAÏQUE
      ====================================================== */}
      <section
        className={`relative z-10 py-16 sm:py-24 px-4 sm:px-6 ${
          isDarkMode ? 'bg-[#181714]' : 'bg-white/50'
        }`}
      >
        <div className="max-w-6xl mx-auto">
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
                  La cérémonie laïque
                </p>
                <h2
                  className={`font-serif-main text-2xl sm:text-3xl lg:text-4xl ${
                    isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'
                  }`}
                >
                  Une célébration{' '}
                  <span className="font-script text-3xl sm:text-4xl text-[#f4a8bf]">
                    libre et symbolique
                  </span>
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image — gauche */}
            <Reveal variant="up" className="flex justify-center order-2 lg:order-1">
              <div
                className={`relative p-3 sm:p-4 pb-8 sm:pb-12 rounded-xs polaroid-shadow border transform -rotate-3 hover:rotate-0 transition-transform duration-500 max-w-[320px] sm:max-w-[380px] w-full ${
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
                    src={OFFICIANT_IMAGES.vincent2}
                    alt="Vincent — Cérémonie de Rêve"
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
                  « Découvrez sa voix... »
                </p>
              </div>
            </Reveal>

            {/* Texte — droite */}
            <div className="order-1 lg:order-2">
              <div
                className={`space-y-5 text-sm sm:text-base lg:text-lg font-sans-clean leading-relaxed mb-6 ${
                  isDarkMode ? 'text-[#e8e4dc]/90' : 'text-[#2c2b29]'
                }`}
              >
                <Reveal variant="up">
                  <p>
                    La cérémonie laïque est une célébration symbolique et libre de l'union entre
                    deux personnes qui s'aiment. Elle peut être officiée par un Wedding Celebrant
                    professionnel ou par un proche bien préparé, car l'officiant joue un rôle
                    fondamental dans le bon déroulement de la cérémonie.
                  </p>
                </Reveal>
                <Reveal variant="up" delay={80}>
                  <p>
                    Elle n'a pas de valeur légale auprès des autorités religieuses ou
                    administratives, mais elle est importante aux yeux des couples qui souhaitent
                    célébrer leur amour et concrétiser leur relation de façon personnalisée, en
                    impliquant généralement les invités. Elle peut se faire en complément de la
                    cérémonie civile ou religieuse.
                  </p>
                </Reveal>
              </div>

              {/* Pour qui ? */}
              <Reveal variant="up" delay={120}>
                <div
                  className={`rounded-2xl border p-6 sm:p-8 ${
                    isDarkMode
                      ? 'bg-[#1c1a17] border-[#332f28]'
                      : 'bg-[#faf8f5] border-[#e8e4dc]'
                  }`}
                >
                  <h3
                    className={`font-serif-main text-lg sm:text-xl mb-4 ${
                      isDarkMode ? 'text-[#c8c0f5]' : 'text-[#78876e]'
                    }`}
                  >
                    Pour qui ?
                  </h3>
                  <ul className="space-y-3 text-sm sm:text-base font-sans-clean">
                    {[
                      "Vous souhaitez une cérémonie à votre image, personnalisée, et libre dans le déroulé et le lieu",
                      "Vous ne souhaitez pas ou ne pouvez pas accéder aux cérémonies religieuses",
                      "Vous êtes un couple mixte, de cultures ou religions différentes",
                      "Vous êtes déjà mariés et souhaitez renouveler vos vœux de mariage",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Heart className="w-4 h-4 mt-1 shrink-0 text-[#f4a8bf]" />
                        <span className={isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          03 — LE RÔLE DE L'OFFICIANT
      ====================================================== */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
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
                Le rôle de l'officiant
              </p>
              <h2
                className={`font-serif-main text-2xl sm:text-3xl lg:text-4xl ${
                  isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'
                }`}
              >
                Le « chef d'orchestre » de{' '}
                <span className="font-script text-3xl sm:text-4xl text-[#f4a8bf]">
                  votre cérémonie
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
              L'officiant de cérémonie (Wedding Celebrant) est la personne qui écrit, organise
              et célèbre la cérémonie symbolique de mariage. C'est le « chef d'orchestre » qui
              joue un rôle fondamental dans le bon déroulement de votre cérémonie.
            </p>
          </Reveal>
          <Reveal variant="up" delay={80}>
            <p>
              Au-delà de ses qualités d'auteurs et d'orateurs, nos « Officiants de Rêve » vous
              conseillent et vous guident en amont de la cérémonie jusqu'au Jour J. Leur
              expérience dans ce métier vous garantit un vrai professionnalisme.
            </p>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          04 — COMMENT ÇA SE PASSE ?
      ====================================================== */}
      <section
        className={`relative z-10 py-16 sm:py-24 px-4 sm:px-6 ${
          isDarkMode ? 'bg-[#181714]' : 'bg-white/50'
        }`}
      >
        <div className="max-w-5xl mx-auto">
          <Reveal variant="fade" className="mb-10 sm:mb-14 text-center">
            <p
              className={`text-[10px] sm:text-xs uppercase tracking-[0.25em] font-sans-clean mb-3 ${
                isDarkMode ? 'text-[#807b71]' : 'text-[#8a8780]'
              }`}
            >
              Comment ça se passe ?
            </p>
            <h2
              className={`font-serif-main text-2xl sm:text-3xl lg:text-4xl ${
                isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'
              }`}
            >
              Avec mon officiant,{' '}
              <span className="font-script text-3xl sm:text-4xl text-[#f4a8bf]">
                étape par étape
              </span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.num} variant="up" delay={i * 80}>
                <div
                  className={`relative rounded-2xl border p-6 sm:p-8 h-full ${
                    isDarkMode
                      ? 'bg-[#1c1a17] border-[#332f28]'
                      : 'bg-[#faf8f5] border-[#e8e4dc]'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span
                      className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                        isDarkMode
                          ? 'bg-[#c8c0f5]/15 text-[#c8c0f5]'
                          : 'bg-[#8b9a82]/15 text-[#78876e]'
                      }`}
                    >
                      <step.icon className="w-5 h-5" />
                    </span>
                    <span
                      className={`font-serif-main text-3xl sm:text-4xl ${
                        isDarkMode ? 'text-[#332f28]' : 'text-[#e8e4dc]'
                      }`}
                    >
                      {step.num}
                    </span>
                  </div>
                  <h3
                    className={`font-serif-main text-lg sm:text-xl mb-3 ${
                      isDarkMode ? 'text-[#c8c0f5]' : 'text-[#78876e]'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-sm sm:text-base font-sans-clean leading-relaxed ${
                      isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          05 — NOS PRESTATIONS
      ====================================================== */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <Reveal variant="fade" className="mb-10 sm:mb-14 text-center">
          <p
            className={`text-[10px] sm:text-xs uppercase tracking-[0.25em] font-sans-clean mb-3 ${
              isDarkMode ? 'text-[#807b71]' : 'text-[#8a8780]'
            }`}
          >
            Nos prestations
          </p>
          <h2
            className={`font-serif-main text-2xl sm:text-3xl lg:text-4xl ${
              isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'
            }`}
          >
            Trois types de{' '}
            <span className="font-script text-3xl sm:text-4xl text-[#f4a8bf]">
              prestations
            </span>
          </h2>
          <p
            className={`mt-4 text-sm sm:text-base font-sans-clean max-w-2xl mx-auto ${
              isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
            }`}
          >
            Afin de répondre au mieux aux spécificités de votre cérémonie, nous vous proposons
            trois types de prestations, chacune déclinée en 3 offres : Silver, Gold, et
            Platinum.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {PRESTATIONS.map((p, i) => (
            <Reveal key={p.id} variant="up" delay={i * 100}>
              <div
                className={`relative rounded-2xl border p-6 sm:p-8 h-full flex flex-col ${
                  isDarkMode
                    ? 'bg-[#1c1a17] border-[#332f28]'
                    : 'bg-[#faf8f5] border-[#e8e4dc]'
                }`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${
                      isDarkMode
                        ? 'bg-[#c8c0f5]/15 text-[#c8c0f5]'
                        : 'bg-[#8b9a82]/15 text-[#78876e]'
                    }`}
                  >
                    <p.icon className="w-5 h-5" />
                  </span>
                  <span
                    className={`text-[10px] uppercase tracking-[0.2em] font-sans-clean px-3 py-1 rounded-full ${
                      isDarkMode
                        ? 'bg-[#f4a8bf]/15 text-[#f4a8bf]'
                        : 'bg-[#f4a8bf]/15 text-[#f4a8bf]'
                    }`}
                  >
                    {p.badge}
                  </span>
                </div>

                <h3
                  className={`font-serif-main text-xl sm:text-2xl mb-3 ${
                    isDarkMode ? 'text-[#c8c0f5]' : 'text-[#78876e]'
                  }`}
                >
                  {p.title}
                </h3>

                <p
                  className={`text-sm font-sans-clean leading-relaxed mb-5 ${
                    isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
                  }`}
                >
                  {p.description}
                </p>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <span
                        className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                          isDarkMode ? 'bg-[#c8c0f5]' : 'bg-[#8b9a82]'
                        }`}
                      />
                      <span className={isDarkMode ? 'text-[#e8e4dc]/80' : 'text-[#2c2b29]/80'}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <div
                  className={`pt-5 border-t space-y-2 ${
                    isDarkMode ? 'border-[#332f28]' : 'border-[#e8e4dc]'
                  }`}
                >
                  <p
                    className={`text-[10px] uppercase tracking-[0.2em] font-sans-clean mb-2 ${
                      isDarkMode ? 'text-[#807b71]' : 'text-[#8a8780]'
                    }`}
                  >
                    Déclinaisons
                  </p>
                  {p.options.map((opt, k) => (
                    <p
                      key={k}
                      className={`text-xs font-sans-clean ${
                        isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
                      }`}
                    >
                      {opt}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* =====================================================
          06 — OPTIONS
      ====================================================== */}
      <section
        className={`relative z-10 py-16 sm:py-24 px-4 sm:px-6 ${
          isDarkMode ? 'bg-[#181714]' : 'bg-white/50'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <Reveal variant="fade" className="mb-10 sm:mb-14 text-center">
            <p
              className={`text-[10px] sm:text-xs uppercase tracking-[0.25em] font-sans-clean mb-3 ${
                isDarkMode ? 'text-[#807b71]' : 'text-[#8a8780]'
              }`}
            >
              Options & prestations complémentaires
            </p>
            <h2
              className={`font-serif-main text-2xl sm:text-3xl lg:text-4xl ${
                isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'
              }`}
            >
              Pour aller{' '}
              <span className="font-script text-3xl sm:text-4xl text-[#f4a8bf]">
                plus loin
              </span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {OPTIONS.map((opt, i) => (
              <Reveal key={i} variant="up" delay={i * 40}>
                <div
                  className={`flex items-center gap-3 rounded-xl border p-4 ${
                    isDarkMode
                      ? 'bg-[#1c1a17] border-[#332f28]'
                      : 'bg-[#faf8f5] border-[#e8e4dc]'
                  }`}
                >
                  <span
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
                      isDarkMode
                        ? 'bg-[#c8c0f5]/15 text-[#c8c0f5]'
                        : 'bg-[#8b9a82]/15 text-[#78876e]'
                    }`}
                  >
                    <opt.icon className="w-4 h-4" />
                  </span>
                  <span
                    className={`text-sm font-sans-clean ${
                      isDarkMode ? 'text-[#e8e4dc]/90' : 'text-[#2c2b29]/90'
                    }`}
                  >
                    {opt.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal variant="up" delay={200}>
            <p
              className={`mt-6 text-center text-sm font-sans-clean italic ${
                isDarkMode ? 'text-[#807b71]' : 'text-[#8a8780]'
              }`}
            >
              Autres prestations sur devis — contactez-nous pour un accompagnement sur mesure.
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
