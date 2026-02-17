import Reveal from 'reveal.js/dist/reveal.esm.js'
import 'reveal.js/dist/reveal.css'

export function initReveal() {
  const deck = new Reveal({
    hash: true
  })
  deck.initialize()
}