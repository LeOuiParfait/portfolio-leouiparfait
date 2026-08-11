import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { Reveal } from './Reveal';

interface WeddingGuideBannerProps {
  onOpenGuide: () => void;
  isDarkMode?: boolean;
}

export const WeddingGuideBanner: React.FC<WeddingGuideBannerProps> = ({
  onOpenGuide,
  isDarkMode = true,
}) => {
  return (
    <section
      className={`py-16 sm:py-20 px-4 sm:px-6 transition-colors duration-300 max-w-7xl mx-auto ${
        isDarkMode ? 'bg-[#141311]' : 'bg-[#faf8f5]'
      }`}
    >
      <div
        className={`rounded-xs p-6 sm:p-12 border polaroid-shadow relative overflow-hidden ${
          isDarkMode ? 'bg-[#1c1a17] border-[#332f28]' : 'bg-white border-[#e8e4dc]'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Floating Tilted Photo Frame */}
          <Reveal variant="left" className="lg:col-span-5 flex justify-center">
            <div
              className={`relative p-3 rounded-xs border transform -rotate-3 hover:rotate-0 transition-transform duration-500 max-w-[280px] w-full shadow-md ${
                isDarkMode ? 'bg-[#25221d] border-[#3e3931]' : 'bg-[#faf8f5] border-[#e8e4dc]'
              }`}
            >
              <div
                className={`relative aspect-[3/4] overflow-hidden ${
                  isDarkMode ? 'bg-[#282521]' : 'bg-[#e8e4dc]'
                }`}
              >
                <img
                  src={encodeURI('/shooting tour.webp')}
                  alt="Shooting Tour EVJF / EVG à Paris"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p
                className={`mt-2 text-center font-serif-main text-xs italic ${
                  isDarkMode ? 'text-[#c8c0f5]' : 'text-[#78876e]'
                }`}
              >
                EVJF / EVG Shooting Tour à Paris
              </p>
            </div>
          </Reveal>

          {/* Right Text Content */}
          <Reveal variant="right" className="lg:col-span-7 space-y-5 text-center lg:text-left">
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-sans-clean font-medium ${
                isDarkMode
                  ? 'bg-[#c8c0f5]/15 text-[#e8e4dc]'
                  : 'bg-[#8b9a82]/15 text-[#5c6954]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>EVJF / EVG Shooting Tour à Paris</span>
            </div>

            <h2
              className={`font-serif-main text-3xl sm:text-4xl lg:text-5xl leading-tight ${
                isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'
              }`}
            >
              L'EVJF / EVG nouvelle génération à{' '}
              <span
                className={`font-script text-4xl sm:text-5xl italic font-normal ${
                  isDarkMode ? 'text-[#c8c0f5]' : 'text-[#78876e]'
                }`}
              >
                Paris
              </span>
            </h2>

            <p
              className={`text-sm sm:text-base font-sans-clean leading-relaxed ${
                isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
              }`}
            >
              Le Shooting Tour by Le Oui Parfait, c'est une journée ou demi-journée sur mesure, pensée
              pour offrir à la future mariée ou au futur marié une expérience unique à vivre entre proches.
            </p>

            <ul
              className={`grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm font-sans-clean pt-1 ${
                isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
              }`}
            >
              <li className="flex items-center gap-2">
                <CheckCircle2
                  className={`w-4 h-4 ${isDarkMode ? 'text-[#c8c0f5]' : 'text-[#8b9a82]'}`}
                />
                <span>Navette avec chauffeur ou berline de luxe</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2
                  className={`w-4 h-4 ${isDarkMode ? 'text-[#c8c0f5]' : 'text-[#8b9a82]'}`}
                />
                <span>Shooting photo & vidéo (extérieur et/ou studio)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2
                  className={`w-4 h-4 ${isDarkMode ? 'text-[#c8c0f5]' : 'text-[#8b9a82]'}`}
                />
                <span>Mise en beauté & souvenirs inoubliables</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2
                  className={`w-4 h-4 ${isDarkMode ? 'text-[#c8c0f5]' : 'text-[#8b9a82]'}`}
                />
                <span>Journée ou demi-journée sur mesure entre proches</span>
              </li>
            </ul>


          </Reveal>
        </div>
      </div>
    </section>
  );
};
