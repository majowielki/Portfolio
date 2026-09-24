import { socials } from "@/content/profile";

interface SocialLinksProps {
  className?: string;
}

const SocialLinks = ({ className = "" }: SocialLinksProps) => (
  <ul className={`flex items-center gap-3 ${className}`}>
    {socials.map((social) => (
      <li key={social.label}>
        <a
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="grid h-11 w-11 place-items-center rounded-full border border-line/10 bg-line/[0.03] text-xl text-main transition-all duration-300 hover:-translate-y-0.5 hover:border-main/60 hover:shadow-[0_0_20px_rgb(var(--main-color)/0.4)]"
        >
          <i className={social.icon} aria-hidden="true" />
        </a>
      </li>
    ))}
  </ul>
);

export default SocialLinks;
