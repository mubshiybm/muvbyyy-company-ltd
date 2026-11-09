import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initScrollAnimations() {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (mediaQuery.matches) return undefined;

  const context = gsap.context(() => {
    gsap.from(".hero-copy > *", {
      opacity: 0,
      y: 22,
      duration: 0.8,
      stagger: 0.09,
      ease: "power3.out",
      delay: 0.15,
    });

    gsap.utils.toArray(".section-heading, .reveal-up").forEach((element) => {
      gsap.from(element, {
        opacity: 0,
        y: 38,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: { trigger: element, start: "top 84%", once: true },
      });
    });

    gsap.utils.toArray(".demo-node, .stat-tile, .feature-panel").forEach((element, index) => {
      gsap.from(element, {
        opacity: 0,
        y: 23,
        duration: 0.65,
        delay: (index % 4) * 0.08,
        ease: "power2.out",
        scrollTrigger: { trigger: element, start: "top 88%", once: true },
      });
    });

    gsap.utils.toArray(".section-glow").forEach((glow) => {
      gsap.to(glow, {
        yPercent: -14,
        ease: "none",
        scrollTrigger: {
          trigger: glow.closest("section"),
          start: "top bottom",
          end: "bottom top",
          scrub: 1.4,
        },
      });
    });

    gsap.utils.toArray(".light-arc").forEach((arc, index) => {
      gsap.fromTo(
        arc,
        { strokeDashoffset: 720 },
        {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: arc.closest("section"),
            start: "top 75%",
            end: "bottom 40%",
            scrub: 1,
          },
          delay: index * 0.1,
        },
      );
    });
  });

  return () => context.revert();
}
