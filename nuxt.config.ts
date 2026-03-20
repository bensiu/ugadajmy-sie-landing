// https://nuxt.com/docs/api/configuration/nuxt-config

const isGoogleTagManager: {
  googleTagManager?: {
    id: string
  }
} = process.env.NODE_ENV !== 'development' && process.env.STAGE === 'prod'
  ? {
      // googleAnalytics: {
      //   id: 'G-V511SC00K4'
      // },
      googleTagManager: {
        id: 'GTM-W5RQV42V'
      }
    }
  : {}

// const externalSites = [
//   'https://*.googletagmanager.com',
//   'https://*.google-analytics.com',
//   'https://api.iconify.design'
// ]

export default defineNuxtConfig({
  extends: [
    '../nuxt-layers/block-elements',
    '../nuxt-layers/simple-contact-form',
    // '../nuxt-layers/cookie-consent',
    '../nuxt-layers/google-tag-manager'
  ],

  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',

    // '@nuxt/a11y',
    // '@nuxt/hints',

    '@nuxt/scripts',
    // 'nuxt-security',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],
  // ssr: true,

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main2.css'],

  site: {
    url: 'https://ugadajmysie.pl',
    name: 'Ugadajmy się - Aleksandra Dubiel | Mediator, Prawnik, Coach | Szczecin'
  },

  colorMode: {
    preference: 'light', // Force light mode
    fallback: 'light', // Fallback if 'light' isn't available
    storageKey: 'nuxt-color-mode-v2'
  },

  runtimeConfig: {
    basicAuthUser: process.env.BASIC_AUTH_USER,
    basicAuthPass: process.env.BASIC_AUTH_PASS
  },

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

  icon: {
    clientBundle: {
      scan: true
    },
    serverBundle: {
      externalizeIconsJson: true
    }
  },

  scripts: {
    registry: {
      ...isGoogleTagManager
    }
  },

  // security: {
  //   nonce: true,
  //   headers: {
  //     contentSecurityPolicy: {
  //       'script-src': ['\'self\'', '\'unsafe-inline\'', '\'nonce-{{nonce}}\'', ...externalSites],
  //       'img-src': ['\'self\'', 'data:', ...externalSites],
  //       'connect-src': ['\'self\'', ...externalSites]
  //       // Add other directives as needed (e.g., 'style-src', 'font-src')
  //     }
  //   }
  // },

  sitemap: {
    exclude: ['wiadomosci-o-mediacjach/gazda'],
    sources: ['/api/__sitemap__/urls']
  }
})
