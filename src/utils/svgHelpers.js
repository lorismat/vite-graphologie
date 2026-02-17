// src/utils/svgHelpers.js
export function removeSvgAttributes(svgRoot = document) {
  // Remove width/height from all SVGs under svgRoot
  svgRoot.querySelectorAll('svg').forEach(svg => {
    svg.removeAttribute('width')
    svg.removeAttribute('height')
  })

  // Remove unwanted strokeDasharray styles
  svgRoot.querySelectorAll('svg [style]').forEach(el => {
    if (el.style.strokeDasharray === 'none') {
      el.style.removeProperty('stroke-dasharray')
    }
  })
}