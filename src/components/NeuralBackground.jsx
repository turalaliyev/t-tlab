import { useEffect, useRef } from 'react';

const PALETTE = ['#38bdf8', '#a78bfa', '#22d3ee', '#f472b6', '#4ade80'];

export default function NeuralBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let nodes = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    class Node {
      constructor() {
        this.reset();
        // Start anywhere, not just off-screen
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.r = Math.random() * 2.2 + 0.8;
        this.color = PALETTE[Math.floor(Math.random() * PALETTE.length)];
        this.alpha = 0.35 + Math.random() * 0.55;
        this.phase = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.018 + Math.random() * 0.014;
      }

      update(t) {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < -20) this.x = canvas.width + 20;
        if (this.x > canvas.width + 20) this.x = -20;
        if (this.y < -20) this.y = canvas.height + 20;
        if (this.y > canvas.height + 20) this.y = -20;
        this.currentAlpha = this.alpha * (0.55 + 0.45 * Math.sin(t * this.pulseSpeed + this.phase));
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.currentAlpha;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        // soft outer ring
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r + 2.5, 0, Math.PI * 2);
        ctx.strokeStyle = this.color;
        ctx.globalAlpha = this.currentAlpha * 0.25;
        ctx.lineWidth = 0.8;
        ctx.stroke();
        ctx.restore();
      }
    }

    const MAX_DIST = 155;

    const drawEdges = () => {
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < MAX_DIST) {
            const a = (1 - d / MAX_DIST) * 0.22;
            ctx.save();
            ctx.globalAlpha = a;
            ctx.strokeStyle = '#38bdf8';
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
    };

    let t = 0;
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t++;
      drawEdges();
      nodes.forEach(n => { n.update(t); n.draw(); });
      raf = requestAnimationFrame(tick);
    };

    const init = () => {
      resize();
      const count = Math.min(Math.floor((canvas.width * canvas.height) / 13000), 95);
      nodes = Array.from({ length: count }, () => new Node());
      tick();
    };

    const onResize = () => {
      resize();
      nodes.forEach(n => {
        if (n.x > canvas.width) n.x = canvas.width * Math.random();
        if (n.y > canvas.height) n.y = canvas.height * Math.random();
      });
    };

    init();
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
