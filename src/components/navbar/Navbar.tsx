import useScrollPos from "@/hooks/useScrollPos";
import { useActiveSection } from "@/hooks/useActiveSection";
import { NAVIGATION_CONFIG } from "@/config/navigation";
import { NavLink, NavSeparator } from "./NavLink";
import { NavbarProps, NavItem } from "@/types/types";

interface EnhancedNavbarProps extends NavbarProps {
  smoothScroll?: boolean;
}

const Navbar: React.FC<EnhancedNavbarProps> = ({ 
  config = NAVIGATION_CONFIG,
  className = '',
  onNavigate,
  smoothScroll = true
}) => {
  const isAtTop = useScrollPos();
  const activeSection = useActiveSection();

  const handleNavigate = (item: NavItem) => {
    if (smoothScroll && !item.isExternal) {
      const element = document.getElementById(item.section);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    
    if (onNavigate) {
      onNavigate(item);
    }
  };

  return (
    <div className={`hidden md:flex sticky -mt-14 top-0 z-50 ${
      isAtTop ? 'opacity-100' : 'opacity-0 hover:opacity-100 transition-opacity duration-500'
    } justify-between items-center h-14 w-full bg-bg border-b-2 border-main ${className}`}>
      {/* Logo */}
      <div>
        <a href={config.logo.href}>
          <img 
            src={config.logo.src} 
            alt={config.logo.alt} 
            className="h-28 ml-10 transition-transform duration-300 hover:scale-105" 
          />
        </a>
      </div>
      
      {/* Navigation Items */}
      <nav className="flex text-2xl items-center mr-10" role="navigation">
        {config.items.map((item, index) => (
          <div key={item.id} className="flex items-center">
            {index > 0 && <NavSeparator />}
            <NavLink
              item={item}
              isActive={activeSection === item.section}
              onClick={handleNavigate}
              variant="desktop"
            />
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
