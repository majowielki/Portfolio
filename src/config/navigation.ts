import { NavConfig } from '@/types/types';
import logoImage from '@/assets/images/MLogo.svg';

// Centralized navigation configuration
export const NAVIGATION_CONFIG: NavConfig = {
  logo: {
    src: logoImage,
    alt: 'Portfolio Logo',
    href: '/#Home'
  },
  items: [
    {
      id: 'about',
      label: 'About Me',
      href: '/#AboutMe',
      section: 'AboutMe'
    },
    {
      id: 'skills',
      label: 'My Skills',
      href: '/#Skills',
      section: 'Skills'
    },
    {
      id: 'projects',
      label: 'My Projects',
      href: '/#Projects',
      section: 'Projects'
    },
    {
      id: 'contact',
      label: 'Contact Me',
      href: '/#Contact',
      section: 'Contact'
    }
  ]
};

// Navigation utilities
export const getNavItemById = (id: string) => {
  return NAVIGATION_CONFIG.items.find(item => item.id === id);
};

export const getNavItemBySection = (section: string) => {
  return NAVIGATION_CONFIG.items.find(item => item.section === section);
};

export const getAllSections = () => {
  return NAVIGATION_CONFIG.items.map(item => item.section);
};
