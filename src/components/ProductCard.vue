<script setup lang="ts">
import type { ProductItem } from './ProductModal.vue'

defineProps<{
  product: ProductItem
}>()

const emit = defineEmits<{ select: [product: ProductItem] }>()
</script>

<template>
  <article v-reveal class="group h-full flex flex-col bg-white dark:bg-dark rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 card-hover hover:border-accent-orange dark:hover:border-accent-orange">
    <!-- Product Image -->
    <button
      class="relative h-60 overflow-hidden bg-gray-100 dark:bg-metal-gray w-full cursor-pointer"
      :aria-label="`Visa detaljer för ${product.name}`"
      @click="emit('select', product)"
    >
      <img
        :src="product.image"
        :alt="product.name"
        loading="lazy"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <span v-if="product.category" class="absolute top-4 left-4 px-3 py-1 rounded-full bg-dark/70 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider">
        {{ product.category }}
      </span>
    </button>

    <!-- Content -->
    <div class="p-8 flex flex-col flex-grow">
      <h3 class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-accent-orange transition-colors">
        {{ product.name }}
      </h3>

      <p class="mt-2 text-accent-orange font-semibold text-sm">
        {{ product.description }}
      </p>

      <ul class="mt-6 space-y-3 flex-grow">
        <li v-for="(feature, idx) in product.features.slice(0, 3)" :key="idx" class="flex items-start gap-2.5 text-gray-600 dark:text-gray-400">
          <svg class="w-4 h-4 text-accent-orange flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          <span class="text-sm leading-relaxed">{{ feature }}</span>
        </li>
        <li v-if="product.features.length > 3" class="text-xs text-gray-400 font-medium pl-6">
          + {{ product.features.length - 3 }} fler fördelar
        </li>
      </ul>

      <button
        class="mt-6 inline-flex items-center self-start gap-2 text-accent-orange hover:text-accent-orange-dark font-bold text-sm transition-colors cursor-pointer"
        @click="emit('select', product)"
      >
        Visa detaljer
        <svg class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </article>
</template>
