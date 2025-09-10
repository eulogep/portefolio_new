import React, { useRef, useEffect } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let dpr = Math.max(1, window.devicePixelRatio || 1);

    const mouse = { x: null, y: null, radius: 120 };

    const resizeCanvas = () => {
      dpr = Math.max(1, window.devicePixelRatio || 1);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const createParticles = () => {
      particles = [];
      const area = window.innerWidth * window.innerHeight;
      let numberOfParticles = Math.floor(area / 20000);
      numberOfParticles = Math.max(20, Math.min(220, numberOfParticles));

      for (let i = 0; i < numberOfParticles; i++) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 2.4 + 0.6,
          speedX: (Math.random() - 0.5) * 0.6,
          speedY: (Math.random() - 0.5) * 0.6,
          opacity: Math.random() * 0.7 + 0.15,
        });
      }
    };

    const interactWithMouse = (p) => {
      if (mouse.x === null) return;
      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < mouse.radius) {
        const force = (mouse.radius - dist) / mouse.radius;
        const angle = Math.atan2(dy, dx);
        p.speedX += Math.cos(angle) * force * 0.6;
        p.speedY += Math.sin(angle) * force * 0.6;
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            const alpha = 0.18 * (1 - dist / 110);
            ctx.strokeStyle = `rgba(0,230,255,${alpha * p.opacity * q.opacity})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      particles.forEach((particle) => {
        particle.speedX *= 0.995;
        particle.speedY *= 0.995;

        interactWithMouse(particle);

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < -10) particle.x = window.innerWidth + 10;
        if (particle.x > window.innerWidth + 10) particle.x = -10;
        if (particle.y < -10) particle.y = window.innerHeight + 10;
        if (particle.y > window.innerHeight + 10) particle.y = -10;

        const grad = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, Math.max(8, particle.size * 6));
        grad.addColorStop(0, `rgba(0,230,255,${particle.opacity})`);
        grad.addColorStop(0.6, `rgba(0,230,255,${particle.opacity * 0.15})`);
        grad.addColorStop(1, 'rgba(0,0,0,0)');

        ctx.beginPath();
        ctx.fillStyle = grad;
        ctx.arc(particle.x, particle.y, Math.max(1, particle.size), 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const animate = () => {
      drawParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const burstX = e.clientX - rect.left;
      const burstY = e.clientY - rect.top;
      for (let i = 0; i < 8; i++) {
        particles.push({
          x: burstX,
          y: burstY,
          size: Math.random() * 3 + 0.5,
          speedX: (Math.random() - 0.5) * 6,
          speedY: (Math.random() - 0.5) * 6,
          opacity: 0.9,
        });
      }
      if (particles.length > 400) particles.splice(0, particles.length - 400);
    };

    const handleVisibility = () => {
      if (document.hidden) cancelAnimationFrame(animationFrameId);
      else animate();
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('click', handleClick);
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('click', handleClick);
      document.removeEventListener('visibilitychange', handleVisibility);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

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
        pointerEvents: 'auto',
      }}
    />
  );
};

export default ParticleBackground;
