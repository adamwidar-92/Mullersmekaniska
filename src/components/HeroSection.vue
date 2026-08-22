<script setup lang="ts"></script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <img
        src="/bilder/Bildpålokalen.jpg"
        alt="Müller Mekaniska fabrik"
        class="w-full h-full object-cover"
      />
      <!-- Dark Overlay -->
      <div class="absolute inset-0 bg-black/60"></div>
    </div>

    <!-- Content -->
    <div class="relative container-custom py-32 max-w-5xl z-10">
      <div class="text-center space-y-10">
        <!-- Main Heading -->
        <h1 class="text-6xl md:text-8xl font-black text-white leading-tight tracking-tighter">
          Quality by Innovation
        </h1>

        <!-- Subheading -->
        <p class="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto font-light leading-relaxed">
          Högkvalitativa precisionkomponenter för formverktyg och plastindustrin
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-6 justify-center pt-8">
          <RouterLink to="/kontakt" class="btn-primary text-lg py-4 px-8">
            Begär offert
          </RouterLink>
          <RouterLink
            to="/produkter"
            class="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white bg-white/10 px-8 py-4 text-lg font-medium text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white hover:text-dark"
          >
            Utforska produkter
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
