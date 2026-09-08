import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import { vReveal } from './directives/reveal'
import './styles/main.css'

// Initialize theme before mount to avoid flashes
const savedTheme = localStorage.getItem('theme')
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
  document.documentElement.classList.add('dark')
}

const app = createApp(App)

app.use(router)
app.use(i18n)
app.directive('reveal', vReveal)
app.mount('#app')
