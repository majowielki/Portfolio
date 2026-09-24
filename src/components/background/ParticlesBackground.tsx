import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { ISourceOptions } from "@tsparticles/engine";
import { loadBasic } from "@tsparticles/basic";
import { loadExternalPushInteraction } from "@tsparticles/interaction-external-push";

const ParticlesBackground = () => {
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadBasic(engine);
      await loadExternalPushInteraction(engine);
    }).then(() => setReady(true));
  }, []);

  const options = useMemo<ISourceOptions>(() => {
    const animate = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    return {
      fullScreen: { enable: true, zIndex: -1 },
      fpsLimit: 60,
      detectRetina: true,
      interactivity: {
        events: { onClick: { enable: animate, mode: "push" } },
        modes: { push: { quantity: 1 } },
      },
      particles: {
        color: { value: "#bae6fd" },
        number: { density: { enable: true }, value: 220 },
        move: { enable: animate, speed: 0.08, direction: "top", outModes: "out" },
        opacity: {
          animation: { enable: animate, speed: 0.8, sync: false },
          value: { min: 0.2, max: 1 },
        },
        shape: { type: "circle" },
        size: { value: { min: 0.3, max: 1.2 } },
      },
    };
  }, []);

  return isReady ? <Particles id="tsparticles" options={options} /> : null;
};

export default ParticlesBackground;
