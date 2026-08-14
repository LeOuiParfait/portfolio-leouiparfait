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
