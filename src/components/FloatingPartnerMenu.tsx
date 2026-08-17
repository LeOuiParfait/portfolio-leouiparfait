import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Disc3, UtensilsCrossed, X } from 'lucide-react';
import gsap from 'gsap';

interface FloatingPartnerMenuProps {
  isDarkMode?: boolean;
}

export const FloatingPartnerMenu: React.FC<FloatingPartnerMenuProps> = ({
  isDarkMode = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!panelRef.current) return;

    if (isOpen) {
      gsap.fromTo(
        panelRef.current,
        { opacity: 0, y: 16, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: 'power3.out' }
      );
    }
  }, [isOpen]);

  const menuItems = [
    {
      to: '/nos-djs',
      label: 'Nos DJs',
      icon: Disc3,
      description: 'Partenaires musique & ambiance',
    },
    {
      to: '/traiteur',
      label: 'Traiteur',
      icon: UtensilsCrossed,
      description: 'Cuisine d\'exception',
    },
  ];

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-8 sm:right-8 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div
          ref={panelRef}
          className={`w-[min(92vw,280px)] rounded-2xl border backdrop-blur-xl overflow-hidden shadow-2xl ${
            isDarkMode
              ? 'bg-[#181714]/95 border-[#332f28] text-[#e8e4dc]'
              : 'bg-white/95 border-[#e8e4dc] text-[#2c2b29]'
          }`}
        >
          <div
            className={`px-4 py-3 border-b ${
              isDarkMode ? 'border-[#332f28] bg-[#1c1a17]/80' : 'border-[#e8e4dc] bg-[#faf8f5]/80'
            }`}
          >
            <p
              className={`text-[10px] uppercase tracking-[0.2em] font-sans-clean ${
                isDarkMode ? 'text-[#c8c0f5]' : 'text-[#78876e]'
              }`}
            >
              Nos partenaires
            </p>
          </div>

          <nav className="p-2">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={`group flex items-center gap-3 rounded-xl px-3 py-3 transition-all ${
                  isDarkMode
                    ? 'hover:bg-[#c8c0f5]/10 hover:text-[#c8c0f5]'
                    : 'hover:bg-[#8b9a82]/10 hover:text-[#78876e]'
                }`}
              >
                <span
                  className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isDarkMode
                      ? 'bg-[#c8c0f5]/15 text-[#c8c0f5] group-hover:bg-[#c8c0f5] group-hover:text-[#141311]'
                      : 'bg-[#8b9a82]/15 text-[#78876e] group-hover:bg-[#8b9a82] group-hover:text-white'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                </span>
                <span className="text-left">
                  <span className="block font-serif-main text-lg leading-tight">{item.label}</span>
                  <span
                    className={`block text-[11px] font-sans-clean mt-0.5 ${
                      isDarkMode ? 'text-[#807b71]' : 'text-[#8a8780]'
                    }`}
                  >
                    {item.description}
                  </span>
                </span>
              </Link>
            ))}
          </nav>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Fermer le menu partenaires' : 'Ouvrir le menu partenaires'}
        aria-expanded={isOpen}
        className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full border flex items-center justify-center transition-all duration-300 shadow-xl active:scale-95 ${
          isDarkMode
            ? isOpen
              ? 'bg-[#c8c0f5] text-[#141311] border-[#c8c0f5]'
              : 'bg-[#181714]/90 text-[#c8c0f5] border-[#c8c0f5]/50 hover:bg-[#c8c0f5] hover:text-[#141311] hover:border-[#c8c0f5]'
            : isOpen
              ? 'bg-[#8b9a82] text-white border-[#8b9a82]'
              : 'bg-white/90 text-[#78876e] border-[#8b9a82]/50 hover:bg-[#8b9a82] hover:text-white'
        }`}
      >
        <span
          className={`absolute inset-0 rounded-full blur-xl transition-opacity ${
            isDarkMode ? 'bg-[#c8c0f5]/30' : 'bg-[#8b9a82]/20'
          } ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        />

        {isOpen ? (
          <X className="w-5 h-5 relative z-10" />
        ) : (
          <span className="relative z-10 flex flex-col items-center justify-center gap-[5px] w-5">
            <span
              className={`block h-[2px] w-5 rounded-full transition-all ${
                isDarkMode ? 'bg-current' : 'bg-current'
              }`}
            />
            <span className="block h-[2px] w-3.5 rounded-full bg-current" />
            <span className="block h-[2px] w-5 rounded-full bg-current" />
          </span>
        )}
      </button>
    </div>
  );
};
