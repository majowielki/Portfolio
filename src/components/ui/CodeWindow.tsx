import { CSSProperties } from "react";
import { trackGlow } from "@/utils/glow";

export type TokenKind = "keyword" | "type" | "string" | "method" | "plain" | "punct" | "wideSpace";
export type CodeLine = [TokenKind, string][];

const tokenColors: Record<TokenKind, string> = {
  keyword: "text-main",
  type: "text-teal-300",
  string: "text-amber-200",
  method: "text-sky-200",
  plain: "text-text/90",
  punct: "text-other/60",
  wideSpace: "hidden sm:inline",
};

interface CodeWindowProps {
  fileName: string;
  lines: CodeLine[];
  className?: string;
  style?: CSSProperties;
}

const CodeWindow = ({ fileName, lines, className = "", style }: CodeWindowProps) => (
  <div
    data-reveal
    data-glow
    onPointerMove={trackGlow}
    style={style}
    className={`glow-card rounded-2xl border border-line/10 bg-[rgb(12_14_18/0.92)] shadow-[0_24px_60px_rgb(0_0_0/0.5),0_0_48px_-16px_rgb(var(--main-color)/0.4)] ${className}`}
  >
    <div className="flex items-center gap-2 border-b border-line/10 px-4 py-3">
      <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
      <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
      <span className="h-3 w-3 rounded-full bg-[#28c840]" />
      <span className="ml-3 font-mono text-xs text-other/70">{fileName}</span>
    </div>
    <pre className="overflow-x-auto p-4 font-mono text-[11px] leading-7 sm:p-5 sm:text-[13px] md:p-6 md:text-sm">
      <code>
        {lines.map((line, lineIndex) => (
          <span
            key={lineIndex}
            className="code-line block whitespace-pre"
            style={{ "--line": lineIndex } as CSSProperties}
          >
            <span
              className="mr-3 inline-block w-4 select-none text-right text-other/30 sm:mr-5 sm:w-5"
              aria-hidden="true"
            >
              {lineIndex + 1}
            </span>
            {line.map(([kind, text], tokenIndex) => (
              <span key={tokenIndex} className={tokenColors[kind]}>
                {text}
              </span>
            ))}
            {lineIndex === lines.length - 1 && (
              <span
                className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-main"
                aria-hidden="true"
              />
            )}
          </span>
        ))}
      </code>
    </pre>
  </div>
);

export default CodeWindow;
