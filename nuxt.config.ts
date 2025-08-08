// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura';
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module',
  ],

  app: {
    head: {
      title: '170 39',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'A music app built with Nuxt.js' },
        { name: 'theme-color', content: '#000000' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/Logo.png' }
      ],
    },
  },
  css: ['~/assets/styles/main.scss', '~/assets/styles/tailwind.css', '~/assets/fonts/fonts.css'],
  primevue: {
        options: {
            theme: {
                preset: Aura,
                options: {
                    prefix: 'p',
                    darkModeSelector: 'light',
                    cssLayer: false
                }
            }
        }
    }
})