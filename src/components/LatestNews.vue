<script setup lang="ts">
const news = [
  {
    id: 1,
    title: 'Ny AI-driven precisionsmaskin installerad',
    date: '2026-08-15',
    excerpt: 'Vi har investerat i en nyaste generationens precisionsutrustning för att öka vår produktionskapacitet.',
    image: '📰',
  },
  {
    id: 2,
    title: 'Expansion till svenska marknaden',
    date: '2026-08-10',
    excerpt: 'Glad att kunna presentera vår nya partnership med flera större svenska industriföretag.',
    image: '🌟',
  },
  {
    id: 3,
    title: 'Miljöcertifiering ISO 14001 erhållen',
    date: '2026-08-01',
    excerpt: 'Müller Mekaniska AB är nu certifierad för miljöledning enligt högsta standarder.',
    image: '🌱',
  },
]

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('sv-SE', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>

<template>
  <section class="section-padding bg-white dark:bg-dark">
    <div class="container-custom">
      <div class="text-center mb-12 animate-fade-in">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Senaste nyheter</h2>
        <p class="text-lg text-gray-600 dark:text-gray-400">
          Uppdateringar från Müller Mekaniska
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <article
          v-for="article in news"
          :key="article.id"
          class="bg-gray-50 dark:bg-metal-gray rounded-lg overflow-hidden card-hover"
        >
          <div class="aspect-video bg-gradient-to-br from-accent-orange to-dark flex items-center justify-center text-6xl">
            {{ article.image }}
          </div>

          <div class="p-6">
            <div class="text-sm text-accent-orange font-medium mb-2">
              {{ formatDate(article.date) }}
            </div>
            <h3 class="text-lg font-bold mb-2">{{ article.title }}</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
              {{ article.excerpt }}
            </p>

            <a href="#" class="text-accent-orange hover:text-accent-orange-dark font-medium text-sm transition-colors">
              Läs mer →
            </a>
          </div>
        </article>
      </div>

      <div class="text-center mt-12">
        <RouterLink to="/nyheter" class="btn-outline">
          Se alla nyheter
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
