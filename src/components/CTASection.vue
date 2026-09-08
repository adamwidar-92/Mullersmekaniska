<script setup lang="ts">
import ctaImg from '../bilder/mullersbild2.jpg'
</script>

<template>
  <section class="relative overflow-hidden bg-dark">
    <!-- Background -->
    <div class="absolute inset-0">
      <img :src="ctaImg" alt="" class="w-full h-full object-cover opacity-25" />
      <div class="absolute inset-0 bg-gradient-to-b from-dark via-dark/80 to-dark"></div>
    </div>
    <div class="absolute -top-24 right-0 w-96 h-96 bg-accent-orange/20 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute -bottom-24 left-0 w-96 h-96 bg-accent-orange/10 rounded-full blur-3xl pointer-events-none"></div>

    <!-- Content -->
    <div class="container-custom section-padding relative z-10 text-center max-w-4xl mx-auto">
      <span v-reveal class="eyebrow eyebrow-centered">Kom igång</span>
      <h2 v-reveal="100" class="mt-5 text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
        Redo att börja?
      </h2>
      <p v-reveal="200" class="mt-8 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto text-center">
        Kontakta oss idag för en kostnadsfri konsultation. Vårt team hjälper dig att hitta rätt precisionslösning för dina behov.
      </p>

      <div v-reveal="300" class="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
        <RouterLink to="/kontakt" class="btn-primary text-base px-8 py-4">
          Begär offert
        </RouterLink>
        <a
          href="tel:+46334060"
          class="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white hover:text-dark hover:border-white"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          +46 (0)33 40 60
        </a>
      </div>
    </div>
  </section>
</template>
