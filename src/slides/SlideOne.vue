<template>
  <div class="section-border">
    <Diagram ref="diagramRef" width="400" height="400" id="temp" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { animate, svg, stagger } from 'animejs'

import Diagram from '../assets/svg/first_plain.svg'
const diagramRef = ref(null)

onMounted(() => {
  const svgEl = diagramRef.value?.$el || diagramRef.value
  if (!svgEl) return

  // animate('#temp', { rotate: '1turn' });
})
</script>

<style scoped>
</style>