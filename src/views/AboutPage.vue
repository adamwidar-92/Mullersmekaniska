<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="bg-dark text-white py-20">
      <div class="container-custom text-center">
        <h1 class="text-5xl font-bold mb-4">{{ t('nav.about') }}</h1>
        <p class="text-gray-400 max-w-2xl mx-auto">
          Möt företaget bakom precisionen
        </p>
      </div>
    </section>

    <!-- Content -->
    <section class="section-padding">
      <div class="container-custom max-w-3xl">
        <h2 class="text-3xl font-bold mb-6">Müller Mekaniska AB</h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
          Grundat 1970, Müller Mekaniska AB är ett framstående svenskt precisionsteknikföretag baserat i Borås. Vi specialiserar oss på tillverkning av högkvalitativa komponenter för formverktyg och plastindustrin.
        </p>

        <h3 class="text-2xl font-bold mt-10 mb-4">Vår historia</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Med över 50 års erfarenhet har vi utvecklat en djup kunskap och en dedikerad kompetens inom precisionsteknik. Från vårt start som ett litet familjeföretag till idag med ca 40 anställda och 7000 m² moderna fabrik.
        </p>

        <h3 class="text-2xl font-bold mt-10 mb-4">Vår mission: Quality by Innovation</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Vi tror på innovation och kontinuerlig förbättring. Genom att investera i de senaste teknologierna och hålla höga standarder för kvalitet, levererar vi komponenter som överträffar förväntningar.
        </p>

        <h3 class="text-2xl font-bold mt-10 mb-4">Global närvaro</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Vi levererar globalt och har etablerat oss som en pålitlig partner för företag runt om i världen inom formverktyg och plastindustrin.
        </p>

        <div class="mt-12">
          <RouterLink to="/kontakt" class="btn-primary">
            {{ t('common.contactUs') }}
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
