<script setup lang="ts">
const allNews = [
  {
    id: 1,
    title: 'Ny AI-driven precisionsmaskin installerad',
    date: '2026-08-15',
    excerpt: 'Vi har investerat i en nyaste generationens precisionsutrustning för att öka vår produktionskapacitet och noggrannhet.',
    content: 'Med introduktionen av denna nya maskin kan vi nu erbjuda ännu högre precision och snabbare leveranstider för våra kunder.',
    image: '📰',
  },
  {
    id: 2,
    title: 'Expansion till svenska marknaden',
    date: '2026-08-10',
    excerpt: 'Glad att kunna presentera vår nya partnership med flera större svenska industriföretag.',
    content: 'Vi är glada över detta samarbete som stärker vår närvaro på den svenska marknaden och öppnar nya möjligheter.',
    image: '🌟',
  },
  {
    id: 3,
    title: 'Miljöcertifiering ISO 14001 erhållen',
    date: '2026-08-01',
    excerpt: 'Müller Mekaniska AB är nu certifierad för miljöledning enligt högsta standarder.',
    content: 'Vi är stolta över att ha erhållit ISO 14001-certifieringen, vilket bekräftar vårt engagemang för miljöansvar.',
    image: '🌱',
  },
  {
    id: 4,
    title: 'Utveckling av nya produktlinjer',
    date: '2026-07-20',
    excerpt: 'Vi introducerar nya specialiserade komponenter designade för framtida behov.',
    content: 'Genom att lyssna på våra kunders feedback har vi utvecklat innovativa lösningar som möter framtidens krav.',
    image: '🔬',
  },
]

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('sv-SE', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="bg-dark text-white py-20">
      <div class="container-custom text-center">
        <h1 class="text-5xl font-bold mb-4">Nyheter</h1>
        <p class="text-gray-400 max-w-2xl mx-auto">
          Läs om de senaste uppdateringarna från Müller Mekaniska AB
        </p>
      </div>
    </section>

    <!-- News List -->
    <section class="section-padding">
      <div class="container-custom max-w-3xl">
        <div class="space-y-8">
          <article
            v-for="article in allNews"
            :key="article.id"
            class="border-l-4 border-accent-orange pl-6 py-4 card-hover"
          >
            <div class="flex items-start justify-between mb-3">
              <h2 class="text-2xl font-bold flex-1">{{ article.title }}</h2>
              <div class="text-4xl ml-4">{{ article.image }}</div>
            </div>

            <div class="text-sm text-accent-orange font-medium mb-3">
              {{ formatDate(article.date) }}
            </div>

            <p class="text-gray-700 dark:text-gray-300 mb-4">
              {{ article.excerpt }}
            </p>

            <p class="text-gray-600 dark:text-gray-400 mb-4">
              {{ article.content }}
            </p>

            <a href="#" class="text-accent-orange hover:text-accent-orange-dark font-medium transition-colors">
              Läs full artikel →
            </a>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
