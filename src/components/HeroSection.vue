<script setup lang="ts">
import heroImg from '../bilder/mullersmekaniskalokalen.jpg'
</script>

<template>
  <section class="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <img
        :src="heroImg"
        alt="Müller Mekaniskas anläggning i Borås"
        class="w-full h-full object-cover"
      />
      <!-- Layered overlays for depth and readability -->
      <div class="absolute inset-0 bg-gradient-to-b from-dark/85 via-dark/60 to-dark/90"></div>
      <div class="absolute inset-0 bg-accent-orange/10 mix-blend-multiply"></div>
    </div>

    <!-- Content -->
    <div class="relative container-custom py-28 max-w-5xl z-10">
      <div class="text-center space-y-8">
        <!-- Eyebrow -->
        <div class="animate-fade-in">
          <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white/90 text-xs font-bold uppercase tracking-widest">
            <span class="w-1.5 h-1.5 rounded-full bg-accent-orange"></span>
            Sedan 1970 · Borås, Sverige
          </span>
        </div>

        <!-- Main Heading -->
        <h1 class="text-5xl sm:text-6xl md:text-8xl font-extrabold text-white leading-[1.05] tracking-tight animate-slide-up" style="animation-delay: 100ms">
          Quality by<br class="sm:hidden" /> Innovation
        </h1>

        <!-- Subheading -->
        <p class="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed animate-slide-up" style="animation-delay: 200ms">
          Högkvalitativa precisionkomponenter för formverktyg och plastindustrin — med noggrannhet i varje detalj.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-slide-up" style="animation-delay: 300ms">
          <RouterLink to="/kontakt" class="btn-primary text-base px-8 py-4">
            Begär offert
          </RouterLink>
          <RouterLink
            to="/produkter"
            class="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white hover:text-dark hover:border-white"
          >
            Utforska produkter
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-white/60">
      <div class="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
        <div class="w-1.5 h-1.5 rounded-full bg-accent-orange scroll-indicator-dot"></div>
      </div>
      <span class="text-[10px] font-bold uppercase tracking-widest">Scrolla</span>
    </div>
  </section>
</template>
