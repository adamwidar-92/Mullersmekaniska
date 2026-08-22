<script setup lang="ts">
import { ref } from 'vue'

const categories = ['Alla', 'Utdrivare', 'Filter', 'Kopplingar']
const selectedCategory = ref('Alla')

const products = [
  {
    id: 1,
    name: 'Two-stage ejector type FW',
    category: 'Utdrivare',
    description: 'För total kontroll av tvåstegs utstötning',
    features: [
      'Arbetar på övre sista sekvensen',
      'Finns i fyra storlekar för att täcka de flesta behov',
      'Enkel inställning och installation',
      'Första och andra slaglängden ställs in oberoende',
      'Härdade stålkomponenter för längre livslängd',
    ],
    image: '/bilder/produkter/Two-stage ejector type FW.jpg',
  },
  {
    id: 2,
    name: 'Two-stage ejector type G',
    category: 'Utdrivare',
    description: 'För total kontroll av tvåstegs utstötning',
    features: [
      'Arbetar på nedre sista sekvensen',
      'Finns i sex storlekar för att täcka de flesta behov',
      'Första och andra slaglängden ställs in oberoende',
      'Fasta slaglängder kan inte manipuleras eller ändras av misstag',
      'Härdade stålkomponenter för längre livslängd',
    ],
    image: '/bilder/produkter/Two-stage ejector type G.jpg',
  },
  {
    id: 3,
    name: 'Two-stage ejector type D',
    category: 'Utdrivare',
    description: 'För total kontroll av tvåstegs utstötning',
    features: [
      'Arbetar med helt separata steg',
      'Finns i fyra storlekar för att täcka de flesta behov',
      'Används i formverktyg där första och andra slaget ska arbeta helt separat från varandra',
      'Härdade stålkomponenter för längre livslängd',
    ],
    image: '/bilder/produkter/Two-stage ejector type D.jpg',
  },
  {
    id: 4,
    name: 'Mould gap filter type WSF',
    category: 'Filter',
    description: 'För formverktyg',
    features: [
      'Förhindrar att metallspån, osmält granulat etc. når formen',
      'Mild filtrering',
      'Lågt tryckfall',
      'Lätt att rengöra',
      'Filterpatronen är enkel att demontera med en utslagspinn',
      'Möjligt att förstora filtergapet med cylindrisk slipning',
    ],
    image: '/bilder/produkter/Mould gap filter type WSF.jpg',
  },
  {
    id: 5,
    name: 'Pneumatic quick release coupling type PK',
    category: 'Kopplingar',
    description: 'Snabbkoppling för pneumatiska system',
    features: [
      'Snabb och säker anslutning av verktyg och tillbehör',
      'Pneumatisk drift för effektiv koppling',
      'Robust konstruktion för industriell användning',
      'Kompatibel med vanliga pneumatiska system',
      'Lång livslängd och lågt underhållsbehov',
    ],
    image: '/bilder/produkter/PK168.jpg',
  },
]

const filteredProducts = () => {
  if (selectedCategory.value === 'Alla') return products
  return products.filter((p) => p.category === selectedCategory.value)
}
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="section-padding border-b border-gray-200 dark:border-gray-800">
      <div class="container-custom max-w-3xl">
        <h1 class="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
          Produkter
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400">
          Högkvalitativa precisionkomponenter för formverktyg och plastindustrin.
        </p>
      </div>
    </section>

    <!-- Filters -->
    <section class="py-8 border-b border-gray-200 dark:border-metal-gray">
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
                : 'bg-gray-100 dark:bg-metal-gray text-gray-900 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700',
            ]"
          >
            {{ cat }}
          </button>
        </div>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="section-padding bg-gray-50 dark:bg-metal-gray">
      <div class="container-custom">
        <div class="grid md:grid-cols-2 gap-12">
          <div v-for="product in filteredProducts()" :key="product.id" class="group">
            <div class="bg-white dark:bg-dark rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 hover:border-accent-orange dark:hover:border-accent-orange h-full flex flex-col">
              <!-- Product Image -->
              <div class="relative h-64 overflow-hidden bg-gray-200 dark:bg-metal-gray">
                <img
                  :src="product.image"
                  :alt="product.name"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <!-- Content -->
              <div class="p-10 flex flex-col flex-grow">
                <!-- Title -->
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-accent-orange transition-colors">
                  {{ product.name }}
                </h3>

                <!-- Description -->
                <p class="text-accent-orange font-bold text-sm mb-6 italic">
                  {{ product.description }}
                </p>

                <!-- Features -->
                <ul class="space-y-3 mb-8 flex-grow">
                  <li v-for="(feature, idx) in product.features" :key="idx" class="flex items-start gap-3 text-gray-700 dark:text-gray-400">
                    <svg class="w-5 h-5 text-accent-orange flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-sm">{{ feature }}</span>
                  </li>
                </ul>

                <!-- CTA -->
                <RouterLink to="/kontakt" class="inline-flex items-center text-accent-orange hover:text-accent-orange-dark font-bold text-sm transition-colors gap-2">
                  Begär offert
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </RouterLink>
              </div>
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
