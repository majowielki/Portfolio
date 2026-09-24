import { useEffect, useRef, useState } from "react";

interface CopyButtonProps {
  value: string;
  label: string;
}

const CopyButton = ({ value, label }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);
  const timeout = useRef<number>();

  useEffect(() => () => window.clearTimeout(timeout.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.clearTimeout(timeout.current);
      timeout.current = window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? `${label} copied` : `Copy ${label}`}
      title={copied ? "Copied!" : `Copy ${label}`}
      className={`relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-colors duration-300 ${
        copied ? "border-emerald-400/50 text-emerald-400" : "border-line/10 text-other hover:border-main/60 hover:text-main"
      }`}
    >
      <i className={copied ? "ri-check-line" : "ri-file-copy-line"} aria-hidden="true" />
      <span className="sr-only" role="status">
        {copied ? `${label} copied to clipboard` : ""}
      </span>
    </button>
  );
};

export default CopyButton;
