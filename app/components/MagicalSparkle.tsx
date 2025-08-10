'use client'
import { Suspense, useRef, useEffect, useState } from "react";

// Magical Sparkle Component for global cursor effect
export function MagicalSparkles() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [sparkles, setSparkles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    rotation: number;
    scale: number;
    color: string;
    delay: number;
    type: 'star' | 'diamond' | 'circle';
    velocity: { x: number; y: number };
  }>>([]);
  const sparkleId = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Create new sparkles on mouse move with more variety
      const sparkleTypes: Array<'star' | 'diamond' | 'circle'> = ['star', 'diamond', 'circle'];
      const colors = ['#FFD700', '#FF69B4', '#00FFFF', '#FF1493', '#7B68EE', '#FF4500', '#32CD32', '#FF8C00'];
      
      const newSparkle = {
        id: sparkleId.current++,
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 12 + 6,
        opacity: 1,
        rotation: Math.random() * 360,
        scale: 0,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 0.5,
        type: sparkleTypes[Math.floor(Math.random() * sparkleTypes.length)],
        velocity: {
          x: (Math.random() - 0.5) * 4,
          y: (Math.random() - 0.5) * 4
        }
      };
      
      setSparkles(prev => [...prev.slice(-20), newSparkle]); // Keep only last 20 sparkles
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSparkles(prev => 
        prev.map(sparkle => ({
          ...sparkle,
          opacity: sparkle.opacity - 0.015,
          scale: Math.min(sparkle.scale + 0.08, 1),
          rotation: sparkle.rotation + 3,
          x: sparkle.x + sparkle.velocity.x * 0.1,
          y: sparkle.y + sparkle.velocity.y * 0.1
        })).filter(sparkle => sparkle.opacity > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  const renderSparkle = (sparkle: any) => {
    const { type, color, size, rotation, scale, opacity } = sparkle;
    
    if (type === 'star') {
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
            fill={color}
          />
        </svg>
      );
    } else if (type === 'diamond') {
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2L22 12L12 22L2 12L12 2Z"
            fill={color}
          />
        </svg>
      );
    } else {
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill={color} />
        </svg>
      );
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 9999
    }}>
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="sparkle-trail"
          style={{
            position: 'absolute',
            left: sparkle.x - sparkle.size / 2,
            top: sparkle.y - sparkle.size / 2,
            width: sparkle.size,
            height: sparkle.size,
            opacity: sparkle.opacity,
            transform: `scale(${sparkle.scale}) rotate(${sparkle.rotation}deg)`,
            transition: 'all 0.1s ease-out',
            pointerEvents: 'none',
            filter: `drop-shadow(0 0 8px ${sparkle.color}) drop-shadow(0 0 16px ${sparkle.color})`
          }}
        >
          {renderSparkle(sparkle)}
        </div>
      ))}
      
      {/* Main cursor sparkle with enhanced effects */}
      <div
        style={{
          position: 'absolute',
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          width: 40,
          height: 40,
          pointerEvents: 'none',
          animation: 'pulse 1.5s ease-in-out infinite'
        }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            filter: 'drop-shadow(0 0 15px #FFD700) drop-shadow(0 0 25px #FF69B4) drop-shadow(0 0 35px #00FFFF)'
          }}
        >
          <path
            d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
            fill="#FFD700"
          />
        </svg>
      </div>
      
      {/* Additional glow effect around cursor */}
      <div
        style={{
          position: 'absolute',
          left: mousePosition.x - 30,
          top: mousePosition.y - 30,
          width: 60,
          height: 60,
          pointerEvents: 'none',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 215, 0, 0.3) 0%, rgba(255, 105, 180, 0.2) 30%, rgba(0, 255, 255, 0.1) 60%, transparent 100%)',
          animation: 'pulse 2s ease-in-out infinite',
          animationDelay: '0.5s'
        }}
      />
    </div>
  );
}
