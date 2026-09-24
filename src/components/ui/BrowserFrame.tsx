import { ReactNode } from "react";

interface BrowserFrameProps {
  url: string;
  children: ReactNode;
}

const BrowserFrame = ({ url, children }: BrowserFrameProps) => (
  <div className="overflow-hidden rounded-2xl border border-line/10 bg-bg shadow-[0_30px_80px_-30px_rgb(0_0_0/0.9)]">
    <div className="flex items-center gap-3 border-b border-line/10 px-4 py-3">
      <div className="flex shrink-0 gap-1.5" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      </div>
      <div className="mx-auto flex min-w-0 max-w-[75%] items-center gap-2 rounded-md bg-line/5 px-3 py-1 font-mono text-[11px] text-other">
        <i className="ri-lock-line shrink-0" aria-hidden="true" />
        <span className="truncate">{url}</span>
      </div>
      <span className="w-[42px] shrink-0" aria-hidden="true" />
    </div>
    <div className="relative aspect-[16/10] overflow-hidden">{children}</div>
  </div>
);

export default BrowserFrame;
