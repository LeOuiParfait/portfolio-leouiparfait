import React from 'react';
import { Hero } from '../components/Hero';
import { LoveAndLifeSection } from '../components/LoveAndLifeSection';
import { AboutSection } from '../components/AboutSection';
import { WeddingGuideBanner } from '../components/WeddingGuideBanner';
import { ProcessSection } from '../components/ProcessSection';
import { CategoriesArches } from '../components/CategoriesArches';
import { CreativeProcessCollage } from '../components/CreativeProcessCollage';
import { TestimonialsStampGrid } from '../components/TestimonialsStampGrid';
import { NosLieux } from '../components/NosLieux';
import { FooterBanner } from '../components/FooterBanner';
import { FloatingPartnerMenu } from '../components/FloatingPartnerMenu';
import { StoryItem, ServiceCategory } from '../types';

interface HomePageProps {
  isDarkMode: boolean;
  onOpenContact: () => void;
  onOpenGuide: () => void;
  onSelectStory: (story: StoryItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  isDarkMode,
  onOpenContact,
  onOpenGuide,
  onSelectStory,
}) => {
  const handleSelectCategory = (_category: ServiceCategory) => {
    onOpenContact();
  };

  return (
    <>
      <main>
        <Hero
          isDarkMode={isDarkMode}
          onOpenContact={onOpenContact}
          onOpenGuide={onOpenGuide}
        />

        <LoveAndLifeSection
          isDarkMode={isDarkMode}
          onSelectStory={onSelectStory}
        />

        <NosLieux />

        <AboutSection
          isDarkMode={isDarkMode}
          onOpenContact={onOpenContact}
        />

        <WeddingGuideBanner
          isDarkMode={isDarkMode}
          onOpenGuide={onOpenGuide}
        />

        <ProcessSection
          isDarkMode={isDarkMode}
          onOpenContact={onOpenContact}
        />

        <CategoriesArches
          isDarkMode={isDarkMode}
          onSelectCategory={handleSelectCategory}
        />

        <CreativeProcessCollage
          isDarkMode={isDarkMode}
          onOpenContact={onOpenContact}
        />

        <TestimonialsStampGrid isDarkMode={isDarkMode} />

        <FooterBanner
          isDarkMode={isDarkMode}
          onOpenContact={onOpenContact}
        />
      </main>

      <FloatingPartnerMenu isDarkMode={isDarkMode} />
    </>
  );
};
