import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface RotatingWordsProps {
  words: string[];
  interval?: number;
  className?: string;
}

const RotatingWords = ({ words, interval = 2600, className = "" }: RotatingWordsProps) => {
  const [index, setIndex] = useState(0);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const id = window.setInterval(() => setIndex((current) => (current + 1) % words.length), interval);
    return () => window.clearInterval(id);
  }, [words.length, interval, reducedMotion]);

  const previous = (index - 1 + words.length) % words.length;

  return (
    <>
      <span className="sr-only">{words.join(", ")}</span>
      <span className={`word-rotator ${className}`} aria-hidden="true">
        {words.map((word, i) => (
          <span
            key={word}
            className={`whitespace-nowrap ${i === index ? "is-active" : ""} ${i === previous ? "is-leaving" : ""}`}
          >
            {word}
          </span>
        ))}
      </span>
    </>
  );
};

export default RotatingWords;
