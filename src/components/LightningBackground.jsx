import { useEffect, useRef } from 'react';

// Neon lightning background (respects prefers-reduced-motion and save-data)
const LightningBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isSmallScreen = window.matchMedia && window.matchMedia('(max-width: 768px)').matches;
    const saveData = navigator.connection && navigator.connection.saveData;
    if (prefersReduced || saveData || isSmallScreen) return;

    const ctx = canvas.getContext('2d');
    let rafId;
    let visible = document.visibilityState === 'visible';

    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      canvas.width = Math.floor(window.innerWidth * DPR);
      canvas.height = Math.floor(window.innerHeight * DPR);
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };

    const bolts = [];

    const spawnBolt = () => {
      const startX = Math.random() * window.innerWidth;
      const startY = -20;
      const endX = Math.random() * window.innerWidth;
      const endY = window.innerHeight + 20;
      const segments = 35 + Math.floor(Math.random() * 15);
      const points = [];
      for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        const x = startX + (endX - startX) * t + (Math.random() - 0.5) * 20;
        const y = startY + (endY - startY) * t + (Math.random() - 0.5) * 18;
        points.push({ x, y });
      }
      bolts.push({ points, life: 1, decay: 0.02 + Math.random() * 0.02 });
    };

    let spawnTimer = 0;

    const step = () => {
      // fade trail
      ctx.fillStyle = 'rgba(0,0,0,0.06)';
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      // spawn occasionally
      spawnTimer -= 1;
      if (spawnTimer <= 0) {
        spawnBolt();
        if (Math.random() < 0.35) spawnBolt();
        spawnTimer = 40 + Math.random() * 80; // frames between spawns
      }

      // draw bolts
      for (let i = bolts.length - 1; i >= 0; i--) {
        const b = bolts[i];
        const alpha = Math.max(b.life, 0);
        if (alpha <= 0) {
          bolts.splice(i, 1);
          continue;
        }
        b.life -= b.decay;

        // outer glow
        ctx.save();
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.shadowBlur = 18;
        ctx.shadowColor = 'rgba(0,160,255,0.9)';
        ctx.strokeStyle = `rgba(0,160,255,${0.22 * alpha})`;
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(b.points[0].x, b.points[0].y);
        for (let p = 1; p < b.points.length; p++) ctx.lineTo(b.points[p].x, b.points[p].y);
        ctx.stroke();
        ctx.restore();

        // core
        ctx.strokeStyle = `rgba(180,240,255,${0.85 * alpha})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(b.points[0].x, b.points[0].y);
        for (let p = 1; p < b.points.length; p++) ctx.lineTo(b.points[p].x, b.points[p].y);
        ctx.stroke();
      }
    };

    const animate = () => {
      if (visible) step();
      rafId = requestAnimationFrame(animate);
    };

    const onVis = () => (visible = document.visibilityState === 'visible');

    resize();
    // prime background
    ctx.fillStyle = 'rgba(0,0,0,1)';
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    animate();

    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVis);
    return () => {
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVis);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}
    />
  );
};

export default LightningBackground;
