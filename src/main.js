import Reveal from 'reveal.js/dist/reveal.esm.js'
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/white.css'
import './style.css'

import { createApp } from 'vue'
import SlideOne from './slides/SlideOne.vue'
import SlideTwo from './slides/SlideTwo.vue'
import SlideThree from './slides/SlideThree.vue'
import SlideFour from './slides/SlideFour.vue'
import SlideFive from './slides/SlideFive.vue'
import SlideSix from './slides/SlideSix.vue'
import SlideSeven from './slides/SlideSeven.vue'

Reveal.initialize({
  hash: false,
  progress: false,
  controls: false,
  slideNumber: false,
  backgroundTransition: 'none',
  transition: 'none'
});

// Mount Vue components INSIDE slides
createApp(SlideOne).mount('#vue-slide-1')
createApp(SlideTwo).mount('#vue-slide-2')
createApp(SlideThree).mount('#vue-slide-3')
createApp(SlideFour).mount('#vue-slide-4')
createApp(SlideFive).mount('#vue-slide-5')
createApp(SlideSix).mount('#vue-slide-6')
createApp(SlideSeven).mount('#vue-slide-7')
