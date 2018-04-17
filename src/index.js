// All
import elements from './elementsSorted'

// Get init functions
import magnet from './components/magnet'
import fade from './components/fade'
import grow from './components/grow'
import avoid from './components/avoid'
import {initFly, moveFly} from './components/fly'
import swap from './components/swap'

// Run init

const elementsInUse = {
  magnet: magnet(elements.magnet),
  fade: fade(elements.fade),
  avoid: avoid(elements.avoid),
  flies: initFly(elements.fly),
  swap: swap(elements.swap),
}

const dispatchScroll = () => {
  grow(elements.grow)
  elementsInUse.flies.map(fly => moveFly(fly.img))
};
window.addEventListener("scroll", dispatchScroll, true);
