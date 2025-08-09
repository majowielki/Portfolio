import { useState, useEffect } from 'react';
import { getAllSections } from '@/config/navigation';

/**
 * Hook to detect which section is currently active based on scroll position
 * @param offset - Offset from top to determine when a section becomes active
 * @returns The currently active section ID
 */
export const useActiveSection = (offset: number = 100): string | null => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = getAllSections();
      const scrollPosition = window.scrollY + offset;

      // Find the current section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }

      // Handle top of page
      if (window.scrollY < 50) {
        setActiveSection('Home');
      }
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [offset]);

  return activeSection;
};
