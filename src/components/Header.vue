<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const mobileMenuOpen = ref(false)

const navLinks = [
  { label: 'Hem', to: '/' },
  { label: 'Om oss', to: '/om-oss' },
  { label: 'Produkter', to: '/produkter' },
  { label: 'Kompetenser', to: '/kompetenser' },
  { label: 'Nyheter', to: '/nyheter' },
  { label: 'Kontakt', to: '/kontakt' },
]
</script>

<template>
  <header class="sticky top-0 z-50 bg-white dark:bg-dark border-b border-gray-200 dark:border-gray-800 shadow-soft">
    <div class="container-custom">
      <div class="flex items-center justify-between h-24">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center group flex-shrink-0">
          <img
            src="/bilder/logomullers.jpg"
            alt="Müller Mekaniska Logo"
            class="h-12 sm:h-16 w-auto object-contain"
          />
        </RouterLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-8">
          <RouterLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="text-sm font-bold transition-colors duration-200"
            :class="[
              router.currentRoute.value.path === link.to
                ? 'text-accent-orange'
                : 'text-gray-950 dark:text-white hover:text-accent-orange dark:hover:text-accent-orange',
            ]"
          >
            {{ link.label }}
          </RouterLink>
        </nav>

        <!-- Right Actions -->
        <div class="flex items-center gap-6">
          <!-- Language Toggle -->
          <button
            class="px-3 py-2 text-sm font-bold text-gray-950 dark:text-white hover:text-accent-orange transition-colors duration-200 rounded-lg hover:bg-gray-50 dark:hover:bg-metal-gray"
            title="Switch language"
          >
            SV/EN
          </button>

          <!-- CTA Button -->
          <RouterLink
            to="/kontakt"
            class="hidden sm:inline-block btn-primary text-sm"
          >
            Kontakta oss
          </RouterLink>

          <!-- Mobile Menu Button -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-metal-gray rounded-lg transition-colors duration-200"
          >
            <svg class="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <transition name="slide-down">
        <nav v-show="mobileMenuOpen" class="lg:hidden pb-6 space-y-3 border-t border-gray-200 dark:border-gray-800 pt-4">
          <RouterLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="block px-4 py-2 text-base font-medium text-gray-800 dark:text-gray-200 hover:text-accent-orange hover:bg-gray-50 dark:hover:bg-metal-gray rounded-lg transition-colors duration-200"
            @click="mobileMenuOpen = false"
          >
            {{ link.label }}
          </RouterLink>
          <RouterLink
            to="/kontakt"
            class="block btn-primary text-center mt-4"
            @click="mobileMenuOpen = false"
          >
            Kontakta oss
          </RouterLink>
        </nav>
      </transition>
    </div>
  </header>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
