// components/CursifyCursor.js
'use client';
import { useEffect, useRef, useState } from 'react';
import { cn , isTouchDevice } from '../app/utils'; 

export default function CursifyCursor() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const dotRef = useRef(null);
  const position = useRef({ x: 0, y: 0 });
  const animationRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      const dx = mouse.x - position.current.x;
      const dy = mouse.y - position.current.y;
      position.current.x += dx * 0.2;
      position.current.y += dy * 0.2;

      if (dotRef.current) {
        dotRef.current.style.left = `${position.current.x}px`;
        dotRef.current.style.top = `${position.current.y}px`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    // Handle hover scale
    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, select'
    );

    const handleEnter = () => {
      if (dotRef.current) {
        dotRef.current.style.width = '30px';
        dotRef.current.style.height = '30px';
      }
    };

    const handleLeave = () => {
      if (dotRef.current) {
        dotRef.current.style.width = '10px';
        dotRef.current.style.height = '10px';
      }
    };

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleEnter);
      el.addEventListener('mouseleave', handleLeave);
    });

    if (typeof window !== 'undefined' && isTouchDevice()) return null;
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationRef.current);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleEnter);
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, [mouse]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      <div
        ref={dotRef}
        className={cn(
          'absolute rounded-full bg-black dark:bg-white transition-[width,height] duration-150 ease-in-out'
        )}
        style={{
          width: '10px',
          height: '10px',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
}
