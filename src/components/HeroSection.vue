<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center bg-dark overflow-hidden">
    <!-- Background gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-dark via-metal-gray to-dark opacity-50"></div>

    <!-- Animated background elements -->
    <div class="absolute top-20 right-20 w-96 h-96 bg-accent-orange opacity-5 rounded-full filter blur-3xl animate-pulse"></div>
    <div class="absolute bottom-20 left-10 w-96 h-96 bg-accent-orange opacity-5 rounded-full filter blur-3xl animate-pulse" style="animation-delay: 2s;"></div>

    <!-- Content -->
    <div class="relative container-custom py-20">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Main Slogan -->
        <div class="animate-fade-in">
          <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {{ t('hero.slogan') }}
          </h1>

          <!-- Tagline -->
          <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {{ t('hero.tagline') }}
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <RouterLink to="/kontakt" class="btn-primary">
              {{ t('common.requestQuote') }}
            </RouterLink>
            <RouterLink to="/produkter" class="btn-outline text-white border-white hover:bg-white hover:text-dark">
              {{ t('nav.products') }}
            </RouterLink>
          </div>

          <!-- Scroll indicator -->
          <div class="mt-20 flex justify-center animate-bounce">
            <svg class="w-6 h-6 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
