<template>
  <div class="svg-center">
    <component :is="Diagram" :id="svgId" />
  </div>
</template>

<script setup>
import { onMounted, watch, shallowRef, nextTick } from 'vue'
import { animate, svg, stagger } from 'animejs'
import Reveal from 'reveal.js/dist/reveal.esm.js'

import { removeSvgAttributes } from '@/utils/svgHelpers.js'
import { runSvgStrokeAnimation } from '@/utils/svgAnimation.js'

const Diagram = shallowRef(null)

const props = defineProps({
  svgId: String, 
  svgFile: String
})

let revealListener = null

async function loadSvg(name) {
  const module = await import(`../assets/svg/${name}.svg`)
  Diagram.value = module.default
}

watch(
  () => props.svgFile,
  (newVal) => {
    if (newVal) loadSvg(newVal)
  },
  { immediate: true }
)

onMounted(async () => {
  await nextTick()
  if (Reveal) {
    revealListener = async (event) => {
      const svgEl = document.getElementById(props.svgId)
      if (event.currentSlide.contains(svgEl)) {
        await nextTick()
        removeSvgAttributes()
        runSvgStrokeAnimation(svgEl)
      }
    }
    Reveal.on('slidechanged', revealListener)
  }
})
</script>

<style scoped>
.svg-center {
  text-align: center !important;
}

.svg-center svg {
  display: block;
}
</style>