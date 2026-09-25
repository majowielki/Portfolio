import { RefObject, useEffect } from "react";

// Covered cards peek out by TAB_OFFSET (number + category row visible), or by EDGE_OFFSET on shorter screens.
const TAB_OFFSET = 64;
const EDGE_OFFSET = 16;
const TOP_GAP = 32;
const BOTTOM_GAP = 16;

export const useStackedCards = (containerRef: RefObject<HTMLElement>) => {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll<HTMLElement>("[data-stack-card]"));
    const desktop = window.matchMedia("(min-width: 1024px)");
    let frame = 0;

    const measure = () => {
      container.dataset.stack = "off";
      if (!desktop.matches || cards.length < 2) return;

      const headerHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 0;
      const cardHeight = Math.max(...cards.map((card) => card.offsetHeight));
      const room = window.innerHeight - headerHeight - TOP_GAP - BOTTOM_GAP - cardHeight;
      const offset = [TAB_OFFSET, EDGE_OFFSET].find((candidate) => candidate * (cards.length - 1) <= room);
      if (offset === undefined) return;

      container.style.setProperty("--stack-offset", `${offset}px`);
      container.style.setProperty("--card-h", `${cardHeight}px`);
      container.style.setProperty("--n", String(cards.length));
      container.dataset.stack = "on";
    };

    const update = () => {
      frame = 0;
      cards.forEach((card, index) => {
        const next = cards[index + 1];
        if (!next) return;
        const { top, height } = card.getBoundingClientRect();
        const covered = (top + height - next.getBoundingClientRect().top) / height;
        card.style.setProperty("--cover", Math.min(Math.max(covered, 0), 1).toFixed(3));
      });
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const onResize = () => {
      measure();
      schedule();
    };

    measure();
    update();
    document.fonts?.ready.then(onResize);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(frame);
    };
  }, [containerRef]);
};
