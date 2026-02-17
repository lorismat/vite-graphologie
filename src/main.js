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

Reveal.initialize({
  hash: false,
  progress: true,
  controls: false,
  slideNumber: false,
  backgroundTransition: 'none',
  transition: 'none'
});

// Mount Vue components INSIDE slides
createApp(SlideClassic, {
  text: 'Hello from...'
}).mount('#vue-slide-0')

createApp(SlideWriting, {
  svgId: 'writing-1',
  svgFile: 'first_plain'
}).mount('#vue-slide-1')

createApp(SlideAnime).mount('#vue-slide-2')

createApp(SlideWriting, {
  svgId: 'writing-2',
  svgFile: 'second_plain'
}).mount('#vue-slide-3')

createApp(SlideWriting, {
  svgId: 'writing-3',
  svgFile: 'third_plain'
}).mount('#vue-slide-4')

createApp(SlideThreeJs).mount('#vue-slide-5')
createApp(SlideTyping).mount('#vue-slide-6')
