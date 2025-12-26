import { useEffect, useRef } from 'react';

export function SakuraParticles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create particles
    const particles: HTMLDivElement[] = [];
    
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      const size = 4 + Math.random() * 4;
      const top = 10 + Math.random() * 70;
      const duration = 12 + Math.random() * 18;
      const delay = Math.random() * 8;
      const isRed = Math.random() > 0.5;
      
      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        top: ${top}%;
        left: -10px;
        background: ${isRed ? '#ff0000' : '#ffffff'};
        border-radius: 50%;
        box-shadow: 0 0 10px ${isRed ? '#ff0000' : '#ffffff'};
        animation: particleMove ${duration}s linear ${delay}s infinite;
      `;
      
      container.appendChild(particle);
      particles.push(particle);
    }

    return () => {
      particles.forEach(p => p.remove());
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes particleMove {
          0% { left: -10px; opacity: 1; }
          100% { left: calc(100vw + 10px); opacity: 1; }
        }
      `}</style>
      <div 
        ref={containerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 15,
          overflow: 'hidden',
        }}
      >
        {/* Static test dots to verify component renders */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          width: '20px',
          height: '20px',
          background: '#ff0000',
          borderRadius: '50%',
          boxShadow: '0 0 20px #ff0000',
        }} />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '20px',
          height: '20px',
          background: '#ffffff',
          borderRadius: '50%',
          boxShadow: '0 0 20px #ffffff',
        }} />
      </div>
    </>
  );
}
