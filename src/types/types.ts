import { ReactNode } from 'react';

// Global State Types
export interface GlobalState {
  isModalOpen: boolean;
  toggleModal: () => void;
  isMenuOpen: boolean;
  toggleMenu: () => void;
  exitMenu: () => void;
  exitModal: () => void;
}

// Component Props Types
export interface CommonButtonProps {
  variant?: 'primary' | 'outline';
  className?: string;
  children: ReactNode;
}

export interface ButtonAsButton extends CommonButtonProps {
  as?: 'button';
  href?: never;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export interface ButtonAsLink extends CommonButtonProps {
  as: 'a';
  href: string;
}

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export interface GlobalStateProviderProps {
  children: ReactNode;
}

// Project and Portfolio Types
export interface ProjectTag {
  label: string;
  color: string;
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: 'web' | 'mobile' | 'ui' | 'backend' | 'other';
  tags: ProjectTag[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

// Contact Form Types (Optional - only if you plan to make contact form functional)
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

// Navigation Types (Enhanced)
export interface NavItem {
  id: string;
  label: string;
  href: string;
  section: string; // For scroll tracking
  isActive?: boolean;
  isExternal?: boolean; // For external links
  icon?: string; // Optional icon
}

export interface NavConfig {
  logo: {
    src: string;
    alt: string;
    href: string;
  };
  items: NavItem[];
}

export interface NavbarProps {
  config?: NavConfig;
  className?: string;
  onNavigate?: (item: NavItem) => void;
}

export interface BurgerMenuProps {
  config?: NavConfig;
  isOpen: boolean;
  onToggle: () => void;
  onNavigate?: (item: NavItem) => void;
}