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
    const particleCount = 80; // Increased count for visibility
    const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 3 + Math.random() * 8, // Faster fall
      animationDelay: Math.random() * 5,
      size: 6 + Math.random() * 8, // Slightly varied sizes
      type: (Math.random() > 0.4 ? 'petal' : 'snow') as 'petal' | 'snow', // More snow now
      rotationStart: Math.random() * 360,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="sakura-container fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className={`particle-base absolute ${
            p.type === 'petal' ? 'particle-petal' : 'particle-snow'
          }`}
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`, 
            animation: `fall ${p.animationDuration}s linear infinite`,
            animationDelay: `${p.animationDelay}s`,
            transform: `rotate(${p.rotationStart}deg)`,
          }}
        />
      ))}
    </div>
  );
}
