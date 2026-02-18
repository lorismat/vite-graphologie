// src/utils/svgAnimation.js
import { animate } from 'animejs'

export function runSvgStrokeAnimation(svgEl, speed = 0.1) {
  if (!svgEl) return

  const paths = svgEl.querySelectorAll('path')
  if (!paths.length) return

  let accumulated = 0

  paths.forEach(path => {
    const length = path.getTotalLength()
    const duration = length / speed

    path.style.strokeDasharray = length
    path.style.strokeDashoffset = length

    animate(path, {
      strokeDashoffset: [length, 0],
      duration,
      delay: accumulated,
      easing: 'linear'
    })

    accumulated += duration
  })
}

// Keep track of the current 'version' of the animation for each SVG
const activeAnimationVersions = new Map();

export function runSvgTypingAnimation(svgFile) {
  // 1. Create a unique ID for this specific animation attempt
  const runId = Math.random().toString(36).substr(2, 9);
  activeAnimationVersions.set(svgFile, runId);

  const nodes = [...document.querySelectorAll(`#${svgFile} text tspan tspan`)];
  
  // 2. Prepare segments and clear existing text
  const segments = nodes.map(el => {
    const fullText = el.getAttribute('data-full-text') || el.textContent;
    el.setAttribute('data-full-text', fullText); // Store it so we don't lose it on repeat visits
    el.textContent = ''; 
    return { el, text: fullText, index: 0 };
  });

  let currentSegment = 0;

  function typeNext() {
    // 3. CHECK: Is this STILL the active animation for this SVG?
    if (activeAnimationVersions.get(svgFile) !== runId) return;

    if (currentSegment >= segments.length) return;

    const segment = segments[currentSegment];
    
    if (segment.index > segment.text.length) {
      currentSegment++;
      typeNext();
      return;
    }

    segment.el.textContent = segment.text.slice(0, segment.index);
    segment.index++;

    // Randomize speed
    const speed = 30 + Math.random() * 30;

    // 4. Use a standard setTimeout or anime to trigger next char
    setTimeout(() => {
      typeNext();
    }, speed);
  }
  
  typeNext();
}