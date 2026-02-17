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