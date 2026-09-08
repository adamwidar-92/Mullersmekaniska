<script setup lang="ts">
import { ref } from 'vue'
import SectionHeader from './SectionHeader.vue'
import ProductCard from './ProductCard.vue'
import ProductModal from './ProductModal.vue'
import type { ProductItem } from './ProductModal.vue'
import { products } from '../data/products'

const modalOpen = ref(false)
const selectedProduct = ref<ProductItem | null>(null)

const openProduct = (product: ProductItem) => {
  selectedProduct.value = product
  modalOpen.value = true
}
</script>

<template>
  <section class="section-padding bg-surface dark:bg-metal-gray/40">
    <div class="container-custom">
      <SectionHeader
        v-reveal
        eyebrow="Produktprogram"
        title="Produkter"
        lead="Högkvalitativa precisionkomponenter för formverktyg och plastindustrin — utvecklade och tillverkade i Borås."
      />

      <div class="mt-16 md:mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        <ProductCard
          v-for="(product, index) in products"
          :key="product.id"
          v-reveal="index * 100"
          :product="product"
          @select="openProduct"
        />
      </div>

      <div v-reveal class="mt-14 text-center">
        <RouterLink to="/produkter" class="btn-outline">
          Se hela produktprogrammet
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </RouterLink>
      </div>
    </div>

    <ProductModal v-model="modalOpen" :product="selectedProduct" />
  </section>
</template>
