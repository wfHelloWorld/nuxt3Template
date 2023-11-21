// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@pinia/nuxt',
    '@element-plus/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt',
    'nuxt-swiper',
    '@unocss/nuxt'
  ],
  css: ['@unocss/reset/tailwind.css'],
  // css: ['/src/css/reset.css'],
  pinia: { autoImports: ['defineStore'] }, // 自动导入
})
