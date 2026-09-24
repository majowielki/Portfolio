import { ReactNode } from "react";

interface SectionHeadingProps {
  index: string;
  label: string;
  description?: string;
  children: ReactNode;
}

const SectionHeading = ({ index, label, description, children }: SectionHeadingProps) => (
  <header className="mb-12 grid gap-6 md:mb-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:items-end" data-reveal>
    <div>
      <p className="eyebrow flex items-center gap-3">
        <span className="accent-dash" aria-hidden="true" />
        <span className="text-main">{index}</span>
        {label}
      </p>
      <h2 className="mt-5 text-[length:clamp(2.5rem,8vw,4.5rem)] font-bold leading-[0.95] tracking-tight">
        {children}
      </h2>
    </div>
    {description && <p className="max-w-md text-base leading-relaxed text-other md:text-lg lg:pb-2">{description}</p>}
  </header>
);

export default SectionHeading;
