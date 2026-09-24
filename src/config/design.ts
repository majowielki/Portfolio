// Floating panel for comparing layout/font variants. Set to false to hide it and always use DESIGN_DEFAULTS.
export const SHOW_DESIGN_SWITCHER = true;

export const FRAME_OPTIONS = [
  { value: "on", label: "Framed" },
  { value: "off", label: "Full width" },
] as const;

export const FONT_OPTIONS = [
  { value: "geist", label: "Geist" },
  { value: "inter", label: "Inter" },
  { value: "original", label: "Arial" },
] as const;

export type FrameMode = (typeof FRAME_OPTIONS)[number]["value"];
export type FontMode = (typeof FONT_OPTIONS)[number]["value"];

export interface DesignSettings {
  frame: FrameMode;
  font: FontMode;
}

export const DESIGN_DEFAULTS: DesignSettings = { frame: "on", font: "geist" };

const STORAGE_KEY = "design-settings";

const pick = <T extends string>(options: readonly { value: T }[], value: unknown, fallback: T): T =>
  options.find((option) => option.value === value)?.value ?? fallback;

export const loadDesignSettings = (): DesignSettings => {
  if (!SHOW_DESIGN_SWITCHER) return DESIGN_DEFAULTS;
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}");
    return {
      frame: pick(FRAME_OPTIONS, stored.frame, DESIGN_DEFAULTS.frame),
      font: pick(FONT_OPTIONS, stored.font, DESIGN_DEFAULTS.font),
    };
  } catch {
    return DESIGN_DEFAULTS;
  }
};

export const applyDesignSettings = ({ frame, font }: DesignSettings) => {
  document.documentElement.dataset.frame = frame;
  document.documentElement.dataset.font = font;
};

export const saveDesignSettings = (settings: DesignSettings) => {
  applyDesignSettings(settings);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch {
    return;
  }
};
