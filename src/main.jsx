/**
 * @copyright 2025 Galang Dev
 * @license Apache-2.0
 */


/**
 * Node modules
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';


/**
 * Components
 */
import App from './App.jsx';


/**
 * CSS link
 */
import './index.css';
import 'lenis/dist/lenis.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


/**
 * Cursor
 */
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorBg = document.querySelector("[data-cursor-bg]");

window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorBg.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});