import logo from "@/assets/images/MLogo.svg";
import { navItems, profile } from "@/content/profile";

const Footer = () => (
  <footer className="relative overflow-hidden border-t border-line/[0.07] [container-type:inline-size]">
    <div className="container-x flex flex-col items-center gap-8 py-12 md:flex-row md:justify-between">
      <div className="flex items-center gap-3">
        <img src={logo} alt="" width={32} height={32} className="h-8 w-8" />
        <p className="eyebrow">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>

      <nav aria-label="Footer">
        <ul className="flex flex-wrap justify-center gap-x-7 gap-y-2 text-sm">
          {navItems.map((item) => (
            <li key={item.section}>
              <a href={`#${item.section}`} className="text-other transition-colors hover:text-main">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <a href="#Home" className="eyebrow group flex items-center gap-2 transition-colors hover:text-main">
        Back to top
        <i
          className="ri-arrow-up-line text-base transition-transform duration-500 ease-expo group-hover:-translate-y-1"
          aria-hidden="true"
        />
      </a>
    </div>

    <p
      className="pointer-events-none -mb-[0.2em] select-none bg-gradient-to-b from-text/[0.13] to-transparent bg-clip-text text-center text-[19cqw] font-bold uppercase leading-[0.9] tracking-[-0.05em] text-transparent"
      aria-hidden="true"
    >
      {profile.lastName}
    </p>
  </footer>
);

export default Footer;
