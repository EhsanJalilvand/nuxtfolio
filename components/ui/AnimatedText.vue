<template>
  <component :is="tag" ref="textElement" class="opacity-0">
    <slot>{{ text }}</slot>
  </component>
</template>

<script setup>
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'

const props = defineProps({
  text: String,
  tag: {
    type: String,
    default: 'div'
  },
  delay: {
    type: Number,
    default: 0
  }
})

const textElement = ref(null)

onMounted(() => {
  gsap.registerPlugin(SplitText)
  
  const split = new SplitText(textElement.value, { 
    type: 'chars,words,lines',
    linesClass: 'overflow-hidden'
  })

  gsap.from(split.chars, {
    duration: 0.8,
    y: 50,
    opacity: 0,
    stagger: 0.03,
    delay: props.delay,
    ease: 'power3.out'
  })
})
</script>