<script setup lang="ts">
import PageHero from '../components/PageHero.vue'
</script>

<template>
  <div>
    <PageHero
      eyebrow="Felkod 404"
      title="Sidan hittades inte"
      lead="Sidan du letar efter finns inte eller har flyttats. Använd navigeringen nedan för att hitta rätt."
    />

    <section class="section-padding bg-surface dark:bg-metal-gray/40">
      <div class="container-custom max-w-2xl text-center">
        <div v-reveal class="flex flex-col sm:flex-row gap-4 justify-center">
          <RouterLink to="/" class="btn-primary">Gå till startsidan</RouterLink>
          <RouterLink to="/kontakt" class="btn-outline">Kontakta oss</RouterLink>
        </div>
        <div v-reveal="150" class="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <RouterLink to="/om-oss" class="bg-white dark:bg-dark rounded-xl p-5 border border-gray-200 dark:border-gray-800 card-hover hover:border-accent-orange dark:hover:border-accent-orange text-sm font-bold text-gray-900 dark:text-white">Om oss</RouterLink>
          <RouterLink to="/produkter" class="bg-white dark:bg-dark rounded-xl p-5 border border-gray-200 dark:border-gray-800 card-hover hover:border-accent-orange dark:hover:border-accent-orange text-sm font-bold text-gray-900 dark:text-white">Produkter</RouterLink>
          <RouterLink to="/kompetenser" class="bg-white dark:bg-dark rounded-xl p-5 border border-gray-200 dark:border-gray-800 card-hover hover:border-accent-orange dark:hover:border-accent-orange text-sm font-bold text-gray-900 dark:text-white">Kompetenser</RouterLink>
          <RouterLink to="/nyheter" class="bg-white dark:bg-dark rounded-xl p-5 border border-gray-200 dark:border-gray-800 card-hover hover:border-accent-orange dark:hover:border-accent-orange text-sm font-bold text-gray-900 dark:text-white">Nyheter</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
