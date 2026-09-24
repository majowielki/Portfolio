import { PointerEvent } from "react";

export const trackGlow = (event: PointerEvent<HTMLElement>) => {
  const root = event.currentTarget;
  const cards = root.matches("[data-glow]") ? [root] : Array.from(root.querySelectorAll<HTMLElement>("[data-glow]"));

  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    card.style.setProperty("--my", `${event.clientY - rect.top}px`);
  });
};
