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
    <!-- Hero Section -->
    <section class="relative min-h-[50vh] flex items-center justify-center overflow-hidden section-padding bg-dark">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-accent-orange opacity-5 rounded-full filter blur-3xl"></div>
      </div>
      <div class="container-custom relative z-10 text-center max-w-4xl">
        <span class="bg-accent-orange text-dark px-4 py-2 rounded-lg font-bold text-sm uppercase tracking-widest inline-block mb-6">
          Snabbt & enkelt
        </span>
        <h1 class="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
          Kontakta oss
        </h1>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Har du frågor eller vill diskutera ett projekt? Vi svarar gärna på dina frågor inom 24 timmar.
        </p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="section-padding bg-white dark:bg-dark">
      <div class="container-custom">
        <div class="grid lg:grid-cols-5 gap-12 items-start">
          <!-- Contact Info -->
          <div class="lg:col-span-2 space-y-6">
            <!-- Address -->
            <div class="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-metal-gray dark:to-dark rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-accent-orange transition-all">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-accent-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Adress</h3>
                  <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Müller Mekaniska AB<br>
                    Viaredsvägen 16<br>
                    504 64 Borås, Sverige
                  </p>
                </div>
              </div>
            </div>

            <!-- Contact Info -->
            <div class="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-metal-gray dark:to-dark rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-accent-orange transition-all">
              <div class="flex items-start gap-4 mb-6">
                <div class="w-12 h-12 bg-accent-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">Telefon</h3>
                  <a href="tel:+46334060" class="text-accent-orange hover:text-accent-orange/80 transition-colors font-bold text-lg">
                    +46 (0)33 40 60
                  </a>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-accent-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">E-post</h3>
                  <a href="mailto:info@muller.se" class="text-accent-orange hover:text-accent-orange/80 transition-colors font-bold text-lg">
                    info@muller.se
                  </a>
                </div>
              </div>
            </div>

            <!-- Quick CTA -->
            <div class="bg-accent-orange/5 dark:bg-accent-orange/10 border border-accent-orange/20 rounded-2xl p-8">
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">Ringde omedelbar?</h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Vi svarar oftast inom någon minut på vardagar.
              </p>
              <a href="tel:+46334060" class="btn-primary w-full text-center">
                Ring oss nu
              </a>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="lg:col-span-3 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-metal-gray dark:to-dark rounded-2xl p-8 md:p-10 border border-gray-200 dark:border-gray-700">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Skicka ett meddelande
            </h2>
            <form @submit.prevent="submitForm" class="space-y-6">
              <div v-if="submitted" class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-300 p-4 rounded-lg flex items-start gap-3">
                <svg class="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <div>
                  <h4 class="font-bold">Meddelande skickat!</h4>
                  <p class="text-sm">Tack för ditt meddelande. Vi kontaktar dig snart.</p>
                </div>
              </div>

              <div class="grid sm:grid-cols-2 gap-6">
                <!-- Name -->
                <div>
                  <label for="name" class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Namn *</label>
                  <input
                    id="name"
                    v-model="formData.name"
                    type="text"
                    placeholder="Ditt namn"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none transition"
                    :class="{ 'border-red-500': formErrors.name }"
                  />
                  <p v-if="formErrors.name" class="text-red-500 text-sm mt-1">{{ formErrors.name }}</p>
                </div>

                <!-- Company -->
                <div>
                  <label for="company" class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Företag</label>
                  <input
                    id="company"
                    v-model="formData.company"
                    type="text"
                    placeholder="Företagsnamn"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none transition"
                  />
                </div>
              </div>

              <div class="grid sm:grid-cols-2 gap-6">
                <!-- Email -->
                <div>
                  <label for="email" class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">E-post *</label>
                  <input
                    id="email"
                    v-model="formData.email"
                    type="email"
                    placeholder="din@email.se"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none transition"
                    :class="{ 'border-red-500': formErrors.email }"
                  />
                  <p v-if="formErrors.email" class="text-red-500 text-sm mt-1">{{ formErrors.email }}</p>
                </div>

                <!-- Phone -->
                <div>
                  <label for="phone" class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Telefon</label>
                  <input
                    id="phone"
                    v-model="formData.phone"
                    type="tel"
                    placeholder="+46 (0)XX XX XX"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none transition"
                  />
                </div>
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Meddelande *</label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  rows="6"
                  placeholder="Beskriv ditt projekt eller dina frågor här..."
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none transition resize-none"
                  :class="{ 'border-red-500': formErrors.message }"
                ></textarea>
                <p v-if="formErrors.message" class="text-red-500 text-sm mt-1">{{ formErrors.message }}</p>
              </div>

              <!-- Submit Button -->
              <button type="submit" class="btn-primary w-full text-lg py-4 font-bold">
                Skicka meddelande
              </button>

              <!-- Privacy Note -->
              <p class="text-xs text-gray-500 dark:text-gray-400 text-center">
                Vi respekterar din integritet. Dina uppgifter behandlas enligt vår integritetspolicy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding bg-gray-50 dark:bg-metal-gray border-t border-gray-200 dark:border-gray-800">
      <div class="container-custom max-w-3xl">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Vanliga frågor
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400">
            Kan vi svara på något innan du kontaktar oss?
          </p>
        </div>

        <div class="space-y-4">
          <details class="group bg-white dark:bg-dark rounded-2xl border border-gray-200 dark:border-gray-700 p-6 cursor-pointer hover:border-accent-orange transition-colors">
            <summary class="flex items-center justify-between font-bold text-gray-900 dark:text-white">
              Hur snabbt svarar ni på förfrågningar?
              <span class="text-accent-orange group-open:rotate-180 transition-transform">→</span>
            </summary>
            <p class="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
              Vi strävar efter att svara på alla förfrågningar inom 24 timmar på vardagar. För brådskande ärenden rekommenderar vi att ringa oss direkt.
            </p>
          </details>

          <details class="group bg-white dark:bg-dark rounded-2xl border border-gray-200 dark:border-gray-700 p-6 cursor-pointer hover:border-accent-orange transition-colors">
            <summary class="flex items-center justify-between font-bold text-gray-900 dark:text-white">
              Kan ni leverera komponenter globalt?
              <span class="text-accent-orange group-open:rotate-180 transition-transform">→</span>
            </summary>
            <p class="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
              Ja, vi levererar regelbundet till kunder i över 50 länder. Vi hanterar all frakt och export dokumentation för dig.
            </p>
          </details>

          <details class="group bg-white dark:bg-dark rounded-2xl border border-gray-200 dark:border-gray-700 p-6 cursor-pointer hover:border-accent-orange transition-colors">
            <summary class="flex items-center justify-between font-bold text-gray-900 dark:text-white">
              Vad är era minimikrav för beställningar?
              <span class="text-accent-orange group-open:rotate-180 transition-transform">→</span>
            </summary>
            <p class="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
              Vi är flexibla och kan hantera allt från engångprototyper till stora seriebeställningar. Kontakta oss för att diskutera dina specifika behov.
            </p>
          </details>

          <details class="group bg-white dark:bg-dark rounded-2xl border border-gray-200 dark:border-gray-700 p-6 cursor-pointer hover:border-accent-orange transition-colors">
            <summary class="flex items-center justify-between font-bold text-gray-900 dark:text-white">
              Erbjuder ni CAD-ritningssamordning?
              <span class="text-accent-orange group-open:rotate-180 transition-transform">→</span>
            </summary>
            <p class="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
              Ja, vårt team kan hjälpa till med CAD-ritningar och teknisk rådgivning från första idé till slutgiltig produktion.
            </p>
          </details>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
