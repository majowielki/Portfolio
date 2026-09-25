import { ReactNode } from "react";

interface SectionHeadingProps {
  index: string;
  label: string;
  children: ReactNode;
}

const SectionHeading = ({ index, label, children }: SectionHeadingProps) => (
  <header className="mb-12 md:mb-16" data-reveal>
    <p className="eyebrow flex items-center gap-3">
      <span className="accent-dash" aria-hidden="true" />
      <span className="text-main">{index}</span>
      {label}
    </p>
    <h2 className="mt-5 text-[length:clamp(2.5rem,8vw,4.5rem)] font-bold leading-[0.95] tracking-tight">{children}</h2>
  </header>
);

export default SectionHeading;
