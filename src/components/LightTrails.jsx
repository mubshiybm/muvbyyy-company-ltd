import { useEffect, useRef } from "react";

export default function LightTrails() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !context) return undefined;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frameId = null;
    let width = 0;
    let height = 0;
    let elapsed = 0;
    let lastTimestamp = 0;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.75);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const drawRibbon = (index, time, scrollPhase, scrollProgress, isLight) => {
      const group = Math.floor(index / 12);
      const strand = index % 12;
      const spacing = Math.max(2.5, Math.min(height * 0.0045, 4));
      const center = height * (0.18 + group * 0.32);
      const drift = time * 0.9 + scrollPhase + group * 1.4;
      const y = (x) => center +
        Math.sin(x * 2.4 + drift) * height * 0.065 +
        Math.sin(x * 4.1 - drift * 0.6 + group) * height * 0.018 +
        (strand - 5.5) * spacing * (0.55 + x * 1.1) +
        Math.sin(x * 3 + drift * 0.5 + strand * 0.3) * strand * 0.65;

      context.beginPath();
      for (let point = 0; point <= 100; point += 1) {
        const x = (point / 100) * width;
        const pointY = y(x / width);
        if (point === 0) context.moveTo(x, pointY);
        else context.lineTo(x, pointY);
      }

      const gradient = context.createLinearGradient(0, 0, width, height * 0.72);
      const startColor = isLight ? "10, 12, 10" : "184, 240, 46";
      const highlightColor = isLight ? "10, 12, 10" : "208, 255, 66";
      const endColor = isLight ? "10, 12, 10" : "126, 181, 32";
      gradient.addColorStop(0, `rgba(${startColor}, 0.18)`);
      gradient.addColorStop(0.2, `rgba(${startColor}, 0.36)`);
      gradient.addColorStop(0.48, `rgba(${highlightColor}, 0.65)`);
      gradient.addColorStop(0.72, `rgba(${endColor}, 0.48)`);
      gradient.addColorStop(1, `rgba(${startColor}, 0.2)`);
      context.strokeStyle = gradient;
      context.lineCap = "round";
      context.globalCompositeOperation = isLight ? "source-over" : "lighter";
      context.lineWidth = 2;
      context.shadowColor = isLight ? "#111510" : "#b8f02e";
      context.shadowBlur = 12;
      context.globalAlpha = 0.3;
      context.stroke();
      context.globalAlpha = 1;
      context.lineWidth = strand % 4 === 0 ? 1 : 0.65;
      context.shadowBlur = 4;
      context.stroke();
      context.shadowBlur = 0;

      if (strand % 4 !== 0) return;
      const lightPosition =
        (time * (0.28 + group * 0.025) + scrollProgress * 0.00018 + index * 0.21) % 1;
      const lightX = lightPosition * width;
      const lightY = y(lightPosition);
      const lightRadius = 1.4;
      context.beginPath();
      context.arc(lightX, lightY, lightRadius, 0, Math.PI * 2);
      context.fillStyle = isLight ? "#101310" : "#efffb0";
      context.shadowColor = isLight ? "#111510" : "#caff46";
      context.shadowBlur = 12;
      context.fill();
      context.shadowBlur = 0;
    };

    const draw = (timestamp) => {
      if (lastTimestamp > 0 && !mediaQuery.matches) {
        elapsed += Math.min((timestamp - lastTimestamp) / 1000, 0.05);
      }
      lastTimestamp = timestamp;
      context.clearRect(0, 0, width, height);
      const scrollProgress = window.scrollY;
      const time = mediaQuery.matches ? 0 : elapsed;
      const scrollPhase = scrollProgress * 0.0022;
      const isLight = document.documentElement.dataset.theme === "light";

      for (let index = 0; index < 36; index += 1) {
        drawRibbon(index, time, scrollPhase, scrollProgress, isLight);
      }

      for (let index = 0; index < 34; index += 1) {
        const seed = index * 91.7;
        const x =
          ((seed + time * (14 + (index % 4) * 4) + scrollProgress * 0.04) % (width + 20)) - 10;
        const y =
          height * (0.11 + ((index * 37) % 79) / 100) +
          Math.sin(time * 0.7 + index + scrollPhase) * 11;
        const opacity = 0.14 + (Math.sin(time * 2 + index) + 1) * 0.15;
        context.beginPath();
        context.arc(x, y, index % 5 === 0 ? 1.5 : 0.8, 0, Math.PI * 2);
        context.fillStyle = isLight ? `rgba(10,12,10,${opacity})` : `rgba(211,255,94,${opacity})`;
        context.shadowBlur = 8;
        context.shadowColor = isLight ? "#111510" : "#b8f02e";
        context.fill();
      }

      context.shadowBlur = 0;
      context.globalAlpha = 1;
      context.globalCompositeOperation = "source-over";
      if (!mediaQuery.matches) frameId = requestAnimationFrame(draw);
      else frameId = null;
    };

    const scheduleDraw = () => {
      if (frameId === null) frameId = requestAnimationFrame(draw);
    };
    const handleMotionChange = () => {
      cancelAnimationFrame(frameId);
      frameId = null;
      lastTimestamp = 0;
      scheduleDraw();
    };
    const handleResize = () => {
      resize();
      scheduleDraw();
    };
    const handleScroll = () => {
      if (mediaQuery.matches) scheduleDraw();
    };
    const themeObserver = new MutationObserver(scheduleDraw);

    resize();
    scheduleDraw();
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });
    mediaQuery.addEventListener("change", handleMotionChange);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      mediaQuery.removeEventListener("change", handleMotionChange);
      themeObserver.disconnect();
    };
  }, []);

  return <canvas className="light-trails" ref={canvasRef} aria-hidden="true" />;
}
