import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline";
type Size = "sm" | "md";

interface StyleProps {
  variant?: Variant;
  size?: Size;
}

const variants: Record<Variant, string> = {
  primary:
    "border-main bg-main text-bg hover:bg-transparent hover:text-main hover:shadow-[0_0_24px_rgb(var(--main-color)/0.4)]",
  outline:
    "border-main bg-transparent text-main hover:bg-main hover:text-bg hover:shadow-[0_0_24px_rgb(var(--main-color)/0.4)]",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-1.5 text-sm",
  md: "px-6 py-2.5 text-[15px]",
};

const buttonClasses = ({ variant = "primary", size = "md" }: StyleProps, className = "") =>
  [
    "group/button inline-flex items-center justify-center gap-2 rounded-lg border-stroke font-semibold transition-all duration-300",
    "disabled:cursor-not-allowed disabled:opacity-70 [&>i]:transition-transform [&>i]:duration-300",
    variants[variant],
    sizes[size],
    className,
  ].join(" ");

type ButtonProps = StyleProps & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ variant, size, className, type = "button", ...props }: ButtonProps) => (
  <button type={type} className={buttonClasses({ variant, size }, className)} {...props} />
);

type ButtonLinkProps = StyleProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export const ButtonLink = ({ variant, size, className, ...props }: ButtonLinkProps) => (
  <a className={buttonClasses({ variant, size }, className)} {...props} />
);
