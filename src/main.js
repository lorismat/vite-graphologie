import Reveal from 'reveal.js/dist/reveal.esm.js'
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/white.css'
import './style.css'

import { createApp } from 'vue'
import SlideWriting from './slides/SlideWriting.vue'
import SlideClassic from './slides/SlideClassic.vue'
import SlideAnime from './slides/SlideAnime.vue'
import SlideThreeJs from './slides/SlideThreeJs.vue'
import SlideTyping from './slides/SlideTyping.vue'

let app = null
let threeSlideComponent = null

Reveal.initialize({
  hash: false,
  progress: true,
  controls: false,
  slideNumber: false,
  backgroundTransition: 'none',
  transition: 'none'
});

createApp(SlideClassic, {
  text: 'Hello from...'
}).mount('#vue-slide-intro')

createApp(SlideAnime, {

}).mount('#vue-slide-anime')

createApp(SlideWriting, {
  svgFile: 'handwriting'
}).mount('#vue-slide-handwriting')

createApp(SlideTyping, {
  svgFile: 'typing'
}).mount('#vue-slide-typing')

/* Three.js specific */
Reveal.on('ready', (event) => {
  const slide = event.currentSlide
  const container = slide.querySelector('#vue-slide-threejs')
  if (container && !app) {
    app = createApp(SlideThreeJs)
    threeSlideComponent = app.mount(container)
    threeSlideComponent.start()
  }
})

/* Three.js specific */
Reveal.on('slidechanged', (event) => {
  const prevContainer = event.previousSlide?.querySelector('#vue-slide-threejs')
  if (prevContainer && threeSlideComponent) {
    threeSlideComponent.stop()
    app.unmount()
    app = null
    threeSlideComponent = null
  }
  const container = event.currentSlide.querySelector('#vue-slide-threejs')
  if (container && !app) {
    app = createApp(SlideThreeJs)
    threeSlideComponent = app.mount(container)
    threeSlideComponent.start()
  }
})
