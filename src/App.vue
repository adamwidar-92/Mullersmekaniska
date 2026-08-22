<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen bg-white dark:bg-dark text-gray-900 dark:text-gray-50">
    <Header />

    <main class="flex-grow">
      <RouterView />
    </main>

    <Footer />
  </div>
</template>

<style scoped></style>
