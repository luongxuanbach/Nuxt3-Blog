// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  css: ['~/assets/css/custom.css', '~/assets/scss/app.scss'],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
        }
      ]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  runtimeConfig: {
    secretKey: '',
    public: {
      apiBase: ''
    }
  }
})
