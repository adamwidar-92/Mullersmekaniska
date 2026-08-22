<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import HeroSection from '../components/HeroSection.vue'
import TrustSignals from '../components/TrustSignals.vue'
import ProductCategories from '../components/ProductCategories.vue'
import LatestNews from '../components/LatestNews.vue'
import CTASection from '../components/CTASection.vue'

const { t } = useI18n()
</script>

<template>
  <div>
    <!-- Hero Section -->
    <HeroSection />

    <!-- About Intro -->
    <section class="section-padding bg-gray-50 dark:bg-metal-gray">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Precision & Innovation Since 1970
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-4">
            Müller Mekaniska AB är ett svenskt precisionsteknikföretag baserat i Borås som specialiserar sig på högkvalitativa komponenter för formverktyg och plastindustrin. Med över 50 års erfarenhet levererar vi globalt.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <RouterLink to="/om-oss" class="btn-primary">
              {{ t('common.learnMore') }}
            </RouterLink>
            <RouterLink to="/kontakt" class="btn-secondary">
              {{ t('common.contactUs') }}
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust Signals -->
    <TrustSignals />

    <!-- Product Categories -->
    <ProductCategories />

    <!-- Latest News -->
    <LatestNews />

    <!-- CTA Section -->
    <CTASection />
  </div>
</template>

<style scoped></style>
