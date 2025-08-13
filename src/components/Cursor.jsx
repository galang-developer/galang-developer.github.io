/**
 * @copyright 2025 Galang Dev
 * @license Apache-2.0
 */


/**
 * Node modules
 */
import { useEffect, useRef } from 'react';
import './Cursor.css';


const Cursor = () => {
  const dotRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX: posX, clientY: posY } = e;

      if (dotRef.current) {
        dotRef.current.style.left = `${posX}px`;
        dotRef.current.style.top = `${posY}px`;
      }

      if (bgRef.current) {
        bgRef.current.animate(
          {
            left: `${posX}px`,
            top: `${posY}px`,
          },
          { duration: 500, fill: 'forwards' }
        );
      }
    };

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

    const handleMouseLeave = (e) => {
      if (dotRef.current) {
        dotRef.current.style.opacity = '1';
      }
      
      if (bgRef.current) {
        bgRef.current.style.opacity = '1';
        bgRef.current.style.width = '30px';
        bgRef.current.style.height = '30px';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    const interactiveElements = document.querySelectorAll(
       '.cursor-scale, .cursor-hide'
    );
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        interactiveElements.forEach(element => {
            element.removeEventListener('mouseenter', handleMouseEnter);
            element.removeEventListener('mouseleave', handleMouseLeave);
        });
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-bg" ref={bgRef} />
    </>
  );
};

export default Cursor