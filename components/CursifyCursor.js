'use client';
import { useEffect, useRef } from 'react';
import { cn, isTouchDevice } from '../app/utils';

export default function CursifyCursor() {
  const dotRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });
  const animationRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && isTouchDevice()) return;

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      const dx = mouseRef.current.x - position.current.x;
      const dy = mouseRef.current.y - position.current.y;
      position.current.x += dx * 0.2;
      position.current.y += dy * 0.2;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animationRef.current = requestAnimationFrame(animate);

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

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationRef.current);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleEnter);
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

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
