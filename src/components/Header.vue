<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

defineProps<{
  isDark: boolean
}>()

const emit = defineEmits<{
  'toggle-theme': []
  'toggle-language': []
}>()

const router = useRouter()
const { t } = useI18n()
const mobileMenuOpen = ref(false)

const navLinks = [
  { label: t('nav.home'), to: '/' },
  { label: t('nav.about'), to: '/om-oss' },
  { label: t('nav.products'), to: '/produkter' },
  { label: t('nav.competencies'), to: '/kompetenser' },
  { label: t('nav.news'), to: '/nyheter' },
  { label: t('nav.contact'), to: '/kontakt' },
]
</script>

<template>
  <header class="sticky top-0 z-50 bg-white dark:bg-dark border-b border-gray-200 dark:border-metal-gray shadow-soft">
    <div class="container-custom">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center space-x-2 group">
          <div class="w-10 h-10 bg-accent-orange rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:bg-accent-orange-dark transition-colors">
            M
          </div>
          <div class="hidden sm:block">
            <div class="text-lg font-bold text-gray-900 dark:text-white">Müller</div>
            <div class="text-xs text-gray-600 dark:text-gray-400">Mekaniska</div>
          </div>
        </RouterLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-1">
          <RouterLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-accent-orange dark:hover:text-accent-orange transition-colors"
            :class="{ 'text-accent-orange': router.currentRoute.value.path === link.to }"
          >
            {{ link.label }}
          </RouterLink>
        </nav>

        <!-- Right Actions -->
        <div class="flex items-center space-x-4">
          <!-- Language Toggle -->
          <button
            @click="emit('toggle-language')"
            class="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-accent-orange transition-colors"
            title="Switch language"
          >
            SV/EN
          </button>

          <!-- Theme Toggle -->
          <button
            @click="emit('toggle-theme')"
            class="p-2 hover:bg-gray-100 dark:hover:bg-metal-gray rounded-lg transition-colors"
            :title="isDark ? 'Light mode' : 'Dark mode'"
          >
            <svg v-if="isDark" class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 1.78a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zm2.828 2.828a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zm2.828 2.828a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zM10 7a3 3 0 100 6 3 3 0 000-6zm-4.22-2.78a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zM2.22 10.78a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zM2.22 13.78a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
            <svg v-else class="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </button>

          <!-- CTA Button -->
          <RouterLink
            to="/kontakt"
            class="hidden sm:inline-block btn-primary"
          >
            {{ t('common.contactUs') }}
          </RouterLink>

          <!-- Mobile Menu Button -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-metal-gray rounded-lg transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <transition name="slide-down">
        <nav v-show="mobileMenuOpen" class="md:hidden pb-4 space-y-2">
          <RouterLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="block px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-accent-orange hover:bg-gray-50 dark:hover:bg-metal-gray rounded-lg transition-colors"
            @click="mobileMenuOpen = false"
          >
            {{ link.label }}
          </RouterLink>
          <RouterLink
            to="/kontakt"
            class="block btn-primary text-center mt-4"
            @click="mobileMenuOpen = false"
          >
            {{ t('common.contactUs') }}
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
