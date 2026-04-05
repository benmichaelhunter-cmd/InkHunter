export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: "mural" | "workshop" | "installation" | "consultation" | "community";
  location: string;
  year: number;
  client: string;
  featured: boolean;
  coverImage: string;
  galleryImages: string[];
  brief: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  tags: string[];
  content: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  tags: string[];
  published: boolean;
  content: string;
}

export interface PressItem {
  slug: string;
  title: string;
  publication: string;
  date: string;
  url?: string;
  excerpt: string;
  coverImage?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  clients: string;
}

export interface Pillar {
  title: string;
  description: string;
  icon: string;
}

export interface Award {
  title: string;
  year: number;
  description: string;
}

export interface TrustBadge {
  name: string;
  logo: string;
  alt: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}
