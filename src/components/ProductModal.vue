<script setup lang="ts">
import { watch } from 'vue'

export interface ProductItem {
  id: number
  name: string
  category?: string
  description: string
  features: string[]
  image: string
}

const props = defineProps<{
  modelValue: boolean
  product: ProductItem | null
}>()

const emit = defineEmits<{ 'update:modelValue': [value: boolean] }>()

const close = () => emit('update:modelValue', false)

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') close()
}

watch(
  () => props.modelValue,
  (open) => {
    if (open) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKeydown)
    } else {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeydown)
    }
  },
)
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="modelValue && product"
        class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        role="dialog"
        aria-modal="true"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-dark/80 backdrop-blur-sm" @click="close"></div>

        <!-- Panel -->
        <div class="relative bg-white dark:bg-metal-gray rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
          <button
            @click="close"
            class="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-dark/50 hover:bg-accent-orange text-white flex items-center justify-center transition-colors"
            aria-label="Stäng"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div class="grid md:grid-cols-2">
            <!-- Image -->
            <div class="relative bg-gray-100 dark:bg-dark min-h-64 md:min-h-full">
              <img :src="product.image" :alt="product.name" class="absolute inset-0 w-full h-full object-cover" />
            </div>

            <!-- Content -->
            <div class="p-8 md:p-10">
              <span v-if="product.category" class="inline-block px-3 py-1 rounded-full bg-accent-orange/10 text-accent-orange text-xs font-bold uppercase tracking-wider">
                {{ product.category }}
              </span>
              <h3 class="mt-3 text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
                {{ product.name }}
              </h3>
              <p class="mt-2 text-accent-orange font-semibold">{{ product.description }}</p>

              <ul class="mt-6 space-y-3">
                <li v-for="(feature, idx) in product.features" :key="idx" class="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <svg class="w-5 h-5 text-accent-orange flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-sm leading-relaxed">{{ feature }}</span>
                </li>
              </ul>

              <div class="mt-8 flex flex-wrap gap-3">
                <RouterLink to="/kontakt" class="btn-primary" @click="close">Begär offert</RouterLink>
                <button @click="close" class="btn-outline">Stäng</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}
.modal-enter-active .relative,
.modal-leave-active .relative {
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.25s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .relative,
.modal-leave-to .relative {
  transform: translateY(24px) scale(0.97);
}
</style>
