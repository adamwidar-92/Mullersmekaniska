<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-gray-900 dark:bg-black text-white mt-20">
    <div class="container-custom py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <!-- Company Info -->
        <div>
          <div class="flex items-center space-x-2 mb-4">
            <div class="w-10 h-10 bg-accent-orange rounded-lg flex items-center justify-center font-bold text-lg">
              M
            </div>
            <div>
              <div class="font-bold">Müller</div>
              <div class="text-xs text-gray-400">Mekaniska</div>
            </div>
          </div>
          <p class="text-gray-400 text-sm">{{ t('hero.tagline') }}</p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-semibold mb-4">{{ t('nav.home') }}</h4>
          <ul class="space-y-2 text-sm text-gray-400">
            <li><RouterLink to="/" class="hover:text-accent-orange transition-colors">{{ t('nav.home') }}</RouterLink></li>
            <li><RouterLink to="/om-oss" class="hover:text-accent-orange transition-colors">{{ t('nav.about') }}</RouterLink></li>
            <li><RouterLink to="/produkter" class="hover:text-accent-orange transition-colors">{{ t('nav.products') }}</RouterLink></li>
            <li><RouterLink to="/kompetenser" class="hover:text-accent-orange transition-colors">{{ t('nav.competencies') }}</RouterLink></li>
          </ul>
        </div>

        <!-- More Links -->
        <div>
          <h4 class="font-semibold mb-4">Information</h4>
          <ul class="space-y-2 text-sm text-gray-400">
            <li><RouterLink to="/nyheter" class="hover:text-accent-orange transition-colors">{{ t('nav.news') }}</RouterLink></li>
            <li><RouterLink to="/kontakt" class="hover:text-accent-orange transition-colors">{{ t('nav.contact') }}</RouterLink></li>
            <li><a href="#" class="hover:text-accent-orange transition-colors">Integritet</a></li>
            <li><a href="#" class="hover:text-accent-orange transition-colors">Användarvillkor</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="font-semibold mb-4">{{ t('nav.contact') }}</h4>
          <ul class="space-y-3 text-sm text-gray-400">
            <li class="flex items-start space-x-2">
              <svg class="w-4 h-4 text-accent-orange mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
              </svg>
              <span>{{ t('footer.address') }}</span>
            </li>
            <li class="flex items-center space-x-2">
              <svg class="w-4 h-4 text-accent-orange flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.346.897 1.17 2.045 2.468 3.343s2.447 2.122 3.343 2.468l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 4 14.18 4 9.5V5a1 1 0 011-1h2.153Z" />
              </svg>
              <a href="tel:+46" class="hover:text-accent-orange transition-colors">+46 (0)</a>
            </li>
            <li class="flex items-center space-x-2">
              <svg class="w-4 h-4 text-accent-orange flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a href="mailto:info@muller.se" class="hover:text-accent-orange transition-colors">info@muller.se</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm">
            &copy; {{ currentYear }} Müller Mekaniska AB. {{ t('footer.allRightsReserved') }}
          </p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a href="#" class="text-gray-400 hover:text-accent-orange transition-colors">
              <span class="sr-only">LinkedIn</span>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-accent-orange transition-colors">
              <span class="sr-only">Facebook</span>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
