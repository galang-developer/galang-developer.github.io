/**
 * @copyright 2025 Galang Dev
 * @license Apache-2.0
 */


import { useEffect, useRef } from 'react';
import './Cursor.css';


const Cursor = () => {
  const dotRef = useRef(null);
  const bgRef = useRef(null);
  const pos = useRef({ x: window.innerWidth/2, y: window.innerHeight/2 });

  useEffect(() => {
    const updateCursor = (x, y) => {
      pos.current = { x, y };
      if (dotRef.current) {
        dotRef.current.style.left = `${x}px`;
        dotRef.current.style.top = `${y}px`;
      }
      if (bgRef.current) {
        bgRef.current.animate(
          { left: `${x}px`, top: `${y}px` },
          { duration: 500, fill: 'forwards' }
        );
      }
    };

    const handleMouseMove = (e) => {
      updateCursor(e.clientX, e.clientY);
    };

    const initialMove = (e) => {
      updateCursor(e.clientX, e.clientY);
      window.removeEventListener('mousemove', initialMove);
    };
    
    window.addEventListener('mousemove', initialMove);
    window.addEventListener('mousemove', handleMouseMove);

    const handleMouseEnter = (e) => {
      const target = e.target;
      
      if (target.classList.contains('cursor-hide')) {
        if (dotRef.current) dotRef.current.style.opacity = '0';
        if (bgRef.current) bgRef.current.style.opacity = '0';
      } 
      else if (
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.classList.contains('cursor-scale')
      ) {
        if (bgRef.current) {
          bgRef.current.style.width = '60px';
          bgRef.current.style.height = '60px';
        }
        if (dotRef.current) {
          dotRef.current.style.opacity = '0';
        }
      }
    };

    const handleMouseLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = '1';
      if (bgRef.current) {
        bgRef.current.style.opacity = '1';
        bgRef.current.style.width = '30px';
        bgRef.current.style.height = '30px';
      }
    };

    const elements = document.querySelectorAll('.cursor-scale, .cursor-hide');
    elements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      elements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} style={{ left: `${pos.current.x}px`, top: `${pos.current.y}px` }} />
      <div className="cursor-bg" ref={bgRef} style={{ left: `${pos.current.x}px`, top: `${pos.current.y}px` }} />
    </>
  );
};

export default Cursor