import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ContactModal } from './components/ContactModal';
import { GuideDownloadModal } from './components/GuideDownloadModal';
import { PhotoLightboxModal } from './components/PhotoLightboxModal';
import { HomePage } from './pages/HomePage';
import { DjsPage } from './pages/DjsPage';
import { TraiteurPage } from './pages/TraiteurPage';
import { AnimationPage } from './pages/AnimationPage';
import { FlamencoPage } from './pages/FlamencoPage';
import { StoryItem } from './types';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppShell() {
  const [isDarkMode] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState<StoryItem | null>(null);

  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-colors duration-300 font-sans-clean antialiased selection:bg-[#c8c0f5] selection:text-[#141311] ${
        isDarkMode
          ? 'bg-[#141311] text-[#e8e4dc] dark-mode'
          : 'bg-[#faf8f5] text-[#2c2b29]'
      }`}
    >
      <ScrollToTop />
      <Navbar
        isDarkMode={isDarkMode}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              isDarkMode={isDarkMode}
              onOpenContact={() => setIsContactOpen(true)}
              onOpenGuide={() => setIsGuideOpen(true)}
              onSelectStory={(story) => setSelectedStory(story)}
            />
          }
        />
        <Route
          path="/nos-djs"
          element={
            <DjsPage
              isDarkMode={isDarkMode}
              onOpenContact={() => setIsContactOpen(true)}
            />
          }
        />
        <Route
          path="/traiteur"
          element={
            <TraiteurPage
              isDarkMode={isDarkMode}
              onOpenContact={() => setIsContactOpen(true)}
            />
          }
        />
        <Route
          path="/animation"
          element={
            <AnimationPage
              isDarkMode={isDarkMode}
              onOpenContact={() => setIsContactOpen(true)}
            />
          }
        />
        <Route
          path="/flamenco"
          element={
            <FlamencoPage
              isDarkMode={isDarkMode}
              onOpenContact={() => setIsContactOpen(true)}
            />
          }
        />
      </Routes>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        isDarkMode={isDarkMode}
      />

      <GuideDownloadModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
        isDarkMode={isDarkMode}
      />

      <PhotoLightboxModal
        story={selectedStory}
        onClose={() => setSelectedStory(null)}
        onOpenContact={() => setIsContactOpen(true)}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
