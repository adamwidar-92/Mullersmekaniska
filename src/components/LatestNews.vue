<script setup lang="ts">
import { ref, watch } from 'vue'
import SectionHeader from './SectionHeader.vue'
import { news } from '../data/news'
import type { NewsItem } from '../data/news'

const modalOpen = ref(false)
const selectedArticle = ref<NewsItem | null>(null)

const openArticle = (article: NewsItem) => {
  selectedArticle.value = article
  modalOpen.value = true
}

const closeModal = () => (modalOpen.value = false)

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') closeModal()
}

watch(modalOpen, (open) => {
  if (open) {
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeydown)
  } else {
    document.body.style.overflow = ''
    window.removeEventListener('keydown', onKeydown)
  }
})

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('sv-SE', { year: 'numeric', month: 'short', day: 'numeric' })
}
</script>

<template>
  <section class="section-padding bg-white dark:bg-dark">
    <div class="container-custom">
      <SectionHeader
        v-reveal
        eyebrow="Aktuellt"
        title="Senaste nyheterna"
        lead="Håll dig uppdaterad om vad som händer på Müller Mekaniska."
      />

      <div class="mt-16 grid md:grid-cols-3 gap-8 md:gap-10">
        <article
          v-for="(article, index) in news"
          :key="article.id"
          v-reveal="index * 100"
          class="group flex flex-col bg-surface dark:bg-metal-gray rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 card-hover hover:border-accent-orange dark:hover:border-accent-orange cursor-pointer"
          @click="openArticle(article)"
        >
          <div
            class="h-1.5"
            :class="article.highlight ? 'bg-accent-orange' : 'bg-gray-300 dark:bg-gray-700 group-hover:bg-accent-orange transition-colors'"
          ></div>
          <div class="p-7 flex flex-col flex-grow">
            <div class="flex items-center justify-between gap-3 mb-4">
              <span
                class="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                :class="article.highlight ? 'bg-accent-orange/10 text-accent-orange' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'"
              >
                {{ article.category }}
              </span>
              <time class="text-sm text-gray-500 dark:text-gray-400 font-medium">
                {{ formatDate(article.date) }}
              </time>
            </div>

            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-accent-orange transition-colors">
              {{ article.title }}
            </h3>

            <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 flex-grow text-sm">
              {{ article.excerpt }}
            </p>

            <span class="inline-flex items-center gap-2 text-accent-orange font-bold text-sm">
              Läs mer
              <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </article>
      </div>

      <div v-reveal class="mt-14 text-center">
        <RouterLink to="/nyheter" class="btn-outline">
          Se alla nyheter
        </RouterLink>
      </div>
    </div>

    <!-- Article modal -->
    <Teleport to="body">
      <Transition name="article-modal">
        <div
          v-if="modalOpen && selectedArticle"
          class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <div class="absolute inset-0 bg-dark/80 backdrop-blur-sm" @click="closeModal"></div>
          <article class="relative bg-white dark:bg-metal-gray rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto p-8 md:p-12">
            <button
              @click="modalOpen = false"
              class="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 dark:bg-dark hover:bg-accent-orange text-gray-700 dark:text-gray-200 hover:text-white flex items-center justify-center transition-colors"
              aria-label="Stäng"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div class="flex items-center gap-3 mb-5">
              <span
                class="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                :class="selectedArticle.highlight ? 'bg-accent-orange/10 text-accent-orange' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'"
              >
                {{ selectedArticle.category }}
              </span>
              <time class="text-sm text-gray-500 dark:text-gray-400 font-medium">
                {{ formatDate(selectedArticle.date) }}
              </time>
            </div>

            <h3 class="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-6">
              {{ selectedArticle.title }}
            </h3>

            <p
              v-for="(paragraph, i) in selectedArticle.content.split('\n\n')"
              :key="i"
              class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 whitespace-pre-line"
            >
              {{ paragraph }}
            </p>
          </article>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
.article-modal-enter-active,
.article-modal-leave-active {
  transition: opacity 0.25s ease;
}
.article-modal-enter-active article,
.article-modal-leave-active article {
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.25s ease;
}
.article-modal-enter-from,
.article-modal-leave-to {
  opacity: 0;
}
.article-modal-enter-from article,
.article-modal-leave-to article {
  transform: translateY(24px) scale(0.97);
}
</style>
