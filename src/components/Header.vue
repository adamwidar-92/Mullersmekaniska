<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const mobileMenuOpen = ref(false)
const scrolled = ref(false)
const isDark = ref(false)

const navLinks = [
  { label: 'Hem', to: '/' },
  { label: 'Om oss', to: '/om-oss' },
  { label: 'Produkter', to: '/produkter' },
  { label: 'Kompetenser', to: '/kompetenser' },
  { label: 'Nyheter', to: '/nyheter' },
  { label: 'Kontakt', to: '/kontakt' },
]

const onScroll = () => {
  scrolled.value = window.scrollY > 12
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark')
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => window.removeEventListener('scroll', onScroll))

watch(
  () => route.fullPath,
  () => {
    mobileMenuOpen.value = false
  },
)
</script>

<template>
  <header
    class="sticky top-0 z-50 bg-white/90 dark:bg-dark/90 backdrop-blur-md border-b border-gray-200/80 dark:border-gray-800/80 transition-shadow duration-300"
    :class="scrolled ? 'shadow-soft' : ''"
  >
    <div class="container-custom">
      <div class="flex items-center justify-between h-24 md:h-28 transition-all duration-300" :class="scrolled ? 'h-20 md:h-24' : ''">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center flex-shrink-0" aria-label="Müller Mekaniska – startsida">
          <img
            src="/bilder/logomullers.jpg"
            alt="Müller Mekaniska Logo"
            class="h-11 sm:h-14 w-auto object-contain"
          />
        </RouterLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-2" aria-label="Huvudnavigation">
          <RouterLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="relative px-5 py-2.5 text-sm font-semibold transition-colors duration-200"
            :class="[
              route.path === link.to
                ? 'text-accent-orange'
                : 'text-gray-700 dark:text-gray-200 hover:text-accent-orange dark:hover:text-accent-orange',
            ]"
          >
            {{ link.label }}
            <span
              class="absolute left-5 right-5 -bottom-0.5 h-0.5 rounded-full bg-accent-orange transition-transform duration-300 origin-left"
              :class="route.path === link.to ? 'scale-x-100' : 'scale-x-0'"
            ></span>
          </RouterLink>
        </nav>

        <!-- Right Actions -->
        <div class="flex items-center gap-3">
          <!-- Theme Toggle -->
          <button
            @click="toggleTheme"
            class="w-10 h-10 rounded-lg text-gray-700 dark:text-gray-200 hover:text-accent-orange dark:hover:text-accent-orange hover:bg-gray-100 dark:hover:bg-metal-gray flex items-center justify-center transition-colors"
            :title="isDark ? 'Byt till ljust tema' : 'Byt till mörkt tema'"
            :aria-label="isDark ? 'Byt till ljust tema' : 'Byt till mörkt tema'"
          >
            <svg v-if="isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>

          <!-- CTA Button -->
          <RouterLink
            to="/kontakt"
            class="hidden sm:inline-flex btn-primary text-sm !py-2.5"
          >
            Kontakta oss
          </RouterLink>

          <!-- Mobile Menu Button -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="lg:hidden w-10 h-10 rounded-lg hover:bg-gray-100 dark:hover:bg-metal-gray flex items-center justify-center transition-colors"
            :aria-expanded="mobileMenuOpen"
            aria-label="Öppna meny"
          >
            <svg class="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <transition name="slide-down">
        <nav v-show="mobileMenuOpen" class="lg:hidden pb-6 space-y-1 border-t border-gray-200 dark:border-gray-800 pt-4" aria-label="Mobilnavigation">
          <RouterLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="block px-4 py-2.5 text-base font-medium rounded-lg transition-colors"
            :class="[
              route.path === link.to
                ? 'text-accent-orange bg-accent-orange/5'
                : 'text-gray-800 dark:text-gray-200 hover:text-accent-orange hover:bg-gray-50 dark:hover:bg-metal-gray',
            ]"
            @click="mobileMenuOpen = false"
          >
            {{ link.label }}
          </RouterLink>
          <RouterLink
            to="/kontakt"
            class="block btn-primary text-center mt-3"
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
