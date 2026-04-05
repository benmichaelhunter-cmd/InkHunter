import type { NavLink } from "@/types";

export const SITE_NAME = "InkHunter";
export const SITE_TAGLINE = "Art that connects communities to place";
export const SITE_DESCRIPTION =
  "InkHunter is the practice of Patrick Hunter — environmental and community-based mural artist creating large-scale public art that transforms spaces and connects communities to nature, culture, and each other.";
export const SITE_URL = "https://inkhunterartist.com.au";

export const ARTIST_NAME = "Patrick Hunter";
export const ARTIST_EMAIL = "inkhunterart@gmail.com";
export const ARTIST_INSTAGRAM = "https://instagram.com/inkhunterartist";
export const ARTIST_LOCATION = "Sydney, Northern Beaches";

export const NAV_LINKS: NavLink[] = [
  {
    label: "About",
    href: "/about/artist",
    children: [
      { label: "The Artist", href: "/about/artist" },
      { label: "The Practice", href: "/about/practice" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Impact", href: "/impact" },
  { label: "Media", href: "/media" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = {
  explore: [
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Impact", href: "/impact" },
    { label: "Blog", href: "/blog" },
  ],
  about: [
    { label: "The Artist", href: "/about/artist" },
    { label: "The Practice", href: "/about/practice" },
    { label: "Media & Press", href: "/media" },
    { label: "Contact", href: "/contact" },
  ],
};
