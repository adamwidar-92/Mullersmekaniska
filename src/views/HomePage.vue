<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue'
import TrustSignals from '../components/TrustSignals.vue'
import ProductCategories from '../components/ProductCategories.vue'
import LatestNews from '../components/LatestNews.vue'
import CTASection from '../components/CTASection.vue'
import aboutBg from '../bilder/FärgOrange.png'
</script>

<template>
  <div class="bg-white dark:bg-dark">
    <!-- Hero Section -->
    <HeroSection />

    <!-- Trust Signals / Stats -->
    <TrustSignals />

    <!-- About Intro -->
    <section class="min-h-[70vh] flex items-center justify-center section-padding relative overflow-hidden">
      <!-- Background Image -->
      <img
        :src="aboutBg"
        alt=""
        class="absolute inset-0 w-full h-full object-cover"
      />
      <!-- Dark Overlay -->
      <div class="absolute inset-0 bg-black/70"></div>

      <div class="container-custom relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            Precision & Innovation
          </h2>
          <p class="text-lg md:text-xl text-white mb-10 leading-relaxed font-normal">
            Müller Mekaniska AB är ett svenskt precisionsteknikföretag baserat i Borås som specialiserar sig på högkvalitativa komponenter för formverktyg och plastindustrin. Med över 50 års erfarenhet levererar vi globalt.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <RouterLink to="/om-oss" class="btn-primary">
              Läs mer om oss
            </RouterLink>
            <RouterLink to="/kontakt" class="btn-secondary">
              Kontakta oss
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Categories -->
    <ProductCategories />

    <!-- Latest News -->
    <LatestNews />

    <!-- CTA Section -->
    <CTASection />
  </div>
</template>

<style scoped></style>
