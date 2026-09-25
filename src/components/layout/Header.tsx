import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import logo from "@/assets/images/MLogo.svg";
import { ButtonLink } from "@/components/ui/Button";
import MobileMenu from "@/components/layout/MobileMenu";
import { navItems, profile, sectionIds } from "@/content/profile";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollProgress } from "@/hooks/useScrollProgress";

interface Indicator {
  left: number;
  width: number;
}

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [indicator, setIndicator] = useState<Indicator | null>(null);
  const activeSection = useActiveSection(sectionIds);
  const progressRef = useRef<HTMLDivElement>(null);
  const isScrolled = useScrollProgress(progressRef);
  const itemRefs = useRef<Record<string, HTMLLIElement | null>>({});
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useLayoutEffect(() => {
    const measure = () => {
      const item = itemRefs.current[activeSection];
      setIndicator(item ? { left: item.offsetLeft, width: item.offsetWidth } : null);
    };
    measure();
    document.fonts?.ready.then(measure);
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [activeSection]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const toggle = toggleRef.current;
    const desktop = window.matchMedia("(min-width: 768px)");
    const close = () => desktop.matches && setMenuOpen(false);
    desktop.addEventListener("change", close);
    return () => {
      desktop.removeEventListener("change", close);
      toggle?.focus({ preventScroll: true });
    };
  }, [isMenuOpen]);

  const isSolid = isScrolled && !isMenuOpen;

  return (
    <header className="sticky top-0 z-50 -mb-header h-header">
      <div
        className={`absolute inset-0 bg-[var(--header-bg)] backdrop-blur-md transition-opacity duration-500 ${
          isSolid ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      />

      <div className="container-x relative z-10 flex h-full items-center justify-between gap-6">
        <a href="#Home" onClick={closeMenu} className="group flex shrink-0 items-center gap-3">
          <img
            src={logo}
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 transition-transform duration-700 ease-expo group-hover:-rotate-[8deg] group-hover:scale-110"
          />
          <span className="hidden text-sm font-semibold leading-tight lg:block">
            {profile.name}
            <span className="block font-mono text-[11px] font-normal uppercase tracking-[0.14em] text-other">
              {profile.shortRole}
            </span>
          </span>
          <span className="sr-only">{profile.name} – back to top</span>
        </a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="relative flex items-center rounded-full border border-line/10 bg-sec/60 p-1 backdrop-blur-md">
            <li
              className="absolute inset-y-1 rounded-full bg-main/10 ring-1 ring-inset ring-main/25 transition-all duration-500 ease-expo"
              style={{ left: indicator?.left ?? 0, width: indicator?.width ?? 0, opacity: indicator ? 1 : 0 }}
              aria-hidden="true"
            />
            {navItems.map((item) => {
              const isActive = activeSection === item.section;
              return (
                <li
                  key={item.section}
                  ref={(element) => {
                    itemRefs.current[item.section] = element;
                  }}
                  className="relative"
                >
                  <a
                    href={`#${item.section}`}
                    aria-current={isActive ? "location" : undefined}
                    className={`block rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300 ${
                      isActive ? "text-main" : "text-other hover:text-text"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <ButtonLink href={profile.cvUrl} download size="sm" variant="outline" className="hidden md:inline-flex">
          Resume
          <i className="ri-download-2-line group-hover/button:translate-y-0.5" aria-hidden="true" />
        </ButtonLink>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="relative grid h-11 w-11 place-items-center rounded-full border border-line/10 bg-sec/60 backdrop-blur-md md:hidden"
        >
          <span
            className={`absolute h-stroke w-5 rounded bg-text transition-transform duration-500 ease-expo ${
              isMenuOpen ? "rotate-45" : "-translate-y-[4px]"
            }`}
          />
          <span
            className={`absolute h-stroke w-5 rounded bg-text transition-transform duration-500 ease-expo ${
              isMenuOpen ? "-rotate-45" : "translate-y-[4px]"
            }`}
          />
        </button>
      </div>

      <div
        className={`absolute inset-x-0 bottom-0 h-px bg-line/[0.07] transition-opacity duration-500 ${
          isSolid ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      />
      <div
        ref={progressRef}
        className={`absolute inset-x-0 bottom-0 z-10 h-stroke bg-main shadow-[0_0_6px_rgb(var(--main-color)/0.55)] transition-opacity duration-300 ${
          isMenuOpen ? "opacity-0" : ""
        }`}
        style={{ clipPath: "inset(-6px 100% -6px 0)" }}
        aria-hidden="true"
      />

      <MobileMenu isOpen={isMenuOpen} activeSection={activeSection} onClose={closeMenu} />
    </header>
  );
};

export default Header;
