import React, { useState, useEffect, useRef } from 'react';
import { Instagram, Facebook, Menu as MenuIcon, X } from 'lucide-react';
import gsap from 'gsap';

interface NavbarProps {
  onOpenContact: () => void;
  isDarkMode: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenContact,
  isDarkMode,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMenuOpen && menuRef.current) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
      );
      if (linksRef.current) {
        gsap.fromTo(
          linksRef.current.children,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.3, stagger: 0.08, ease: 'power2.out', delay: 0.1 }
        );
      }
    }
  }, [isMenuOpen]);

  const navLinks = [
    { label: 'Accueil', href: '#hero' },
    { label: 'Portfolio', href: '#stories' },
    { label: 'Lieux', href: '#lieux' },
    { label: 'À Propos', href: '#about' },
    { label: 'Tarifs & Prestations', href: '#services' },
    { label: 'Notre Processus', href: '#process' },
    { label: 'Avis des Couples', href: '#testimonials' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors duration-300 ${
          isDarkMode
            ? 'bg-[#181714]/90 border-[#2e2a24]'
            : 'bg-[#faf8f5]/90 border-[#e8e4dc]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Social Icons & Theme Switcher Left — hidden on mobile so logo & menu stay in focus */}
          <div className="hidden md:flex items-center space-x-2 sm:space-x-3">
            <a
              href="https://www.instagram.com/leouiparfait_officiel/?__d=11"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all transform hover:scale-105 ${
                isDarkMode
                  ? 'bg-[#c8c0f5]/15 text-[#e8e4dc] hover:bg-[#c8c0f5] hover:text-[#141311]'
                  : 'bg-[#8b9a82]/15 text-[#5c6954] hover:bg-[#8b9a82] hover:text-white'
              }`}
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.facebook.com/61575405186878/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all transform hover:scale-105 ${
                isDarkMode
                  ? 'bg-[#c8c0f5]/15 text-[#e8e4dc] hover:bg-[#c8c0f5] hover:text-[#141311]'
                  : 'bg-[#8b9a82]/15 text-[#5c6954] hover:bg-[#8b9a82] hover:text-white'
              }`}
            >
              <Facebook className="w-4 h-4" />
            </a>

          </div>

          {/* Logo — always visible, top priority on mobile */}
          <a href="#hero" className="text-center group shrink-0">
            <img
              src="/logo-horizontal.png"
              alt="Le Oui Parfait"
              className={`h-8 sm:h-11 w-auto transition-transform group-hover:scale-105 ${
                isDarkMode ? 'bg-[#e8e4dc] rounded-md px-2 py-1' : ''
              }`}
            />
          </a>

          {/* Right Action Buttons — compact on mobile, menu always reachable */}
          <div className="flex items-center space-x-1.5 sm:space-x-3">
            <a
              href="#services"
              className={`hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-sans-clean font-medium active:scale-95 transition-all shadow-sm ${
                isDarkMode
                  ? 'bg-[#c8c0f5] text-[#141311] hover:bg-[#e8e4dc]'
                  : 'bg-[#8b9a82] text-white hover:bg-[#74836b]'
              }`}
            >
              <span>Découvrir nos offres</span>
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border text-xs sm:text-sm font-sans-clean font-medium transition-all flex items-center gap-1.5 active:scale-95 ${
                isDarkMode
                  ? 'border-[#c8c0f5]/40 text-[#e8e4dc] hover:bg-[#c8c0f5]/15'
                  : 'border-[#8b9a82]/40 text-[#2c2b29] hover:bg-[#8b9a82]/10'
              }`}
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <MenuIcon className="w-4 h-4" />}
              <span className="hidden xs:inline">{isMenuOpen ? 'Fermer' : 'Menu'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className={`fixed inset-0 z-30 pt-24 sm:pt-28 px-5 sm:px-6 pb-10 sm:pb-12 flex flex-col justify-between overflow-y-auto ${
            isDarkMode ? 'bg-[#141311]/98 text-[#e8e4dc]' : 'bg-[#faf8f5]/98 text-[#2c2b29]'
          }`}
        >
          <div className="max-w-3xl mx-auto w-full text-center my-auto">
            <p
              className={`text-xs font-sans-clean uppercase tracking-widest mb-6 ${
                isDarkMode ? 'text-[#c8c0f5]' : 'text-[#78876e]'
              }`}
            >
              Navigation & Services
            </p>
            <nav ref={linksRef} className="flex flex-col space-y-4 sm:space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-serif-main text-2xl sm:text-4xl transition-colors hover:italic ${
                    isDarkMode
                      ? 'text-[#e8e4dc] hover:text-[#c8c0f5]'
                      : 'text-[#2c2b29] hover:text-[#8b9a82]'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Socials — moved here on mobile, kept out of the header */}
            <div className="mt-8 flex md:hidden items-center justify-center gap-3">
              <a
                href="https://www.instagram.com/leouiparfait_officiel/?__d=11"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                  isDarkMode
                    ? 'bg-[#c8c0f5]/15 text-[#e8e4dc]'
                    : 'bg-[#8b9a82]/15 text-[#5c6954]'
                }`}
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/61575405186878/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                  isDarkMode
                    ? 'bg-[#c8c0f5]/15 text-[#e8e4dc]'
                    : 'bg-[#8b9a82]/15 text-[#5c6954]'
                }`}
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div
            className={`text-center text-xs font-sans-clean mt-8 ${
              isDarkMode ? 'text-[#807b71]' : 'text-[#8a8780]'
            }`}
          >
            © 2025 Le Oui Parfait. L'art de sublimer chaque instant.
          </div>
        </div>
      )}
    </>
  );
};

