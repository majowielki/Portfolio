import OpenBurger from "./OpenBurgerMenu";
import CloseBurger from "./CloseBurgerMenu";
import { useEffect } from "react";
import { useGlobalState } from "@/contexts/GlobalStateContext";
import { useActiveSection } from "@/hooks/useActiveSection";
import { NAVIGATION_CONFIG } from "@/config/navigation";
import { NavLink } from "./NavLink";
import { BurgerMenuProps, NavItem } from "@/types/types";

interface EnhancedBurgerMenuProps extends Partial<BurgerMenuProps> {
  smoothScroll?: boolean;
}

const BurgerMenuSection: React.FC<EnhancedBurgerMenuProps> = ({
  config = NAVIGATION_CONFIG,
  onNavigate,
  smoothScroll = true
}) => {
  const { isMenuOpen, toggleMenu, exitMenu } = useGlobalState();
  const activeSection = useActiveSection();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        exitMenu();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen, exitMenu]);

  const handleNavigate = (item: NavItem) => {
    // Close menu first
    exitMenu();

    // Handle smooth scroll
    if (smoothScroll && !item.isExternal) {
      setTimeout(() => {
        const element = document.getElementById(item.section);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 300); // Wait for menu close animation
    }
    
    if (onNavigate) {
      onNavigate(item);
    }
  };

  // Add Home item for mobile menu
  const mobileNavItems = [
    {
      id: 'home',
      label: 'Home',
      href: '/#Home',
      section: 'Home'
    },
    ...config.items
  ];

  return (
    <div className="md:hidden">
      {/* Burger Menu Toggle */}
      <div 
        className="fixed top-0 right-0 p-2 z-50 cursor-pointer transition-transform duration-300 hover:scale-110" 
        onClick={toggleMenu}
        role="button"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? <CloseBurger /> : <OpenBurger />}
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Background Overlay */}
          <div 
            className="fixed inset-0 bg-black/50 z-30 transition-opacity duration-300"
            onClick={exitMenu}
          />
          
          {/* Menu Content */}
          <nav 
            className="flex pt-20 fixed flex-col pl-5 bg-bg backdrop-blur-md bg-opacity-90 w-full h-full z-40 transform transition-transform duration-300"
            role="navigation"
            aria-label="Mobile navigation"
          >
            {mobileNavItems.map((item) => (
              <NavLink
                key={item.id}
                item={item}
                isActive={activeSection === item.section}
                onClick={handleNavigate}
                className="mb-5 transform transition-all duration-300 hover:translate-x-2"
                variant="mobile"
              />
            ))}
            
            {/* Menu Footer */}
            <div className="mt-auto pb-10 pl-0">
              <p className="text-other/60 text-sm">
                Navigate to any section
              </p>
            </div>
          </nav>
        </>
      )}
    </div>
  );
};

export default BurgerMenuSection;