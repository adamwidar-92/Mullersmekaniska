<script setup lang="ts">
const stats = [
  {
    number: '50+',
    label: 'År i industrin',
    sublabel: 'Sedan 1970'
  },
  {
    number: '70+',
    label: 'Patenterade produkter',
    sublabel: 'Innovation DNA'
  },
  {
    number: '40',
    label: 'Anställda',
    sublabel: 'Dedikerade proffs'
  },
  {
    number: '7000m²',
    label: 'Modernt fabrik',
    sublabel: 'Borås, Sverige'
  },
]
</script>

<template>
  <section class="section-padding bg-white dark:bg-dark">
    <div class="container-custom">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        <div
          v-for="stat in stats"
          :key="stat.number"
          class="text-center animate-slide-up card-hover"
        >
          <div class="text-4xl md:text-5xl font-bold text-accent-orange mb-2">
            {{ stat.number }}
          </div>
          <div class="text-sm md:text-base font-semibold text-gray-900 dark:text-white mb-1">
            {{ stat.label }}
          </div>
          <div class="text-xs text-gray-600 dark:text-gray-400">
            {{ stat.sublabel }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
