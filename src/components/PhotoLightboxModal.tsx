import React, { useEffect, useState } from 'react';
import {
  X,
  Calendar,
  MapPin,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { StoryItem } from '../types';

interface PhotoLightboxModalProps {
  story: StoryItem | null;
  onClose: () => void;
  onOpenContact: () => void;
  isDarkMode?: boolean;
}

export const PhotoLightboxModal: React.FC<PhotoLightboxModalProps> = ({
  story,
  onClose,
  onOpenContact,
  isDarkMode = true,
}) => {
  const [photoIndex, setPhotoIndex] = useState<number | null>(null);

  const gallery = story?.gallery || [];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (photoIndex !== null) {
          setPhotoIndex(null);
        } else {
          onClose();
        }
      }
      if (photoIndex !== null && gallery.length > 0) {
        if (e.key === 'ArrowRight') {
          setPhotoIndex((p) =>
            p === null ? null : (p + 1) % gallery.length
          );
        }
        if (e.key === 'ArrowLeft') {
          setPhotoIndex((p) =>
            p === null
              ? null
              : (p - 1 + gallery.length) % gallery.length
          );
        }
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [photoIndex, onClose, gallery]);

  if (!story) return null;

  const closePhoto = () => setPhotoIndex(null);
  const openPhoto = (idx: number) => setPhotoIndex(idx);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div
        className={`relative w-full max-w-6xl rounded-xs border p-6 sm:p-10 polaroid-shadow my-8 transition-colors ${
          isDarkMode
            ? 'bg-[#181614] border-[#332f28] text-[#e8e4dc]'
            : 'bg-[#faf8f5] border-[#e8e4dc] text-[#2c2b29]'
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
            isDarkMode
              ? 'bg-white/10 text-[#e8e4dc] hover:bg-[#c8c0f5] hover:text-[#141311]'
              : 'bg-black/10 text-[#2c2b29] hover:bg-[#8b9a82] hover:text-white'
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <div
              className={`aspect-[4/3] rounded-xs overflow-hidden border ${
                isDarkMode ? 'border-[#38332c] bg-black/40' : 'border-[#e8e4dc] bg-black/5'
              }`}
            >
              {story.video ? (
                <video
                  src={story.video}
                  poster={story.image || undefined}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                />
              ) : (
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              )}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4 font-sans-clean">
            <div
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs ${
                isDarkMode
                  ? 'bg-[#c8c0f5]/15 text-[#e8e4dc]'
                  : 'bg-[#8b9a82]/15 text-[#5c6954]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="capitalize">{story.category}</span>
            </div>

            <h2
              className={`font-serif-main text-2xl sm:text-3xl leading-tight ${
                isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'
              }`}
            >
              {story.title}
            </h2>

            <div
              className={`text-xs space-y-1 ${
                isDarkMode ? 'text-[#c8c0f5]' : 'text-[#78876e]'
              }`}
            >
              <p className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>{story.date}</span>
              </p>
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>{story.location}</span>
              </p>
            </div>

            <p
              className={`text-xs sm:text-sm leading-relaxed pt-2 ${
                isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
              }`}
            >
              {story.description}
            </p>

            {story.reception && (
              <p
                className={`text-xs sm:text-sm leading-relaxed ${
                  isDarkMode ? 'text-[#b5b0a5]' : 'text-[#5a5750]'
                }`}
              >
                Réception: {story.reception.name}{' '}
                <a
                  href={story.reception.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c8c0f5] hover:underline"
                >
                  visiter
                </a>
              </p>
            )}

            <div
              className={`pt-4 border-t flex gap-3 ${
                isDarkMode ? 'border-[#38332c]' : 'border-[#e8e4dc]'
              }`}
            >
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className={`px-6 py-2.5 rounded-full text-xs font-medium transition-all shadow-xs ${
                  isDarkMode
                    ? 'bg-[#c8c0f5] text-[#141311] hover:bg-[#e8e4dc]'
                    : 'bg-[#8b9a82] text-white hover:bg-[#74836b]'
                }`}
              >
                Réserver une date similaire
              </button>
              <button
                type="button"
                onClick={onClose}
                className={`px-5 py-2.5 rounded-full border text-xs transition-colors ${
                  isDarkMode
                    ? 'border-[#38332c] text-[#b5b0a5] hover:bg-[#22201d]'
                    : 'border-[#e8e4dc] text-[#5a5750] hover:bg-white'
                }`}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>

        {/* Gallery — horizontal scrollable */}
        {gallery.length > 0 && (
          <div
            className={`mt-8 rounded-xs border p-4 sm:p-6 ${
              isDarkMode
                ? 'bg-[#141311] border-[#332f28]'
                : 'bg-white border-[#e8e4dc]'
            }`}
          >
            <h3
              className={`font-serif-main text-lg sm:text-xl mb-4 ${
                isDarkMode ? 'text-[#c8c0f5]' : 'text-[#2c2b29]'
              }`}
            >
              Toutes les photos de {story.coupleName}
            </h3>
            <div className="flex gap-3 overflow-x-auto pb-3 snap-x scroll-smooth">
              {gallery.map((url, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => openPhoto(idx)}
                  className={`shrink-0 snap-start w-24 h-24 sm:w-28 sm:h-28 rounded-sm overflow-hidden border ${
                    isDarkMode ? 'border-[#2e2a24]' : 'border-[#e8e4dc]'
                  }`}
                >
                  <img
                    src={url}
                    alt={`${story.coupleName} ${idx + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Full-size photo viewer */}
      {photoIndex !== null && gallery.length > 0 && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center"
          onClick={closePhoto}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setPhotoIndex(
                (p) =>
                  p === null
                    ? null
                    : (p - 1 + gallery.length) % gallery.length
              );
            }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 text-[#e8e4dc] hover:bg-[#c8c0f5] hover:text-[#141311] flex items-center justify-center transition-colors z-10"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <img
            src={gallery[photoIndex]}
            alt={`${story.coupleName} ${photoIndex + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
            referrerPolicy="no-referrer"
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setPhotoIndex(
                (p) => (p === null ? null : (p + 1) % gallery.length)
              );
            }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 text-[#e8e4dc] hover:bg-[#c8c0f5] hover:text-[#141311] flex items-center justify-center transition-colors z-10"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            type="button"
            onClick={closePhoto}
            className="absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 text-[#e8e4dc] hover:bg-[#c8c0f5] hover:text-[#141311] flex items-center justify-center transition-colors z-10"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <p className="absolute bottom-4 left-0 right-0 text-center text-[#e8e4dc]/70 text-sm font-sans-clean z-10">
            {photoIndex + 1} / {gallery.length}
          </p>
        </div>
      )}
    </div>
  );
};
