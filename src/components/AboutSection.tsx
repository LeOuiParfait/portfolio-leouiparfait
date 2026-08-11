import React from 'react';
import { ABOUT_DATA, LOGO_BRANDS, TEAM_MEMBERS } from '../data/weddingData';
import { Camera, Sparkles, Award } from 'lucide-react';
import { Reveal } from './Reveal';

interface AboutSectionProps {
  onOpenContact: () => void;
  isDarkMode?: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenContact,
  isDarkMode = true,
}) => {
  return (
    <section
      id="about"
      className={`py-16 sm:py-24 px-4 sm:px-6 border-y transition-colors duration-300 ${
        isDarkMode
          ? 'bg-[#181714] border-[#2e2a24]'
          : 'bg-[#c8c0f5]/50 border-[#e8e4dc]'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Block */}
          <Reveal variant="left" className="lg:col-span-6 space-y-6">
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-sans-clean uppercase tracking-widest ${
                isDarkMode
                  ? 'bg-[#c8c0f5]/15 text-[#e8e4dc]'
                  : 'bg-[#8b9a82]/15 text-[#5c6954]'
              }`}
            >
              <Camera className={`w-3.5 h-3.5 ${isDarkMode ? 'text-[#c8c0f5]' : 'text-[#78876e]'}`} />
              <span>{ABOUT_DATA.title}</span>
            </div>

            <h2
              className={`font-serif-main text-3xl sm:text-4xl lg:text-5xl leading-tight font-normal ${
                isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'
              }`}
            >
              {ABOUT_DATA.heading}
            </h2>

            <div
              className={`space-y-4 text-sm sm:text-base font-sans-clean leading-relaxed ${
                isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
              }`}
            >
              <p>{ABOUT_DATA.textParagraph1}</p>
              <p>{ABOUT_DATA.textParagraph2}</p>
            </div>


          </Reveal>

          {/* Right Self-Portrait Image Block */}
          <Reveal variant="right" className="lg:col-span-6 flex justify-center">
            <div
              className={`relative max-w-md w-full p-3 sm:p-4 rounded-xs editorial-shadow border ${
                isDarkMode ? 'bg-[#1c1a17] border-[#332f28]' : 'bg-white border-[#e8e4dc]'
              }`}
            >
              <div
                className={`relative aspect-[3/4] overflow-hidden ${
                  isDarkMode ? 'bg-[#282521]' : 'bg-[#e8e4dc]/50'
                }`}
              >
                <img
                  src={ABOUT_DATA.image}
                  alt="Le Oui Parfait - Organisation de mariage"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div
                className={`mt-3 flex items-center justify-between text-xs font-sans-clean px-1 ${
                  isDarkMode ? 'text-[#c8c0f5]' : 'text-[#78876e]'
                }`}
              >
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Le Oui Parfait
                </span>
                <span className="italic">Organisation & Coordination</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Brand Vendor Logo Ticker Bar at Bottom */}
        <div
          className={`mt-16 pt-10 border-t ${
            isDarkMode ? 'border-[#2e2a24]' : 'border-[#e8e4dc]'
          }`}
        >
          <Reveal variant="fade">
            <p
              className={`text-center text-xs font-sans-clean uppercase tracking-widest mb-8 ${
                isDarkMode ? 'text-[#807b71]' : 'text-[#8a8780]'
              }`}
            >
              LE OUI PARFAIT EN QUELQUES CHIFFRES
            </p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center">
            {LOGO_BRANDS.map((brand, idx) => (
              <Reveal
                key={brand.name}
                variant="up"
                delay={idx * 90}
                className={`p-4 rounded-xs border transition-all cursor-default group ${
                  isDarkMode
                    ? 'border-[#2e2a24] bg-[#1c1a17]/80 hover:bg-[#25221d] hover:border-[#c8c0f5]/40'
                    : 'border-[#e8e4dc]/60 bg-white/60 hover:bg-white hover:border-[#8b9a82]/40'
                }`}
              >
                <div
                  className={`font-serif-main text-xl sm:text-2xl transition-colors ${
                    isDarkMode
                      ? 'text-[#c8c0f5] group-hover:text-[#c8c0f5]'
                      : 'text-[#2c2b29] group-hover:text-[#8b9a82]'
                  }`}
                >
                  {brand.name}
                </div>
                <div
                  className={`text-[10px] font-sans-clean tracking-widest uppercase mt-0.5 ${
                    isDarkMode ? 'text-[#807b71]' : 'text-[#8a8780]'
                  }`}
                >
                  {brand.subtitle}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div
          className={`mt-16 pt-10 border-t ${
            isDarkMode ? 'border-[#2e2a24]' : 'border-[#e8e4dc]'
          }`}
        >
          <Reveal variant="fade">
            <p
              className={`text-center text-xs font-sans-clean uppercase tracking-widest mb-8 ${
                isDarkMode ? 'text-[#807b71]' : 'text-[#8a8780]'
              }`}
            >
              LES VISAGES DERRIÈRE LE OUI PARFAIT
            </p>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-6 text-center">
            {TEAM_MEMBERS.map((member, idx) => (
              <Reveal key={member.name} variant={idx % 2 === 0 ? 'up' : 'zoom'} delay={idx * 80} className="space-y-1 flex flex-col items-center justify-start">
                <div
                  className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center overflow-hidden ${
                    member.image
                      ? ''
                      : `font-serif-main text-xl ${
                          isDarkMode
                            ? 'bg-[#c8c0f5]/15 text-[#e8e4dc] border border-[#c8c0f5]/30'
                            : 'bg-[#8b9a82]/15 text-[#5c6954] border border-[#8b9a82]/30'
                        }`
                  }`}
                >
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    member.name.charAt(0)
                  )}
                </div>
                <div
                  className={`font-serif-main text-lg ${
                    isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'
                  }`}
                >
                  {member.name}
                </div>
                <div
                  className={`text-[10px] font-sans-clean leading-tight ${
                    isDarkMode ? 'text-[#9c8f7a]' : 'text-[#8a8780]'
                  }`}
                >
                  {member.role}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
