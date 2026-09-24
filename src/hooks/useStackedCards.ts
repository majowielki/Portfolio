import { RefObject, useEffect } from "react";

const STACK_OFFSET = 20;
const EDGE_GAP = 32;

export const useStackedCards = (containerRef: RefObject<HTMLElement>) => {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll<HTMLElement>("[data-stack-card]"));
    let frame = 0;

    const measure = () => {
      const headerHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 0;
      cards.forEach((card, index) => {
        const preferredTop = headerHeight + EDGE_GAP + index * STACK_OFFSET;
        const fullyVisibleTop = window.innerHeight - card.offsetHeight - EDGE_GAP / 2;
        card.style.setProperty("--stick-top", `${Math.min(preferredTop, fullyVisibleTop)}px`);
      });
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
