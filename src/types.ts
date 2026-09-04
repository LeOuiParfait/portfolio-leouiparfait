export interface StoryItem {
  id: string;
  title: string;
  coupleName: string;
  date: string;
  location: string;
  image: string;
  video?: string;
  gallery?: string[];
  category: 'mariage' | 'elopement' | 'engagement';
  description: string;
  reception?: { name: string; url: string };
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  quote: string;
  image?: string;
  highlight?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
}

export interface DjVideo {
  src?: string;
  poster: string;
  label: string;
  title: string;
}

export interface DjPartner {
  id: string;
  name: string;
  tagline: string;
  description: string;
  rating?: number;
  website?: string;
  mainImage: string;
  videos: {
    mix: {
      src?: string;
      poster: string;
      label: string;
      title: string;
    };
    show: {
      src?: string;
      poster: string;
      label: string;
      title: string;
    };
  };
}

export interface TraiteurDish {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface TraiteurPartner {
  name: string;
  title: string;
  subtitle: string;
  intro: string;
  story: string;
  heroImage: string;
  chefImage: string;
  dishes: TraiteurDish[];
}
