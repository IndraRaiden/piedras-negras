// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon'],
  build: {
    transpile: ['lucide-vue-next']
  },
  nitro: {
    routeRules: {
      '/files/**/*.pdf': {
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': 'inline'
        }
      }
    }
  }
})
