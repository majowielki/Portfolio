import { ButtonProps, ButtonAsButton } from "@/types/types";

const base =
  "inline-flex items-center justify-center text-center py-[11px] px-[26px] border-2 rounded-lg text-[15px] font-semibold transition-all duration-500";

const variants = {
  primary:
    "bg-main text-bg border-main hover:bg-transparent hover:text-main hover:shadow-[0_0_20px_theme(colors.main)]",
  outline:
  "bg-transparent text-main border-main hover:bg-main hover:text-bg hover:shadow-[0_0_20px_theme(colors.main)]",
};

const Button = ({ variant = "primary", className = "", children, ...props }: ButtonProps) => {
  const classes = `${base} ${variants[variant]} ${className}`;
  
  const handleClick: React.MouseEventHandler<HTMLElement> = (e) => {
    if (typeof window !== 'undefined' && !window.matchMedia('(min-width: 1280px)').matches) {
      // Below xl, cards flip on click; avoid bubbling to card click handler
      e.stopPropagation();
    }
  };

  if ('href' in props && props.as === 'a') {
    const { href, target, rel, download } = props;
    return (
      <a
        href={href}
        className={classes}
        onClick={handleClick}
        target={target}
        rel={rel}
        download={download}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button className={classes} onClick={handleClick} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
};

export default Button;