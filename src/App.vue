<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

const router = useRouter()
const { locale } = useI18n()
const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

const toggleLanguage = () => {
  locale.value = locale.value === 'sv' ? 'en' : 'sv'
}
</script>

<template>
  <div class="flex flex-col min-h-screen bg-white dark:bg-dark text-gray-900 dark:text-gray-50">
    <Header :isDark="isDark" @toggle-theme="toggleTheme" @toggle-language="toggleLanguage" />

    <main class="flex-grow">
      <RouterView />
    </main>

    <Footer />
  </div>
</template>

<style scoped></style>
