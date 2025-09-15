import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isSmallScreen = window.matchMedia && window.matchMedia('(max-width: 768px)').matches;
    const saveData = navigator.connection && navigator.connection.saveData;

    // Respect user preferences and low‑data mode
    if (prefersReduced || saveData) {
      return; // Do not render/animate
    }

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let visible = document.visibilityState === 'visible';

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const connectionDistance = isSmallScreen ? 60 : 100;

    const resizeCanvas = () => {
      const { innerWidth, innerHeight } = window;
      canvas.width = Math.floor(innerWidth * DPR);
      canvas.height = Math.floor(innerHeight * DPR);
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };

    const createParticles = () => {
      particles = [];
      const area = window.innerWidth * window.innerHeight;
      const density = isSmallScreen ? 0.35 : 1; // fewer particles on small screens
      const numberOfParticles = Math.max(0, Math.floor((area / 15000) * density));

      for (let i = 0; i < numberOfParticles; i++) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 1.8 + 0.4,
          speedX: (Math.random() - 0.5) * 0.4,
          speedY: (Math.random() - 0.5) * 0.4,
          opacity: Math.random() * 0.7 + 0.2,
        });
      }
    };

    const step = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        // Update position
        p.x += p.speedX;
        p.y += p.speedY;

        // Bounce off edges
        if (p.x < 0 || p.x > window.innerWidth) p.speedX *= -1;
        if (p.y < 0 || p.y > window.innerHeight) p.speedY *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 160, 255, ${p.opacity})`;
        ctx.fill();

        // Draw connections (only check limited next particles for perf)
        for (let j = i + 1; j < Math.min(i + 25, particles.length); j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.hypot(dx, dy);
          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(0, 160, 255, ${0.18 * (1 - dist / connectionDistance)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      if (visible) step();
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    const handleVisibility = () => {
      visible = document.visibilityState === 'visible';
    };

    const mqlReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handlePrefChange = () => {
      if (mqlReduce.matches) {
        // Stop animation if user toggles reduced‑motion
        cancelAnimationFrame(animationFrameId);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibility);
    mqlReduce.addEventListener && mqlReduce.addEventListener('change', handlePrefChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
      mqlReduce.removeEventListener && mqlReduce.removeEventListener('change', handlePrefChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // If reduced motion or save‑data are enabled, render nothing (handled in effect)
  return (
    <canvas
      ref={canvasRef}
      className="particles-bg"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  );
};

export default ParticleBackground;
