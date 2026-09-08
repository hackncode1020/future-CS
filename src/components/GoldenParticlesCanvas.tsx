import React, { useEffect, useRef } from 'react';

interface GoldenParticlesCanvasProps {
  intensity?: 'ambient' | 'celebration' | 'subtle';
  burstTrigger?: number; // increments when a burst should fire
  interactive?: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  maxAlpha: number;
  alphaSpeed: number;
  color: string;
  isConfetti?: boolean;
  angle?: number;
  angularSpeed?: number;
  width?: number;
  height?: number;
  gravity?: number;
}

const GOLD_PALETTE = [
  '#FFD700', // Gold
  '#F5E6C8', // Champagne
  '#D4AF37', // Metallic Gold
  '#E6CA65', // Light Gold
  '#C5A059', // Bronze Gold
  '#FFFFFF', // Starlight
];

const CONFETTI_PALETTE = [
  '#FFD700', // Gold
  '#FFEAA7', // Warm Champagne
  '#D4AF37', // Rich Gold
  '#800020', // Royal Burgundy
  '#F3EFE6', // Ivory
  '#C5A059', // Antique Gold
  '#2E7D32', // Subtle Emerald accent
];

export const GoldenParticlesCanvas: React.FC<GoldenParticlesCanvasProps> = ({
  intensity = 'ambient',
  burstTrigger = 0,
  interactive = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameIdRef = useRef<number | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: -1000, y: -1000, active: false });

  // Spawn confetti burst
  const triggerBurst = (count: number = 80) => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const centerX = canvas.width / 2;
    const centerY = canvas.height * 0.4;

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 8 + 3;
      particlesRef.current.push({
        x: centerX + (Math.random() - 0.5) * 60,
        y: centerY + (Math.random() - 0.5) * 40,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 4,
        radius: Math.random() * 4 + 2,
        alpha: 1,
        maxAlpha: 1,
        alphaSpeed: Math.random() * 0.008 + 0.004,
        color: CONFETTI_PALETTE[Math.floor(Math.random() * CONFETTI_PALETTE.length)],
        isConfetti: true,
        angle: Math.random() * 360,
        angularSpeed: (Math.random() - 0.5) * 12,
        width: Math.random() * 8 + 4,
        height: Math.random() * 12 + 6,
        gravity: 0.12,
      });
    }
  };

  useEffect(() => {
    if (burstTrigger > 0) {
      triggerBurst(100);
    }
  }, [burstTrigger]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const baseCount = intensity === 'subtle' ? 30 : intensity === 'ambient' ? 55 : 85;
    particlesRef.current = [];

    // Initialize ambient particles
    for (let i = 0; i < baseCount; i++) {
      particlesRef.current.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: -Math.random() * 0.45 - 0.1,
        radius: Math.random() * 1.8 + 0.6,
        alpha: Math.random() * 0.5 + 0.2,
        maxAlpha: Math.random() * 0.6 + 0.3,
        alphaSpeed: (Math.random() * 0.006 + 0.002) * (Math.random() > 0.5 ? 1 : -1),
        color: GOLD_PALETTE[Math.floor(Math.random() * GOLD_PALETTE.length)],
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = Math.min((time - lastTime) / 16.667, 2);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      const particles = particlesRef.current;

      // Draw faint constellation lines between close ambient particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        if (p1.isConfetti) continue;

        for (let j = i + 1; j < Math.min(i + 8, particles.length); j++) {
          const p2 = particles[j];
          if (p2.isConfetti) continue;
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(212, 175, 55, ${0.06 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Update & Draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        if (p.isConfetti) {
          // Confetti physics
          p.x += p.vx * dt;
          p.y += p.vy * dt;
          p.vy += (p.gravity || 0.12) * dt;
          p.vx *= 0.985;
          p.angle = (p.angle || 0) + (p.angularSpeed || 2) * dt;
          p.alpha -= p.alphaSpeed * dt;

          if (p.alpha <= 0 || p.y > height + 50) {
            particles.splice(i, 1);
            continue;
          }

          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(((p.angle || 0) * Math.PI) / 180);
          ctx.globalAlpha = Math.max(0, p.alpha);
          ctx.fillStyle = p.color;
          ctx.fillRect(-(p.width || 6) / 2, -(p.height || 10) / 2, p.width || 6, p.height || 10);
          ctx.restore();
        } else {
          // Ambient golden dust
          p.x += p.vx * dt;
          p.y += p.vy * dt;

          // Interactive subtle mouse repulsion
          if (mouse.active) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120 && dist > 0) {
              const force = (1 - dist / 120) * 0.8;
              p.x += (dx / dist) * force * dt;
              p.y += (dy / dist) * force * dt;
            }
          }

          // Shimmer alpha
          p.alpha += p.alphaSpeed * dt;
          if (p.alpha > p.maxAlpha) {
            p.alpha = p.maxAlpha;
            p.alphaSpeed = -Math.abs(p.alphaSpeed);
          } else if (p.alpha < 0.1) {
            p.alpha = 0.1;
            p.alphaSpeed = Math.abs(p.alphaSpeed);
          }

          // Wrap edges
          if (p.y < -10) {
            p.y = height + 10;
            p.x = Math.random() * width;
          }
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;

          // Render particle with subtle bloom
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = Math.max(0, p.alpha);
          ctx.shadowBlur = 8;
          ctx.shadowColor = '#D4AF37';
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      ctx.globalAlpha = 1;
      animFrameIdRef.current = requestAnimationFrame(render);
    };

    animFrameIdRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [intensity, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 w-full h-full"
      style={{ opacity: 0.9 }}
      aria-hidden="true"
    />
  );
};
