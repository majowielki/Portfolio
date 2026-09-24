import { CSSProperties, useEffect, useRef } from "react";
import SocialLinks from "@/components/ui/SocialLinks";
import { navItems, profile } from "@/content/profile";

const menuItems = [{ label: "Home", section: "Home" }, ...navItems];

interface MobileMenuProps {
  isOpen: boolean;
  activeSection: string;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, activeSection, onClose }: MobileMenuProps) => {
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const background = document.querySelectorAll("main, footer");
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && onClose();

    document.documentElement.style.overflow = "hidden";
    background.forEach((element) => element.setAttribute("inert", ""));
    window.addEventListener("keydown", closeOnEscape);
    firstLinkRef.current?.focus({ preventScroll: true });

    return () => {
      document.documentElement.style.overflow = "";
      background.forEach((element) => element.removeAttribute("inert"));
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen, onClose]);

  return (
    <div
      id="mobile-menu"
      className={`mobile-menu fixed inset-0 flex flex-col overflow-hidden bg-bg md:hidden ${isOpen ? "is-open" : ""}`}
      aria-hidden={!isOpen}
    >
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-main/20 blur-[120px]"
        aria-hidden="true"
      />

      <nav aria-label="Mobile" className="container-x relative flex flex-1 flex-col justify-center pt-header">
        <ul className="space-y-1">
          {menuItems.map((item, index) => {
            const isActive = activeSection === item.section;
            return (
              <li key={item.section} className="overflow-hidden">
                <a
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={`#${item.section}`}
                  onClick={onClose}
                  tabIndex={isOpen ? 0 : -1}
                  aria-current={isActive ? "location" : undefined}
                  className="mobile-menu__link group flex items-baseline gap-4 py-1"
                  style={{ "--i": index } as CSSProperties}
                >
                  <span className={`font-mono text-xs ${isActive ? "text-main" : "text-other"}`}>
                    {String(index).padStart(2, "0")}
                  </span>
                  <span
                    className={`text-[length:clamp(2.75rem,13vw,4.5rem)] font-bold leading-[1.05] tracking-tight transition-colors duration-300 ${
                      isActive ? "text-main" : "text-text group-hover:text-main"
                    }`}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mobile-menu__footer container-x relative flex flex-col gap-5 border-t border-line/10 py-8">
        <a href={`mailto:${profile.email}`} tabIndex={isOpen ? 0 : -1} className="text-lg font-medium">
          {profile.email}
        </a>
        <SocialLinks />
      </div>
    </div>
  );
};

export default MobileMenu;
