<script setup lang="ts">
const categories = [
  {
    id: 1,
    name: 'Mold Components',
    description: 'Höga kvalitet komponenter för formverktyg och spruttningsprocesser',
    items: ['2-stage ejectors', 'Positive locking cylinders', 'Latch locks', 'Return devices', 'Hot runners'],
    icon: '⚙️'
  },
  {
    id: 2,
    name: 'Moldmachine Components',
    description: 'Komponenter designade för moderna spruttningsmaskin',
    items: ['Quick release couplings', 'Hydraulic adapters', 'Temperature control', 'Precision fittings'],
    icon: '🔧'
  },
]
</script>

<template>
  <section class="section-padding bg-gray-50 dark:bg-metal-gray">
    <div class="container-custom">
      <div class="text-center mb-12 animate-fade-in">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Produktkategorier</h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Vi erbjuder ett brett spektrum av högkvalitativa precisionkomponenter för plastindustrin
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <div
          v-for="category in categories"
          :key="category.id"
          class="bg-white dark:bg-dark rounded-xl shadow-soft p-8 card-hover"
        >
          <div class="text-5xl mb-4">{{ category.icon }}</div>

          <h3 class="text-2xl font-bold mb-2">{{ category.name }}</h3>
          <p class="text-gray-600 dark:text-gray-400 mb-6">{{ category.description }}</p>

          <!-- Product items -->
          <ul class="space-y-2 mb-6">
            <li v-for="item in category.items" :key="item" class="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300">
              <svg class="w-4 h-4 text-accent-orange flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span>{{ item }}</span>
            </li>
          </ul>

          <RouterLink to="/produkter" class="btn-primary inline-block">
            Se alla produkter
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
