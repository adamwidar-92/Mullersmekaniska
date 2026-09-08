<script setup lang="ts">
import { ref } from 'vue'
import PageHero from '../components/PageHero.vue'

const formData = ref({
  name: '',
  company: '',
  email: '',
  phone: '',
  message: '',
  website: '', // honeypot
})

const submitted = ref(false)
const submitError = ref(false)
const submitting = ref(false)
const formErrors = ref<Record<string, string>>({})

const validateForm = () => {
  formErrors.value = {}

  if (!formData.value.name.trim()) formErrors.value.name = 'Namn är obligatoriskt'
  if (!formData.value.email.trim()) formErrors.value.email = 'E-post är obligatorisk'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) formErrors.value.email = 'Ogiltig e-postadress'
  if (!formData.value.message.trim()) formErrors.value.message = 'Meddelande är obligatoriskt'

  return Object.keys(formErrors.value).length === 0
}

const submitForm = async () => {
  submitError.value = false
  if (!validateForm()) return

  submitting.value = true
  try {
    const response = await fetch('https://formspree.io/f/xwpddvqv', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.value.name,
        company: formData.value.company,
        email: formData.value.email,
        phone: formData.value.phone,
        message: formData.value.message,
      }),
    })

    if (response.ok) {
      submitted.value = true
      formData.value = { name: '', company: '', email: '', phone: '', message: '', website: '' }
    } else {
      submitError.value = true
    }
  } catch (error) {
    console.error('Form submission error:', error)
    submitError.value = true
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <div>
    <PageHero
      eyebrow="Vi svarar inom 24 timmar"
      title="Kontakta oss"
      lead="Har du frågor eller vill diskutera ett projekt? Skicka ett meddelande eller ring oss direkt — vi hjälper dig gärna."
    />

    <!-- Contact Section -->
    <section class="section-padding bg-surface dark:bg-metal-gray/40">
      <div class="container-custom">
        <div class="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          <!-- Contact Info -->
          <div class="lg:col-span-2 space-y-6">
            <div v-reveal class="bg-white dark:bg-dark rounded-2xl p-8 border border-gray-200 dark:border-gray-800 card-hover hover:border-accent-orange dark:hover:border-accent-orange">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-accent-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-base font-bold text-gray-900 dark:text-white mb-1.5">Besök oss</h3>
                  <p class="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                    Müller Mekaniska AB<br>
                    Viaredsvägen 16<br>
                    504 64 Borås, Sverige
                  </p>
                </div>
              </div>
            </div>

            <div v-reveal="100" class="bg-white dark:bg-dark rounded-2xl p-8 border border-gray-200 dark:border-gray-800 card-hover hover:border-accent-orange dark:hover:border-accent-orange">
              <div class="flex items-start gap-4 mb-7">
                <div class="w-12 h-12 bg-accent-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-base font-bold text-gray-900 dark:text-white mb-1.5">Telefon</h3>
                  <a href="tel:+46334060" class="text-accent-orange hover:text-accent-orange-dark transition-colors font-bold">
                    +46 (0)33 40 60
                  </a>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-accent-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-base font-bold text-gray-900 dark:text-white mb-1.5">E-post</h3>
                  <a href="mailto:info@muller.se" class="text-accent-orange hover:text-accent-orange-dark transition-colors font-bold">
                    info@muller.se
                  </a>
                </div>
              </div>
            </div>

            <div v-reveal="200" class="bg-dark rounded-2xl p-8 relative overflow-hidden">
              <div class="absolute -top-10 -right-10 w-40 h-40 bg-accent-orange/20 rounded-full blur-2xl"></div>
              <h3 class="text-base font-bold text-white mb-2 relative">Öppettider</h3>
              <p class="text-gray-400 text-sm leading-relaxed relative">
                Måndag–Fredag: 07:00–16:00<br>
                Lunchstängt: 12:00–13:00<br>
                Helgdagar: Stängt
              </p>
            </div>
          </div>

          <!-- Contact Form -->
          <div v-reveal="150" class="lg:col-span-3 bg-white dark:bg-dark rounded-2xl p-10 md:p-12 border border-gray-200 dark:border-gray-800 shadow-soft">
            <template v-if="submitted">
              <div class="flex flex-col items-center justify-center text-center py-16">
                <div class="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                  <svg class="w-8 h-8 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <h2 class="text-2xl font-extrabold text-gray-900 dark:text-white mb-3">Tack för ditt meddelande!</h2>
                <p class="text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
                  Vi har tagit emot din förfrågan och återkommer inom 24 timmar på vardagar.
                </p>
                <button @click="submitted = false" class="btn-outline mt-8">Skicka ett till meddelande</button>
              </div>
            </template>

            <template v-else>
              <h2 class="text-2xl font-extrabold text-gray-900 dark:text-white mb-8">
                Skicka ett meddelande
              </h2>
              <form @submit.prevent="submitForm" class="space-y-6" novalidate>
                <div v-if="submitError" class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-300 p-4 rounded-xl flex items-start gap-3">
                  <svg class="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                  </svg>
                  <div>
                    <h4 class="font-bold">Något gick fel</h4>
                    <p class="text-sm">Meddelandet kunde inte skickas. Försök igen eller maila oss direkt på info@muller.se.</p>
                  </div>
                </div>

                <!-- Honeypot (hidden from humans) -->
                <input
                  v-model="formData.website"
                  type="text"
                  name="website"
                  tabindex="-1"
                  autocomplete="off"
                  class="hidden"
                  aria-hidden="true"
                />

                <div class="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label for="name" class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Namn *</label>
                    <input
                      id="name"
                      v-model="formData.name"
                      type="text"
                      placeholder="Ditt namn"
                      class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-surface dark:bg-metal-gray text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-accent-orange/50 focus:border-accent-orange outline-none transition"
                      :class="{ 'border-red-500': formErrors.name }"
                    />
                    <p v-if="formErrors.name" class="text-red-500 text-sm mt-1.5">{{ formErrors.name }}</p>
                  </div>

                  <div>
                    <label for="company" class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Företag</label>
                    <input
                      id="company"
                      v-model="formData.company"
                      type="text"
                      placeholder="Företagsnamn"
                      class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-surface dark:bg-metal-gray text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-accent-orange/50 focus:border-accent-orange outline-none transition"
                    />
                  </div>
                </div>

                <div class="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label for="email" class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">E-post *</label>
                    <input
                      id="email"
                      v-model="formData.email"
                      type="email"
                      placeholder="din@email.se"
                      class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-surface dark:bg-metal-gray text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-accent-orange/50 focus:border-accent-orange outline-none transition"
                      :class="{ 'border-red-500': formErrors.email }"
                    />
                    <p v-if="formErrors.email" class="text-red-500 text-sm mt-1.5">{{ formErrors.email }}</p>
                  </div>

                  <div>
                    <label for="phone" class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Telefon</label>
                    <input
                      id="phone"
                      v-model="formData.phone"
                      type="tel"
                      placeholder="+46 (0)XX XX XX"
                      class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-surface dark:bg-metal-gray text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-accent-orange/50 focus:border-accent-orange outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label for="message" class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Meddelande *</label>
                  <textarea
                    id="message"
                    v-model="formData.message"
                    rows="6"
                    placeholder="Beskriv ditt projekt eller dina frågor här..."
                    class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-surface dark:bg-metal-gray text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-accent-orange/50 focus:border-accent-orange outline-none transition resize-none"
                    :class="{ 'border-red-500': formErrors.message }"
                  ></textarea>
                  <p v-if="formErrors.message" class="text-red-500 text-sm mt-1.5">{{ formErrors.message }}</p>
                </div>

                <button type="submit" :disabled="submitting" class="btn-primary w-full text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none">
                  <svg v-if="submitting" class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-90" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                  </svg>
                  {{ submitting ? 'Skickar...' : 'Skicka meddelande' }}
                </button>

                <p class="text-xs text-gray-500 dark:text-gray-400 text-center">
                  Vi respekterar din integritet. Dina uppgifter används endast för att besvara din förfrågan.
                </p>
              </form>
            </template>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding bg-white dark:bg-dark">
      <div class="container-custom max-w-3xl">
        <div class="text-center mb-14" v-reveal>
          <span class="eyebrow eyebrow-centered">Vanliga frågor</span>
          <h2 class="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Snabba svar
          </h2>
          <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Kan vi svara på något innan du kontaktar oss?
          </p>
        </div>

        <div class="space-y-5">
          <details v-reveal class="group bg-surface dark:bg-metal-gray rounded-2xl border border-gray-200 dark:border-gray-700 p-7 cursor-pointer hover:border-accent-orange transition-colors open:pb-8">
            <summary class="flex items-center justify-between font-bold text-gray-900 dark:text-white list-none">
              Hur snabbt svarar ni på förfrågningar?
              <span class="text-accent-orange group-open:rotate-90 transition-transform flex-shrink-0 ml-4">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </summary>
            <p class="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed text-sm">
              Vi strävar efter att svara på alla förfrågningar inom 24 timmar på vardagar. För brådskande ärenden rekommenderar vi att ringa oss direkt.
            </p>
          </details>

          <details v-reveal="80" class="group bg-surface dark:bg-metal-gray rounded-2xl border border-gray-200 dark:border-gray-700 p-7 cursor-pointer hover:border-accent-orange transition-colors open:pb-8">
            <summary class="flex items-center justify-between font-bold text-gray-900 dark:text-white list-none">
              Kan ni leverera komponenter globalt?
              <span class="text-accent-orange group-open:rotate-90 transition-transform flex-shrink-0 ml-4">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </summary>
            <p class="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed text-sm">
              Ja, vi levererar regelbundet till kunder i över 50 länder. Vi hanterar frakt och exportdokumentation åt dig.
            </p>
          </details>

          <details v-reveal="160" class="group bg-surface dark:bg-metal-gray rounded-2xl border border-gray-200 dark:border-gray-700 p-7 cursor-pointer hover:border-accent-orange transition-colors open:pb-8">
            <summary class="flex items-center justify-between font-bold text-gray-900 dark:text-white list-none">
              Vad är era minimikrav för beställningar?
              <span class="text-accent-orange group-open:rotate-90 transition-transform flex-shrink-0 ml-4">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </summary>
            <p class="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed text-sm">
              Vi är flexibla och kan hantera allt från engångsprototyper till stora seriebeställningar. Kontakta oss för att diskutera dina specifika behov.
            </p>
          </details>

          <details v-reveal="240" class="group bg-surface dark:bg-metal-gray rounded-2xl border border-gray-200 dark:border-gray-700 p-7 cursor-pointer hover:border-accent-orange transition-colors open:pb-8">
            <summary class="flex items-center justify-between font-bold text-gray-900 dark:text-white list-none">
              Erbjuder ni CAD-ritningssamordning?
              <span class="text-accent-orange group-open:rotate-90 transition-transform flex-shrink-0 ml-4">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </summary>
            <p class="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed text-sm">
              Ja, vårt team kan hjälpa till med CAD-ritningar och teknisk rådgivning från första idé till slutgiltig produktion.
            </p>
          </details>
        </div>
      </div>
    </section>
  </div>
</template>
