import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className }) => {
  return (
    <h2 className={[
      "text-center",
      "text-4xl",
      "md:text-5xl",
      "font-extrabold",
      "tracking-tight",
      className || ""
    ].join(" ").trim()}>
      {children}
    </h2>
  );
};

export default SectionTitle;
