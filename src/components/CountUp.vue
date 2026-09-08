<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    end: number
    suffix?: string
    prefix?: string
    duration?: number
  }>(),
  { suffix: '', prefix: '', duration: 1800 },
)

const display = ref('0')
const rootEl = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null
let raf = 0
let started = false

const animate = () => {
  const start = performance.now()
  const tick = (now: number) => {
    const progress = Math.min((now - start) / props.duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    display.value = String(Math.round(eased * props.end))
    if (progress < 1) {
      raf = requestAnimationFrame(tick)
    }
  }
  raf = requestAnimationFrame(tick)
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting && !started) {
        started = true
        animate()
        observer?.disconnect()
      }
    },
    { threshold: 0.4 },
  )
  if (rootEl.value) observer.observe(rootEl.value)
})

watch(
  () => props.end,
  () => {
    if (started) display.value = String(props.end)
  },
)

onUnmounted(() => {
  observer?.disconnect()
  cancelAnimationFrame(raf)
})
</script>

<template>
  <span ref="rootEl">{{ prefix }}{{ display }}{{ suffix }}</span>
</template>
