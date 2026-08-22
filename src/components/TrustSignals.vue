<script setup lang="ts">
const stats = [
  {
    number: '50+',
    label: 'År i industrin',
    sublabel: 'Sedan 1970',
  },
  {
    number: '70+',
    label: 'Patent & design',
    sublabel: 'Innovation',
  },
  {
    number: '40',
    label: 'Experter',
    sublabel: 'Dedikerade team',
  },
  {
    number: '7000m²',
    label: 'Modern fabrik',
    sublabel: 'Borås, Sverige',
  },
]
</script>

<template>
  <section class="section-padding bg-dark relative overflow-hidden">
    <!-- Background accents -->
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-orange/30 to-transparent"></div>
    <div class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

    <div class="container-custom relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16 md:mb-20">
        <h2 class="text-4xl md:text-5xl font-black text-white mb-4">
          Innovation med kunskap
        </h2>
        <p class="">
          Decennier av precision, innovation och tillförlitlighet i varje komponent vi levererar.
        </p>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-800 border border-gray-800 rounded-2xl overflow-hidden">
        <div
          v-for="(stat, index) in stats"
          :key="stat.number"
          class="flex flex-col items-center justify-center text-center p-8 md:p-10 group"
          :class="{ 'md:border-l-0': index === 0 }"
        >
          <!-- Number -->
          <div class="text-5xl md:text-6xl font-black text-accent-orange mb-3 group-hover:scale-110 transition-transform duration-300">
            {{ stat.number }}
          </div>

          <!-- Label -->
          <div class="text-base md:text-lg font-bold text-white mb-1">
            {{ stat.label }}
          </div>

          <!-- Sublabel -->
          <div class="text-sm text-gray-400 font-medium">
            {{ stat.sublabel }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
