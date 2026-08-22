<script setup lang="ts">
const competencies = [
  { name: 'CNC Turning', icon: '🔩' },
  { name: 'Milling', icon: '⚙️' },
  { name: 'Wire EDM', icon: '⚡' },
  { name: 'Grinding', icon: '🔧' },
  { name: 'Heat Treatment', icon: '🔥' },
  { name: 'Lapping', icon: '✨' },
  { name: 'Blasting', icon: '💨' },
  { name: 'Polishing', icon: '🪴' },
  { name: 'Assembly', icon: '🔗' },
  { name: 'Quality Control', icon: '✓' },
  { name: 'CAD Design', icon: '📐' },
  { name: 'Prototyping', icon: '🛠️' },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="bg-dark text-white py-20">
      <div class="container-custom text-center">
        <h1 class="text-5xl font-bold mb-4">Vår kompetens</h1>
        <p class="text-gray-400 max-w-2xl mx-auto">
          Vi behärskar ett brett spektrum av precisionsteknik- och tillverkningsmetoder
        </p>
      </div>
    </section>

    <!-- Competencies Grid -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="grid md:grid-cols-4 gap-6">
          <div
            v-for="comp in competencies"
            :key="comp.name"
            class="bg-gray-50 dark:bg-metal-gray rounded-lg p-6 text-center card-hover"
          >
            <div class="text-5xl mb-4">{{ comp.icon }}</div>
            <h3 class="font-semibold text-gray-900 dark:text-white">{{ comp.name }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Details Section -->
    <section class="section-padding bg-gray-50 dark:bg-metal-gray">
      <div class="container-custom max-w-3xl">
        <h2 class="text-3xl font-bold mb-6">Vad vi erbjuder</h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
          Med moderna maskiner och erfarna tekniker kan vi utföra snabbaste och mest komplexa precisionsarbeten för era specifikationer.
        </p>

        <ul class="space-y-4">
          <li class="flex items-start space-x-3">
            <svg class="w-6 h-6 text-accent-orange flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span class="text-gray-700 dark:text-gray-300">Högprecision inom tiondel millimeter tolerans</span>
          </li>
          <li class="flex items-start space-x-3">
            <svg class="w-6 h-6 text-accent-orange flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span class="text-gray-700 dark:text-gray-300">Snabb leveranstid och flexibel produktion</span>
          </li>
          <li class="flex items-start space-x-3">
            <svg class="w-6 h-6 text-accent-orange flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span class="text-gray-700 dark:text-gray-300">Kvalitetskontroll och certifiering</span>
          </li>
          <li class="flex items-start space-x-3">
            <svg class="w-6 h-6 text-accent-orange flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span class="text-gray-700 dark:text-gray-300">Miljöcertifierad produktion (ISO 14001)</span>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
