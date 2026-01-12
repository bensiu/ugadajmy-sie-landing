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
  }
})
