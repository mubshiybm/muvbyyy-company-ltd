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

    const ribbonY = (index, x, drift, amplitude, center) =>
      center +
      Math.sin(x * (1.45 + index * 0.13) + drift) * amplitude +
      Math.sin(x * 3.6 - drift * 0.47) * amplitude * 0.19;

    const drawRibbon = (index, time, scrollPhase, scrollProgress) => {
      const center = height * (0.12 + index * 0.17);
      const amplitude = height * (0.085 + index * 0.008);
      const drift = time * (0.34 + index * 0.045) + scrollPhase + index * 1.2;
      const y = (x) =>
        ribbonY(index, x, drift, amplitude, center);

      context.beginPath();
      for (let point = 0; point <= 100; point += 1) {
        const x = (point / 100) * width;
        const pointY = y(x / width);
        if (point === 0) context.moveTo(x, pointY);
        else context.lineTo(x, pointY);
      }

      const gradient = context.createLinearGradient(0, 0, width, height * 0.72);
      gradient.addColorStop(0, "rgba(184, 240, 46, 0)");
      gradient.addColorStop(0.2, `rgba(184, 240, 46, ${0.25 + index * 0.012})`);
      gradient.addColorStop(0.48, `rgba(208, 255, 66, ${0.68 - index * 0.035})`);
      gradient.addColorStop(0.72, `rgba(126, 181, 32, ${0.34 - index * 0.014})`);
      gradient.addColorStop(1, "rgba(184, 240, 46, 0)");
      context.strokeStyle = gradient;
      context.lineCap = "round";
      context.globalCompositeOperation = "lighter";
      context.lineWidth = index === 2 ? 17 : 12;
      context.shadowColor = "#b8f02e";
      context.shadowBlur = 44;
      context.globalAlpha = 0.58;
      context.stroke();
      context.globalAlpha = 1;
      context.lineWidth = index === 2 ? 2.4 : 1.7;
      context.shadowBlur = 19;
      context.stroke();
      context.lineWidth = 0.7;
      context.shadowBlur = 7;
      context.stroke();
      context.shadowBlur = 0;

      const lightPosition =
        (time * (0.12 + index * 0.012) + scrollProgress * 0.00018 + index * 0.21) % 1;
      const lightX = lightPosition * width;
      const lightY = y(lightPosition);
      const lightRadius = index === 2 ? 2.8 : 1.8;
      context.beginPath();
      context.arc(lightX, lightY, lightRadius, 0, Math.PI * 2);
      context.fillStyle = "#efffb0";
      context.shadowColor = "#caff46";
      context.shadowBlur = 26;
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

      for (let index = 0; index < 8; index += 1) {
        drawRibbon(index, time, scrollPhase, scrollProgress);
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
        context.fillStyle = `rgba(211,255,94,${opacity})`;
        context.shadowBlur = 8;
        context.shadowColor = "#b8f02e";
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

    resize();
    scheduleDraw();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });
    mediaQuery.addEventListener("change", handleMotionChange);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      mediaQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  return <canvas className="light-trails" ref={canvasRef} aria-hidden="true" />;
}
