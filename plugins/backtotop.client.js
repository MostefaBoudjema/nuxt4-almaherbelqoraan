import { defineNuxtPlugin } from '#app'
import VueBackToTop from 'vue-backtotop'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueBackToTop)
}) 