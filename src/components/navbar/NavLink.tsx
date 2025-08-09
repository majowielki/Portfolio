import { NavItem } from '@/types/types';

interface NavLinkProps {
  item: NavItem;
  isActive?: boolean;
  onClick?: (item: NavItem) => void;
  className?: string;
  variant?: 'desktop' | 'mobile';
}

export const NavLink: React.FC<NavLinkProps> = ({ 
  item, 
  isActive = false, 
  onClick, 
  className = '',
  variant = 'desktop'
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick(item);
    }
  };

  const baseClasses = variant === 'desktop' 
    ? 'nav-item text-[1rem] font-medium transition-colors duration-300'
    : 'burger-item text-[1.6rem] font-medium transition-colors duration-300';
    
  const colorClasses = isActive 
    ? 'text-main font-semibold' 
    : 'text-other hover:text-main';

  return (
    <a
      href={item.href}
      onClick={handleClick}
      className={`${baseClasses} ${colorClasses} ${className}`}
      data-section={item.section}
    >
      {item.icon && <span className="mr-2">{item.icon}</span>}
      {item.label}
    </a>
  );
};

interface NavSeparatorProps {
  className?: string;
}

export const NavSeparator: React.FC<NavSeparatorProps> = ({ className = '' }) => (
  <span
    className={`text-main font-bold mx-4 select-none ${className}`}
    aria-hidden="true"
  >
    |
  </span>
);
