import { useState } from "react";
import {
  DesignSettings,
  FONT_OPTIONS,
  FRAME_OPTIONS,
  loadDesignSettings,
  saveDesignSettings,
  SHOW_DESIGN_SWITCHER,
} from "@/config/design";

interface SegmentProps<T extends string> {
  label: string;
  options: readonly { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
}

const Segment = <T extends string>({ label, options, value, onChange }: SegmentProps<T>) => (
  <fieldset>
    <legend className="eyebrow mb-2 text-[10px]">{label}</legend>
    <div className="flex rounded-lg border border-line/10 bg-bg/60 p-0.5">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          aria-pressed={value === option.value}
          onClick={() => onChange(option.value)}
          className={`flex-1 whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
            value === option.value ? "bg-main/15 text-main" : "text-other hover:text-text"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  </fieldset>
);

const DesignSwitcher = () => {
  const [isOpen, setOpen] = useState(false);
  const [settings, setSettings] = useState<DesignSettings>(loadDesignSettings);

  if (!SHOW_DESIGN_SWITCHER) return null;

  const update = (patch: Partial<DesignSettings>) => {
    const next = { ...settings, ...patch };
    setSettings(next);
    saveDesignSettings(next);
  };

  return (
    <div className="fixed bottom-5 left-5 z-40 hidden flex-col items-start gap-3 md:flex">
      {isOpen && (
        <div
          id="design-switcher"
          className="w-64 space-y-4 rounded-2xl border border-line/10 bg-sec/90 p-4 shadow-[0_20px_60px_rgb(0_0_0/0.6)] backdrop-blur-xl"
        >
          <Segment label="Layout" options={FRAME_OPTIONS} value={settings.frame} onChange={(frame) => update({ frame })} />
          <Segment label="Font" options={FONT_OPTIONS} value={settings.font} onChange={(font) => update({ font })} />
          <p className="text-[11px] leading-snug text-other/70">Preview only – pick the defaults in src/config/design.ts.</p>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="design-switcher"
        className="flex items-center gap-2 rounded-full border border-line/10 bg-sec/90 px-3.5 py-2 text-xs font-medium text-other shadow-lg backdrop-blur-xl transition-colors hover:border-main/50 hover:text-main"
      >
        <i className={isOpen ? "ri-close-line" : "ri-contrast-drop-2-line"} aria-hidden="true" />
        Design preview
      </button>
    </div>
  );
};

export default DesignSwitcher;
