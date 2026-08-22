<script setup lang="ts">
const news = [
  {
    id: 1,
    title: 'Sommarstängt 2026',
    date: '2026-06-25',
    category: 'Aktuellt',
    excerpt: 'We are closed for summer vacation from 6 – 24 of July. From 27 – 31 of July we will have limited staffing.',
    link: '/nyheter',
    highlight: true,
  },
  {
    id: 2,
    title: 'Ny hemsida är lanserad',
    date: '2026-08-22',
    category: 'Digitalt',
    excerpt: 'Välkommen till vår nya webbplats. Här hittar du lättare information om våra produkter, kompetenser och kontaktuppgifter.',
    link: '/nyheter',
    highlight: false,
  },
  {
    id: 3,
    title: 'Investering i ny precisionsutrustning',
    date: '2026-08-15',
    category: 'Investering',
    excerpt: 'Vi har investerat i den senaste generationens precisionsmaskiner för att öka produktionskapacitet och noggrannhet.',
    link: '/nyheter',
    highlight: false,
  },
]

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('sv-SE', { year: 'numeric', month: 'short', day: 'numeric' })
}
</script>

<template>
  <section class="section-padding bg-white dark:bg-dark">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
          Nyheter
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-400">
          Senaste uppdateringarna från Müller Mekaniska
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 mb-12">
        <article
          v-for="article in news"
          :key="article.id"
          class="group bg-gray-50 dark:bg-metal-gray rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-accent-orange dark:hover:border-accent-orange transition-all duration-300 hover:shadow-soft-lg flex flex-col"
        >
          <div
            class="h-2"
            :class="article.highlight ? 'bg-accent-orange' : 'bg-gray-300 dark:bg-gray-700 group-hover:bg-accent-orange transition-colors'"
          ></div>
          <div class="p-8 flex flex-col flex-grow">
            <div class="flex items-center justify-between mb-4">
              <span
                class="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                :class="article.highlight ? 'bg-accent-orange/10 text-accent-orange' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'"
              >
                {{ article.category }}
              </span>
              <span class="text-sm text-gray-500 dark:text-gray-400 font-medium">
                {{ formatDate(article.date) }}
              </span>
            </div>

            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-accent-orange transition-colors">
              {{ article.title }}
            </h3>

            <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 flex-grow">
              {{ article.excerpt }}
            </p>

            <RouterLink :to="article.link" class="inline-flex items-center text-accent-orange hover:text-accent-orange-dark font-bold text-sm transition-colors gap-2">
              Läs mer
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </RouterLink>
          </div>
        </article>
      </div>

      <div class="text-center">
        <RouterLink to="/nyheter" class="btn-outline text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-metal-gray text-lg py-3 px-6">
          Se alla nyheter
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
