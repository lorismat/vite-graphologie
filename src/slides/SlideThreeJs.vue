<template>
  <div ref="container" class="three-container"></div>
</template>

<script setup>
import { ref, onBeforeUnmount } from 'vue'
import * as THREE from 'three'

const container = ref(null)
let scene, camera, renderer, cube, animationId


function updateDimensions() {
  if (!container.value) return;
  
  // Use client dimensions instead of BoundingClientRect for better consistency with CSS
  const width = container.value.clientWidth;
  const height = container.value.clientHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height, false); 
}


function start() {
  if (!container.value) return

  const rect = container.value.getBoundingClientRect()

  // Scene
  scene = new THREE.Scene()

  // Camera
  camera = new THREE.PerspectiveCamera(75, rect.width / rect.height, 0.1, 1000)
  camera.position.z = 3

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  // renderer.setSize(rect.width, rect.height, false)
  // renderer.setPixelRatio(window.devicePixelRatio)
  container.value.appendChild(renderer.domElement)

  // Set initial style to make canvas fill the container
  renderer.domElement.style.width = '100%';
  renderer.domElement.style.height = '100%';
  renderer.domElement.style.display = 'block';

  updateDimensions();
  
  // Cube
  const geometry = new THREE.BoxGeometry()
  
  // Create an edges-only geometry
  const edges = new THREE.EdgesGeometry(geometry)
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 })
  
  // Use LineSegments instead of Mesh
  cube = new THREE.LineSegments(edges, lineMaterial)
  scene.add(cube)

  // Animate
  function animate() {
    animationId = requestAnimationFrame(animate)
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    renderer.render(scene, camera)
  }
  animate()

  window.addEventListener('resize', onResize)
}

function stop() {
  cancelAnimationFrame(animationId)
  if (renderer) {
    renderer.dispose()
    renderer.forceContextLoss()
    renderer.domElement.remove()
  }
  scene = camera = renderer = cube = animationId = null
  window.removeEventListener('resize', onResize)
}

function onResize() {
  if (!container.value || !renderer || !camera) return
  const rect = container.value.getBoundingClientRect()
  renderer.setSize(rect.width, rect.height, false)
  camera.aspect = rect.width / rect.height
  camera.updateProjectionMatrix()
}

defineExpose({ start, stop })
onBeforeUnmount(() => stop())
</script>

<style scoped>
.three-container {
  position: relative;
  width: 100%;
  height: 100%; /* Changed from 60vh to 100% to fill the Reveal slide */
  min-height: 500px; /* Ensure there is a visible height */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
</style>