import React from 'react';
import { HERO_IMAGES, CONTACT_INFO } from '../data/weddingData';
import { ArrowUp, Instagram, Facebook } from 'lucide-react';
import { Reveal } from './Reveal';

interface FooterBannerProps {
  onOpenContact: () => void;
  isDarkMode?: boolean;
}

export const FooterBanner: React.FC<FooterBannerProps> = ({
  onOpenContact,
  isDarkMode = true,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`relative pt-20 pb-12 overflow-hidden transition-colors duration-300 ${
        isDarkMode ? 'bg-[#0f0e0c] text-[#e8e4dc]' : 'bg-[#1c1b18] text-white'
      }`}
    >
      {/* Dark Floral Background Image */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
        <img
          src={HERO_IMAGES.flowerFooterDark}
          alt="Arrière-plan floral sombre"
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Centered Beige/Dark Tag Card */}
        <Reveal
          variant="zoom"
          className={`max-w-xl mx-auto p-8 sm:p-12 rounded-xs border text-center polaroid-shadow relative ${
            isDarkMode
              ? 'bg-[#181614] text-[#e8e4dc] border-[#332f28]'
              : 'bg-[#faf8f5] text-[#2c2b29] border-[#e8e4dc]'
          }`}
        >
          {/* Ribbon Tag Attachment Accent */}
          <div
            className={`absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-8 rounded-t-xs shadow-sm flex items-center justify-center ${
              isDarkMode ? 'bg-[#c8c0f5]' : 'bg-[#8b9a82]'
            }`}
          >
            <div className="w-2 h-2 rounded-full bg-white/80" />
          </div>

          <h2 className="font-serif-main text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight mt-2">
            Trouvez l'
            <span
              className={`font-script text-4xl sm:text-5xl italic font-normal ${
                isDarkMode ? 'text-[#c8c0f5]' : 'text-[#78876e]'
              }`}
            >
              offre
            </span>{' '}
            adaptée à votre mariage
          </h2>

          <p
            className={`mt-4 text-xs sm:text-sm font-sans-clean leading-relaxed max-w-md mx-auto ${
              isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
            }`}
          >
            Parcourez nos offres Signature, Élégance et Harmonie. Chaque formule est conçue pour
            s'adapter à votre niveau d'accompagnement, de l'organisation complète à la coordination
            du jour J.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="#services"
              aria-label="Découvrir nos offres"
              className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full font-sans-clean font-medium text-xs sm:text-sm text-center leading-tight px-3 flex items-center justify-center shadow-md hover:shadow-lg transition-all active:scale-95 ${
                isDarkMode
                  ? 'bg-[#c8c0f5] text-[#141311] hover:bg-[#e8e4dc]'
                  : 'bg-[#8b9a82] text-white hover:bg-[#74836b]'
              }`}
            >
              Découvrir nos offres
            </a>
          </div>
        </Reveal>

        {/* Footer Navigation & Socials */}
        <Reveal variant="up" className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-sans-clean text-white/70">
          {/* Brand & Tagline */}
          <div className="text-center md:text-left space-y-1">
            <h3 className="font-serif-main text-2xl text-white">Le Oui Parfait</h3>
            <p className="text-[11px] text-white/60">{CONTACT_INFO.siege}</p>
            <p className="text-[11px] text-white/60">
              {CONTACT_INFO.phone} · {CONTACT_INFO.email}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#c8c0f5] hover:text-[#141311] transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#c8c0f5] hover:text-[#141311] transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20 hover:bg-white/10 text-white transition-all text-[11px] sm:text-xs active:scale-95"
          >
            <span>Haut de page</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </Reveal>

        <div className="mt-6 text-center text-[10px] text-white/40 font-sans-clean">
          © 2025 Le Oui Parfait. Tous droits réservés. {CONTACT_INFO.showroom}.
        </div>
      </div>
    </footer>
  );
};
