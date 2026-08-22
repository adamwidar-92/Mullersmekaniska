<script setup lang="ts">
const products = [
  {
    id: 1,
    name: 'Two-stage ejector type FW',
    description: 'För total kontroll av tvåstegs utstötning',
    features: [
      'Arbetar på övre sista sekvensen',
      'Finns i fyra storlekar för att täcka de flesta behov',
      'Enkel inställning och installation',
      'Första och andra slaglängden ställs in oberoende',
      'Härdade stålkomponenter för längre livslängd'
    ],
    image: '/bilder/produkter/Two-stage ejector type FW.jpg'
  },
  {
    id: 2,
    name: 'Two-stage ejector type G',
    description: 'För total kontroll av tvåstegs utstötning',
    features: [
      'Arbetar på nedre sista sekvensen',
      'Finns i sex storlekar för att täcka de flesta behov',
      'Första och andra slaglängden ställs in oberoende',
      'Fasta slaglängder kan inte manipuleras eller ändras av misstag',
      'Härdade stålkomponenter för längre livslängd'
    ],
    image: '/bilder/produkter/Two-stage ejector type G.jpg'
  },
  {
    id: 3,
    name: 'Two-stage ejector type D',
    description: 'För total kontroll av tvåstegs utstötning',
    features: [
      'Arbetar med helt separata steg',
      'Finns i fyra storlekar för att täcka de flesta behov',
      'Används i formverktyg där första och andra slaget ska arbeta helt separat från varandra',
      'Härdade stålkomponenter för längre livslängd'
    ],
    image: '/bilder/produkter/Two-stage ejector type D.jpg'
  },
  {
    id: 4,
    name: 'Mould gap filter type WSF',
    description: 'För formverktyg',
    features: [
      'Förhindrar att metallspån, osmält granulat etc. når formen',
      'Mild filtrering',
      'Lågt tryckfall',
      'Lätt att rengöra',
      'Filterpatronen är enkel att demontera med en utslagspinn',
      'Möjligt att förstora filtergapet med cylindrisk slipning'
    ],
    image: '/bilder/produkter/Mould gap filter type WSF.jpg'
  },
  {
    id: 5,
    name: 'Pneumatic quick release coupling type PK',
    description: 'Snabbkoppling för pneumatiska system',
    features: [
      'Snabb och säker anslutning av verktyg och tillbehör',
      'Pneumatisk drift för effektiv koppling',
      'Robust konstruktion för industriell användning',
      'Kompatibel med vanliga pneumatiska system',
      'Lång livslängd och lågt underhållsbehov'
    ],
    image: '/bilder/produkter/PK168.jpg'
  }
]
</script>

<template>
  <section class="section-padding bg-gray-50 dark:bg-metal-gray">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <h2 class="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
          Produkter
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Högkvalitativa precisionkomponenter för formverktyg och plastindustrin
        </p>
      </div>

      <!-- Products Grid -->
      <div class="grid md:grid-cols-2 gap-12">
        <div v-for="product in products" :key="product.id" class="group">
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
    </div>
  </section>
</template>

<style scoped></style>
