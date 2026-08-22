<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const formData = ref({
  name: '',
  company: '',
  email: '',
  phone: '',
  message: '',
})

const submitted = ref(false)
const formErrors = ref<Record<string, string>>({})

const validateForm = () => {
  formErrors.value = {}

  if (!formData.value.name.trim()) formErrors.value.name = 'Namn är obligatoriskt'
  if (!formData.value.email.trim()) formErrors.value.email = 'E-post är obligatorisk'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) formErrors.value.email = 'Ogiltig e-postadress'
  if (!formData.value.message.trim()) formErrors.value.message = 'Meddelande är obligatoriskt'

  return Object.keys(formErrors.value).length === 0
}

const submitForm = () => {
  if (validateForm()) {
    // Simulate form submission
    submitted.value = true
    setTimeout(() => {
      formData.value = { name: '', company: '', email: '', phone: '', message: '' }
      submitted.value = false
    }, 3000)
  }
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="bg-dark text-white py-20">
      <div class="container-custom text-center">
        <h1 class="text-5xl font-bold mb-4">{{ t('nav.contact') }}</h1>
        <p class="text-gray-400 max-w-2xl mx-auto">
          Kontakta oss för att diskutera din projekt eller begära offert
        </p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="grid md:grid-cols-3 gap-12 mb-16">
          <!-- Contact Info -->
          <div>
            <h3 class="text-xl font-bold mb-6">Kontaktinformation</h3>

            <div class="space-y-6">
              <!-- Address -->
              <div>
                <h4 class="font-semibold mb-2 flex items-center space-x-2">
                  <svg class="w-5 h-5 text-accent-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                  </svg>
                  <span>Adress</span>
                </h4>
                <p class="text-gray-600 dark:text-gray-400">
                  {{ t('footer.address') }}
                </p>
              </div>

              <!-- Phone -->
              <div>
                <h4 class="font-semibold mb-2 flex items-center space-x-2">
                  <svg class="w-5 h-5 text-accent-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.346.897 1.17 2.045 2.468 3.343s2.447 2.122 3.343 2.468l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 4 14.18 4 9.5V5a1 1 0 011-1h2.153Z" />
                  </svg>
                  <span>Telefon</span>
                </h4>
                <a href="tel:+46" class="text-accent-orange hover:text-accent-orange-dark transition-colors">
                  +46 (0)
                </a>
              </div>

              <!-- Email -->
              <div>
                <h4 class="font-semibold mb-2 flex items-center space-x-2">
                  <svg class="w-5 h-5 text-accent-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>E-post</span>
                </h4>
                <a href="mailto:info@muller.se" class="text-accent-orange hover:text-accent-orange-dark transition-colors">
                  info@muller.se
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="md:col-span-2">
            <form @submit.prevent="submitForm" class="space-y-6">
              <div v-if="submitted" class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-300 p-4 rounded-lg">
                ✓ Tack för ditt meddelande! Vi kontaktar dig snart.
              </div>

              <!-- Name -->
              <div>
                <label for="name" class="block text-sm font-medium mb-2">Namn *</label>
                <input
                  id="name"
                  v-model="formData.name"
                  type="text"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-metal-gray bg-white dark:bg-metal-gray text-gray-900 dark:text-white focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none transition"
                  :class="{ 'border-red-500': formErrors.name }"
                />
                <p v-if="formErrors.name" class="text-red-500 text-sm mt-1">{{ formErrors.name }}</p>
              </div>

              <!-- Company -->
              <div>
                <label for="company" class="block text-sm font-medium mb-2">Företag</label>
                <input
                  id="company"
                  v-model="formData.company"
                  type="text"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-metal-gray bg-white dark:bg-metal-gray text-gray-900 dark:text-white focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none transition"
                />
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="block text-sm font-medium mb-2">E-post *</label>
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-metal-gray bg-white dark:bg-metal-gray text-gray-900 dark:text-white focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none transition"
                  :class="{ 'border-red-500': formErrors.email }"
                />
                <p v-if="formErrors.email" class="text-red-500 text-sm mt-1">{{ formErrors.email }}</p>
              </div>

              <!-- Phone -->
              <div>
                <label for="phone" class="block text-sm font-medium mb-2">Telefon</label>
                <input
                  id="phone"
                  v-model="formData.phone"
                  type="tel"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-metal-gray bg-white dark:bg-metal-gray text-gray-900 dark:text-white focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none transition"
                />
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block text-sm font-medium mb-2">Meddelande *</label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  rows="5"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-metal-gray bg-white dark:bg-metal-gray text-gray-900 dark:text-white focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none transition resize-none"
                  :class="{ 'border-red-500': formErrors.message }"
                ></textarea>
                <p v-if="formErrors.message" class="text-red-500 text-sm mt-1">{{ formErrors.message }}</p>
              </div>

              <button type="submit" class="btn-primary w-full">
                Skicka meddelande
              </button>
            </form>
          </div>
        </div>

        <!-- Map Placeholder -->
        <div class="mt-16 rounded-lg overflow-hidden shadow-soft h-96">
          <div class="w-full h-full bg-gradient-to-br from-gray-200 dark:from-metal-gray to-gray-300 dark:to-gray-700 flex items-center justify-center">
            <div class="text-center">
              <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p class="text-gray-600 dark:text-gray-400">Google Maps integation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
