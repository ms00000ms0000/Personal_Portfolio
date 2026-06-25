import Particles from "@tsparticles/react";

function ParticleBackground() {
  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 -z-10"
      options={{
        fullScreen: false,

        fpsLimit: 60,

        particles: {
          number: {
            value: 120,
            density: {
              enable: true,
              area: 1000,
            },
          },

          color: {
            value: ["#00E5FF", "#7C3AED", "#14F195"],
          },

          shape: {
            type: "circle",
          },

          opacity: {
            value: {
              min: 0.2,
              max: 0.8,
            },
            animation: {
              enable: true,
              speed: 1,
            },
          },

          size: {
            value: {
              min: 1,
              max: 4,
            },
          },

          move: {
            enable: true,
            speed: 0.4,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out",
            },
          },

          links: {
            enable: false,
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "bubble",
            },
          },

          modes: {
            bubble: {
              distance: 120,
              size: 6,
              duration: 2,
              opacity: 1,
            },
          },
        },

        detectRetina: true,
      }}
    />
  );
}

export default ParticleBackground;