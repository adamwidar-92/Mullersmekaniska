<script setup lang="ts">
import CountUp from './CountUp.vue'
import SectionHeader from './SectionHeader.vue'

const stats = [
  { end: 50, suffix: '+', label: 'År i industrin', sublabel: 'Sedan 1970' },
  { end: 70, suffix: '+', label: 'Patent & design', sublabel: 'Ständig innovation' },
  { end: 40, suffix: '', label: 'Experter', sublabel: 'Dedikerade team' },
  { end: 7000, suffix: 'm²', label: 'Modern fabrik', sublabel: 'Borås, Sverige' },
]
</script>

<template>
  <section class="section-padding bg-dark relative overflow-hidden">
    <!-- Background accents -->
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-orange/40 to-transparent"></div>
    <div class="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-orange/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="container-custom relative z-10">
      <SectionHeader
        v-reveal
        eyebrow="Varför Müller"
        title="Innovation med kunskap"
        lead="Decennier av precision, innovation och tillförlitlighet i varje komponent vi levererar."
        align="center"
        dark
      />

      <!-- Stats Grid -->
      <div v-reveal="150" class="mt-20 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="flex flex-col items-center justify-center text-center p-10 md:p-14 bg-dark group hover:bg-metal-gray transition-colors duration-300"
        >
          <div class="text-4xl md:text-6xl font-extrabold text-accent-orange mb-3 group-hover:scale-110 transition-transform duration-300">
            <CountUp :end="stat.end" :suffix="stat.suffix" />
          </div>
          <div class="text-base md:text-lg font-bold text-white mb-1">
            {{ stat.label }}
          </div>
          <div class="text-sm text-gray-400 font-medium">
            {{ stat.sublabel }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
