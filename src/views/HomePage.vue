<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue'
import TrustSignals from '../components/TrustSignals.vue'
import ProductCategories from '../components/ProductCategories.vue'
import GallerySection from '../components/GallerySection.vue'
import LatestNews from '../components/LatestNews.vue'
import CTASection from '../components/CTASection.vue'

import workerImg from '../bilder/bildpåarbetare.jpg'
import cncImg from '../bilder/precisioncnc.jpeg'
</script>

<template>
  <div>
    <!-- Hero Section -->
    <HeroSection />

    <!-- Trust Signals / Stats -->
    <TrustSignals />

    <!-- About Intro -->
    <section class="section-padding bg-white dark:bg-dark">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div v-reveal>
            <span class="eyebrow">Om oss</span>
            <h2 class="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Svensk precisionsteknik i världsklass
            </h2>
            <p class="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Müller Mekaniska AB är ett svenskt precisionsteknikföretag baserat i Borås som specialiserar sig på högkvalitativa komponenter för formverktyg och plastindustrin. Med över 50 års erfarenhet levererar vi globalt.
            </p>
            <div class="mt-8 flex flex-col sm:flex-row gap-4">
              <RouterLink to="/om-oss" class="btn-primary">
                Läs mer om oss
              </RouterLink>
              <RouterLink to="/kompetenser" class="btn-outline">
                Våra kompetenser
              </RouterLink>
            </div>
          </div>

          <!-- Image composition -->
          <div v-reveal="150" class="relative">
            <div class="rounded-2xl overflow-hidden shadow-soft-lg">
              <img :src="workerImg" alt="Medarbetare på Müller Mekaniska" loading="lazy" class="w-full h-80 lg:h-96 object-cover" />
            </div>
            <div class="absolute -bottom-8 -left-4 md:-left-8 w-40 md:w-52 rounded-2xl overflow-hidden border-4 border-white dark:border-dark shadow-soft-lg animate-float">
              <img :src="cncImg" alt="CNC-maskin" loading="lazy" class="w-full h-32 md:h-40 object-cover" />
            </div>
            <div class="absolute -top-5 -right-3 md:-right-5 bg-accent-orange text-white rounded-2xl px-5 py-4 shadow-glow">
              <div class="text-2xl font-extrabold leading-none">50+</div>
              <div class="text-xs font-semibold uppercase tracking-wider mt-1">År av precision</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Categories -->
    <ProductCategories />

    <!-- Gallery -->
    <GallerySection />

    <!-- Latest News -->
    <LatestNews />

    <!-- CTA Section -->
    <CTASection />
  </div>
</template>
