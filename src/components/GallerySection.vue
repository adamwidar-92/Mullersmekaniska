<script setup lang="ts">
import { ref } from 'vue'
import SectionHeader from './SectionHeader.vue'
import ImageLightbox from './ImageLightbox.vue'
import type { GalleryImage } from './ImageLightbox.vue'

import workshopImg from '../bilder/bildpåarbetare.jpg'
import factoryImg from '../bilder/Bildpålokalen.jpg'
import cncImg from '../bilder/precisioncnc.jpeg'
import robotImg from '../bilder/mullersmekaniska3.avif'

const lightboxOpen = ref(false)
const startIndex = ref(0)

const images: GalleryImage[] = [
  { src: workshopImg, alt: 'Precisionsbearbetning i vår verkstad i Borås' },
  { src: robotImg, alt: 'Robotiserad produktion med ABB-robot' },
  { src: factoryImg, alt: 'Müller Mekaniskas anläggning i Borås' },
  { src: cncImg, alt: 'CNC-bearbetning med hög noggrannhet' },
]

const openAt = (index: number) => {
  startIndex.value = index
  lightboxOpen.value = true
}
</script>

<template>
  <section class="section-padding bg-surface dark:bg-metal-gray/40">
    <div class="container-custom">
      <SectionHeader
        v-reveal
        eyebrow="Verkstaden"
        title="Från vår fabrik i Borås"
        lead="En inblick i vår vardag — där modern teknik och lång erfarenhet möts i varje komponent."
      />

      <div v-reveal="150" class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 auto-rows-[160px] md:auto-rows-[200px]">
        <button
          v-for="(image, index) in images"
          :key="image.src"
          class="group relative rounded-xl overflow-hidden focus-visible:outline-2 focus-visible:outline-accent-orange"
          :class="index === 0 ? 'col-span-2 row-span-2' : ''"
          :aria-label="`Förstora bild: ${image.alt}`"
          @click="openAt(index)"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            loading="lazy"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <span class="text-white text-sm font-semibold text-left">{{ image.alt }}</span>
          </div>
          <div class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
            </svg>
          </div>
        </button>
      </div>
    </div>

    <ImageLightbox v-model="lightboxOpen" :images="images" :start-index="startIndex" />
  </section>
</template>
