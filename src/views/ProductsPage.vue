<script setup lang="ts">
import { computed, ref } from 'vue'
import PageHero from '../components/PageHero.vue'
import ProductCard from '../components/ProductCard.vue'
import ProductModal from '../components/ProductModal.vue'
import CTASection from '../components/CTASection.vue'
import type { ProductItem } from '../components/ProductModal.vue'
import { products } from '../data/products'

const categories = ['Alla', 'Utdrivare', 'Filter', 'Kopplingar']
const selectedCategory = ref('Alla')

const modalOpen = ref(false)
const selectedProduct = ref<ProductItem | null>(null)

const filteredProducts = computed(() =>
  selectedCategory.value === 'Alla'
    ? products
    : products.filter((p) => p.category === selectedCategory.value),
)

const openProduct = (product: ProductItem) => {
  selectedProduct.value = product
  modalOpen.value = true
}
</script>

<template>
  <div>
    <PageHero
      eyebrow="Produktprogram"
      title="Produkter"
      lead="Högkvalitativa precisionkomponenter för formverktyg och plastindustrin — utvecklade, patenterade och tillverkade i Borås sedan 1970."
    />

    <!-- Filters -->
    <section class="sticky top-24 md:top-28 z-30 py-5 bg-white/90 dark:bg-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div class="container-custom flex flex-wrap items-center gap-3">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="selectedCategory = cat"
          class="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
          :class="[
            selectedCategory === cat
              ? 'bg-accent-orange text-white shadow-glow'
              : 'bg-gray-100 dark:bg-metal-gray text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700',
          ]"
        >
          {{ cat }}
        </button>
        <span class="ml-auto text-sm text-gray-500 dark:text-gray-400 font-medium hidden sm:block">
          {{ filteredProducts.length }} produkter
        </span>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="section-padding bg-surface dark:bg-metal-gray/40">
      <div class="container-custom">
        <TransitionGroup name="grid" tag="div" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <ProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
            @select="openProduct"
          />
        </TransitionGroup>

        <div v-if="filteredProducts.length === 0" class="text-center py-16">
          <p class="text-gray-600 dark:text-gray-400">Inga produkter i denna kategori ännu.</p>
        </div>
      </div>
    </section>

    <!-- Support note -->
    <section class="section-padding bg-white dark:bg-dark">
      <div class="container-custom">
        <div v-reveal class="max-w-3xl mx-auto text-center">
          <span class="eyebrow eyebrow-centered">Behöver du hjälp?</span>
          <h2 class="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Hittar du inte det du söker?
          </h2>
          <p class="mt-5 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Vi tillverkar även kundspecifika lösningar efter dina ritningar. Kontakta oss så hjälper våra tekniker dig att hitta rätt komponent eller ta fram en skräddarsydd lösning.
          </p>
          <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <RouterLink to="/kontakt" class="btn-primary">Kontakta våra tekniker</RouterLink>
            <RouterLink to="/kompetenser" class="btn-outline">Se våra kompetenser</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <CTASection />
  </div>

  <ProductModal v-model="modalOpen" :product="selectedProduct" />
</template>

<style scoped>
.grid-enter-active,
.grid-leave-active {
  transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}
.grid-enter-from,
.grid-leave-to {
  opacity: 0;
  transform: translateY(16px) scale(0.98);
}
.grid-leave-active {
  position: absolute;
}
</style>
