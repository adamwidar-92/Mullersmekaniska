import type { Directive } from 'vue'

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible')
        observer.unobserve(entry.target)
      }
    }
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
)

/**
 * v-reveal — fades/slides the element in when it enters the viewport.
 * Optional value: transition delay in milliseconds (v-reveal="150").
 */
export const vReveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    el.classList.add('reveal')
    if (binding.value) {
      el.style.setProperty('--reveal-delay', `${binding.value}ms`)
    }
    observer.observe(el)
  },
  unmounted(el) {
    observer.unobserve(el)
  },
}
