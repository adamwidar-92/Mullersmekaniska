<script setup lang="ts"></script>

<template>
  <section class="section-padding bg-dark relative overflow-hidden">
    <!-- Background accent -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-accent-orange opacity-15 rounded-full filter blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-72 h-72 bg-accent-orange opacity-10 rounded-full filter blur-3xl"></div>

    <!-- Content -->
    <div class="relative container-custom text-center max-w-4xl mx-auto">
      <!-- Heading -->
      <h2 class="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
        Redo att börja?
      </h2>

      <!-- Subheading -->
      <p class="">
        Kontakta oss idag för en kostnadsfri konsultation. Vårt team hjälper dig att hitta rätt precisionslösning för dina behov.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-6 justify-center">
        <RouterLink to="/kontakt" class="btn-primary text-lg py-4 px-10">
          Begär offert
        </RouterLink>
        <a
          href="tel:+46334060"
          class="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white bg-white/10 px-10 py-4 text-lg font-bold text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white hover:text-dark"
        >
          Ring oss: +46 (0)33 40 60
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
