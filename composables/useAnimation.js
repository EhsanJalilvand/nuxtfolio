import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function useAnimation() {
  gsap.registerPlugin(ScrollTrigger)

  const animateOnScroll = (element, options) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      ...options
    })
  }

  return { animateOnScroll }
}