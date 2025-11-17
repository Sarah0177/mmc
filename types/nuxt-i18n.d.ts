// types/nuxt-i18n.d.ts
import type { I18NConfig } from '@nuxtjs/i18n'
import type { NuxtConfig } from 'nuxt/schema'

declare module 'nuxt/schema' {
  interface NuxtConfig {
    // 扩展 Nuxt 配置类型，添加 i18n 选项
    i18n?: I18NConfig
  }
}

export {}