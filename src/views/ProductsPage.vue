<script setup lang="ts">
import { ref } from 'vue'

const categories = ['Alla', 'Mold Components', 'Moldmachine Components']
const selectedCategory = ref('Alla')

const products = [
  { id: 1, name: '2-stage Ejector', category: 'Mold Components', description: 'Högprecision utdrivare för formverktyg', price: 'På begäran' },
  { id: 2, name: 'Positive Locking Cylinder', category: 'Mold Components', description: 'Positiv låsmekanism för säker funktion', price: 'På begäran' },
  { id: 3, name: 'Latch Lock', category: 'Mold Components', description: 'Säkringsenhet för formsamling', price: 'På begäran' },
  { id: 4, name: 'Return Device', category: 'Mold Components', description: 'Återföringsmekanism med högt precision', price: 'På begäran' },
  { id: 5, name: 'Hot Runner', category: 'Mold Components', description: 'Värmekontrollerad injektsystem', price: 'På begäran' },
  { id: 6, name: 'Quick Release Coupling', category: 'Moldmachine Components', description: 'Snabbutlösningskopling för maskinöverföring', price: 'På begäran' },
]

const filteredProducts = () => {
  if (selectedCategory.value === 'Alla') return products
  return products.filter(p => p.category === selectedCategory.value)
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="bg-dark text-white py-20">
      <div class="container-custom text-center">
        <h1 class="text-5xl font-bold mb-4">Produkter</h1>
        <p class="text-gray-400 max-w-2xl mx-auto">
          Högkvalitativa precisionkomponenter för formverktyg och plastindustrin
        </p>
      </div>
    </section>

    <!-- Filters -->
    <section class="py-12 border-b border-gray-200 dark:border-metal-gray">
      <div class="container-custom">
        <div class="flex flex-wrap gap-3">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="selectedCategory = cat"
            :class="[
              'px-4 py-2 rounded-lg font-medium transition-all',
              selectedCategory === cat
                ? 'bg-accent-orange text-white'
                : 'bg-gray-100 dark:bg-metal-gray text-gray-900 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            ]"
          >
            {{ cat }}
          </button>
        </div>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="product in filteredProducts()"
            :key="product.id"
            class="bg-gray-50 dark:bg-metal-gray rounded-lg p-6 card-hover"
          >
            <div class="aspect-square bg-gradient-to-br from-gray-200 dark:from-gray-700 to-gray-300 dark:to-gray-800 rounded-lg mb-4 flex items-center justify-center">
              <svg class="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
              </svg>
            </div>

            <h3 class="text-lg font-bold mb-2">{{ product.name }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">{{ product.description }}</p>

            <div class="flex items-center justify-between">
              <span class="text-accent-orange font-semibold">{{ product.price }}</span>
              <RouterLink to="/kontakt" class="text-accent-orange hover:text-accent-orange-dark font-medium">
                Begär →
              </RouterLink>
            </div>
          </div>
        </div>

        <div v-if="filteredProducts().length === 0" class="text-center py-12">
          <p class="text-gray-600 dark:text-gray-400">Inga produkter i denna kategori</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
