// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devServer: {
    host: '0.0.0.0'
  },
  devtools: { enabled: true },
  modules: ['@nuxt/ui', "nuxt-windicss", "@nuxtjs/i18n"],
  // modules: ['@nuxt/ui', "@nuxtjs/i18n"],
  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      // { code: 'zh', name: '中文', file: 'zh.json' },
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    langDir: './locales'
  },
  ui: {
    // fonts: false // Disables automatic google fonts loading
  },
  css: [
    '@/assets/styles/global.scss',
    '@/assets/styles/main.css',
  ],
  experimental: {
    inlineSSRStyles: false
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/styles/variables.scss" as *;
          `
        }
      }
    }
  },
  app: {
    head: {
      titleTemplate: 'MMC-melamine professional supplier',
      title: 'melaming moulding compound',
      charset: 'utf-8',
      htmlAttrs: {
        lang: 'zh-cn'
      }
    },
    baseURL: '/mmc/'
  },
  ssr: true,
  nitro: {
    preset: 'static'
  },
})
