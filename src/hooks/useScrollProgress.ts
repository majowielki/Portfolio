import { RefObject, useEffect, useState } from "react";

export const useScrollProgress = (barRef: RefObject<HTMLElement>) => {
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      barRef.current?.style.setProperty("clip-path", `inset(-6px ${(1 - progress) * 100}% -6px 0)`);
      setScrolled(window.scrollY > 8);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
  }, [barRef]);

  return isScrolled;
};
