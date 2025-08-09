import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";

import { loadFull } from "tsparticles";
const ParticlesBackground = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    console.log("init");
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async () => {};

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          style={{
            zIndex: 1,
          }}
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
              },
              modes: {
                push: {
                  quantity: 1,
                },
              },
            },
            particles: {
              color: {
                value: "#bae6fd",
              },
              links: {
                enable: false,
                opacity: 0.03,
              },
              number: {
                density: {
                  enable: true,
                },
                value: 220,
              },
              opacity: {
                animation: {
                  enable: true,
                  speed: 1,
                  sync: false,
                },
                value: {
                  min: 0.3,
                  max: 1,
                },
              },
              shape: {
                type: "circle",
              },
              size: {
                value: {
                  min: 0.3,
                  max: 1.2,
                },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
}

export default ParticlesBackground;
