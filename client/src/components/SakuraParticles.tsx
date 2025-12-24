import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  left: number;
  animationDuration: number;
  animationDelay: number;
  size: number;
  type: 'petal' | 'snow';
  rotationStart: number;
}

export function SakuraParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const particleCount = 50; // Increased count for mixed effect
    const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 5 + Math.random() * 10,
      animationDelay: Math.random() * 5,
      size: 8 + Math.random() * 12,
      type: Math.random() > 0.6 ? 'petal' : 'snow', // 40% petals, 60% snow
      rotationStart: Math.random() * 360,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="sakura-container fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className={`particle-base absolute ${
            p.type === 'petal' ? 'particle-petal' : 'particle-snow'
          }`}
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.type === 'petal' ? p.size : p.size * 0.6}px`, // Snow slightly smaller
            animation: `fall ${p.animationDuration}s linear infinite`,
            animationDelay: `${p.animationDelay}s`,
            transform: `rotate(${p.rotationStart}deg)`,
          }}
        />
      ))}
    </div>
  );
}
