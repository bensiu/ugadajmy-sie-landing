// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/a11y',
    '@nuxt/hints',
    '@nuxt/scripts'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  colorMode: {
    preference: 'light', // Force light mode
    fallback: 'light', // Fallback if 'light' isn't available
    storageKey: 'nuxt-color-mode-v2'
  },

  // runtimeConfig: {
  //   basicAuthUser: process.env.BASIC_AUTH_USER,
  //   basicAuthPass: process.env.BASIC_AUTH_PASS
  // },

  routeRules: {
    '/': { prerender: true }
  },

  future: {
    compatibilityVersion: 4
  },

  // compatibilityDate: '2025-01-15',
  compatibilityDate: '2024-11-01',

  nitro: {
    inlineDynamicImports: true,
    preset: 'aws-lambda',
    serveStatic: true,
    rollupConfig: {
      treeshake: true
    },
    sourceMap: false,
    minify: true
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  scripts: {
    registry: {
      googleAnalytics: {
        enabled: process.env.NODE_ENV !== 'development',
        id: 'G-V511SC00K4'
      }
    }
  }
})
