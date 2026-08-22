<script setup lang="ts">
import { ref } from 'vue'

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

const submitForm = async () => {
  if (validateForm()) {
    try {
      const response = await fetch('https://formspree.io/f/xwpddvqv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData.value),
      })

      if (response.ok) {
        submitted.value = true
        setTimeout(() => {
          formData.value = { name: '', company: '', email: '', phone: '', message: '' }
          submitted.value = false
        }, 4000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
    }
  }
}
</script>

<template>
  <div>
    <!-- Contact Section -->
    <section class="section-padding bg-gray-50 dark:bg-metal-gray">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h1 class="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Kontakta oss
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-400">
            Har du frågor eller vill diskutera ett projekt? Fyll i formuläret så återkommer vi inom 24 timmar.
          </p>
        </div>

        <div class="grid lg:grid-cols-5 gap-12 items-start">
          <!-- Contact Info -->
          <div class="lg:col-span-2 space-y-6">
            <div class="bg-white dark:bg-dark rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">Adress</h3>
              <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                Müller Mekaniska AB<br>
                Viaredsvägen 16<br>
                504 64 Borås, Sverige
              </p>
            </div>

            <div class="bg-white dark:bg-dark rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">Kontakt</h3>
              <div class="space-y-3">
                <a href="tel:+46334060" class="block text-gray-600 dark:text-gray-400 hover:text-accent-orange transition-colors">
                  +46 (0)33 40 60
                </a>
                <a href="mailto:info@muller.se" class="block text-gray-600 dark:text-gray-400 hover:text-accent-orange transition-colors">
                  info@muller.se
                </a>
              </div>
            </div>

            <div class="bg-accent-orange/5 dark:bg-accent-orange/10 border border-accent-orange/20 rounded-2xl p-6">
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Snabbaste vägen?</h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Ring eller maila oss direkt för snabbast svar.
              </p>
              <a href="mailto:info@muller.se" class="btn-primary w-full text-center">
                Skicka e-post
              </a>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="lg:col-span-3 bg-white dark:bg-dark rounded-2xl p-8 md:p-10 border border-gray-200 dark:border-gray-700">
            <form @submit.prevent="submitForm" class="space-y-6">
              <div v-if="submitted" class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-300 p-4 rounded-lg">
                ✓ Tack för ditt meddelande! Vi kontaktar dig snart.
              </div>

              <div class="grid sm:grid-cols-2 gap-6">
                <!-- Name -->
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Namn *</label>
                  <input
                    id="name"
                    v-model="formData.name"
                    type="text"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-metal-gray text-gray-900 dark:text-white focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none transition"
                    :class="{ 'border-red-500': formErrors.name }"
                  />
                  <p v-if="formErrors.name" class="text-red-500 text-sm mt-1">{{ formErrors.name }}</p>
                </div>

                <!-- Company -->
                <div>
                  <label for="company" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Företag</label>
                  <input
                    id="company"
                    v-model="formData.company"
                    type="text"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-metal-gray text-gray-900 dark:text-white focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none transition"
                  />
                </div>
              </div>

              <div class="grid sm:grid-cols-2 gap-6">
                <!-- Email -->
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">E-post *</label>
                  <input
                    id="email"
                    v-model="formData.email"
                    type="email"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-metal-gray text-gray-900 dark:text-white focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none transition"
                    :class="{ 'border-red-500': formErrors.email }"
                  />
                  <p v-if="formErrors.email" class="text-red-500 text-sm mt-1">{{ formErrors.email }}</p>
                </div>

                <!-- Phone -->
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Telefon</label>
                  <input
                    id="phone"
                    v-model="formData.phone"
                    type="tel"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-metal-gray text-gray-900 dark:text-white focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none transition"
                  />
                </div>
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Meddelande *</label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  rows="5"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-metal-gray text-gray-900 dark:text-white focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none transition resize-none"
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
      </div>
    </section>
  </div>
</template>

<style scoped></style>
