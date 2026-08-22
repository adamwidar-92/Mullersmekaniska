<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="section-padding bg-gradient-to-r from-dark to-metal-gray relative overflow-hidden">
    <!-- Background element -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-accent-orange opacity-10 rounded-full filter blur-3xl"></div>

    <div class="relative container-custom text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
        Redo att ta nästa steg?
      </h2>
      <p class="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
        Kontakta oss idag för att diskutera dina behov och hur vi kan hjälpa din verksamhet.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <RouterLink to="/kontakt" class="btn-primary">
          {{ t('common.requestQuote') }}
        </RouterLink>
        <a href="tel:+46" class="btn-outline text-white border-white hover:bg-white hover:text-dark">
          Ring oss direkt
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
