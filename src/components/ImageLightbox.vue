<script setup lang="ts">
import { ref, watch } from 'vue'

export interface GalleryImage {
  src: string
  alt: string
}

const props = defineProps<{
  modelValue: boolean
  images: GalleryImage[]
  startIndex?: number
}>()

const emit = defineEmits<{ 'update:modelValue': [value: boolean] }>()

const index = ref(props.startIndex ?? 0)

watch(
  () => props.modelValue,
  (open) => {
    if (open) {
      index.value = props.startIndex ?? 0
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKeydown)
    } else {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeydown)
    }
  },
)

const close = () => emit('update:modelValue', false)
const prev = () => (index.value = (index.value - 1 + props.images.length) % props.images.length)
const next = () => (index.value = (index.value + 1) % props.images.length)

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') close()
  if (e.key === 'ArrowLeft') prev()
  if (e.key === 'ArrowRight') next()
}
</script>

<template>
  <Teleport to="body">
    <Transition name="lightbox">
      <div
        v-if="modelValue"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-dark/95 backdrop-blur-sm"
        role="dialog"
        aria-modal="true"
        @click="close"
      >
        <button class="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-accent-orange text-white flex items-center justify-center transition-colors z-10" aria-label="Stäng" @click.stop="close">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <button
          v-if="images.length > 1"
          class="absolute left-4 md:left-8 w-11 h-11 rounded-full bg-white/10 hover:bg-accent-orange text-white flex items-center justify-center transition-colors z-10"
          aria-label="Föregående bild"
          @click.stop="prev"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <figure class="max-w-5xl w-full px-4" @click.stop>
          <img
            :src="images[index]?.src"
            :alt="images[index]?.alt"
            class="max-h-[80vh] w-auto mx-auto rounded-lg shadow-2xl object-contain"
          />
          <figcaption v-if="images[index]?.alt" class="mt-4 text-center text-gray-300 text-sm font-medium">
            {{ images[index]?.alt }}
            <span v-if="images.length > 1" class="text-gray-500 ml-2">{{ index + 1 }} / {{ images.length }}</span>
          </figcaption>
        </figure>

        <button
          v-if="images.length > 1"
          class="absolute right-4 md:right-8 w-11 h-11 rounded-full bg-white/10 hover:bg-accent-orange text-white flex items-center justify-center transition-colors z-10"
          aria-label="Nästa bild"
          @click.stop="next"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.25s ease;
}
.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}
</style>
