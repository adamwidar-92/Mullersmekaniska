<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-dark text-white relative overflow-hidden">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0">
      <img
        src="/bilder/bildpåarbetare.jpg"
        alt="Müller Mekaniska team"
        class="w-full h-full object-cover opacity-[0.03]"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-dark via-dark to-black"></div>
    </div>

    <div class="container-custom py-14 md:py-18 relative z-10">
      <!-- Top Section - Brand & CTA -->
      <div class="mb-10 pb-10 border-b border-gray-800">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <!-- Brand Info -->
          <div>
            <div class="flex items-center gap-4 mb-4">
              <img
                src="/bilder/logomullers.jpg"
                alt="Müller Mekaniska Logo"
                class="h-12 w-auto object-contain rounded-lg"
              />
              <div>
                <div class="font-black text-2xl text-white leading-none">Müller</div>
                <div class="text-xs text-gray-400 font-bold tracking-widest leading-none mt-1">MEKANISKA AB</div>
              </div>
            </div>
            <p class="text-gray-400 text-sm leading-relaxed max-w-md">
              Högkvalitativa precisionkomponenter för formverktyg och plastindustrin. Sedan 1970.
            </p>
          </div>

          <!-- Quick Contact CTA -->
          <div class="bg-gradient-to-br from-accent-orange/10 to-accent-orange/5 border border-accent-orange/20 rounded-xl p-6">
            <h3 class="text-lg font-black text-white mb-2">Redo att starta ett projekt?</h3>
            <p class="text-gray-400 text-sm mb-4">Vi svarar inom 24 timmar.</p>
            <a href="mailto:info@muller.se" class="btn-primary inline-block text-center text-sm">
              Skicka e-post
            </a>
          </div>
        </div>
      </div>

      <!-- Main Footer Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <!-- Navigation -->
        <div>
          <h4 class="font-black text-white mb-4 text-sm uppercase tracking-widest">Navigation</h4>
          <ul class="space-y-2">
            <li><RouterLink to="/" class="text-gray-400 hover:text-accent-orange transition-colors font-medium">Hem</RouterLink></li>
            <li><RouterLink to="/om-oss" class="text-gray-400 hover:text-accent-orange transition-colors font-medium">Om oss</RouterLink></li>
            <li><RouterLink to="/produkter" class="text-gray-400 hover:text-accent-orange transition-colors font-medium">Produkter</RouterLink></li>
            <li><RouterLink to="/kompetenser" class="text-gray-400 hover:text-accent-orange transition-colors font-medium">Kompetenser</RouterLink></li>
            <li><RouterLink to="/kontakt" class="text-gray-400 hover:text-accent-orange transition-colors font-medium">Kontakt</RouterLink></li>
          </ul>
        </div>

        <!-- Information -->
        <div>
          <h4 class="font-black text-white mb-4 text-sm uppercase tracking-widest">Information</h4>
          <ul class="space-y-2">
            <li><RouterLink to="/nyheter" class="text-gray-400 hover:text-accent-orange transition-colors font-medium">Nyheter</RouterLink></li>
            <li><a href="#" class="text-gray-400 hover:text-accent-orange transition-colors font-medium">Integritetspolicy</a></li>
            <li><a href="#" class="text-gray-400 hover:text-accent-orange transition-colors font-medium">Villkor</a></li>
            <li><a href="#" class="text-gray-400 hover:text-accent-orange transition-colors font-medium">Certifieringar</a></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="font-black text-white mb-4 text-sm uppercase tracking-widest">Kontakt</h4>
          <ul class="space-y-2 text-sm">
            <li class="text-gray-400">Viaredsvägen 16</li>
            <li class="text-gray-400">504 64 Borås, Sverige</li>
            <li>
              <a href="tel:+46334060" class="text-gray-400 hover:text-accent-orange transition-colors font-medium">+46 (0)33 40 60</a>
            </li>
            <li>
              <a href="mailto:info@muller.se" class="text-gray-400 hover:text-accent-orange transition-colors font-medium">info@muller.se</a>
            </li>
          </ul>
        </div>

        <!-- Social -->
        <div>
          <h4 class="font-black text-white mb-4 text-sm uppercase tracking-widest">Följ oss</h4>
          <div class="flex gap-3">
            <a
              href="#"
              class="w-11 h-11 bg-accent-orange/10 hover:bg-accent-orange/20 border border-accent-orange/20 rounded-lg flex items-center justify-center transition-colors"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <svg class="w-5 h-5 text-accent-orange" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="#"
              class="w-11 h-11 bg-accent-orange/10 hover:bg-accent-orange/20 border border-accent-orange/20 rounded-lg flex items-center justify-center transition-colors"
              title="Facebook"
              aria-label="Facebook"
            >
              <svg class="w-5 h-5 text-accent-orange" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="border-t border-gray-800 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-gray-500 text-sm font-medium text-center md:text-left">
            &copy; {{ currentYear }} Müller Mekaniska AB. Alla rättigheter förbehållna.
          </p>
          <div class="text-gray-500 text-xs font-medium">
            Designad för precision och innovation
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
