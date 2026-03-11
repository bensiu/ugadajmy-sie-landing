const GA_ID = 'G-V511SC00K4'

export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      neutral: 'slate'
    }
  },
  cookieConsent: {
    expiresInDays: 1, // 180,
    consentVersion: '1.0.0',
    cookieName: 'cookie_consent',
    gtmConsentMapping: {
      analytics: 'analytics_storage'
      // ads: 'ad_storage',
      // personalization: 'personalization_storage'
    },
    categories: {
      analytics: {
        label: 'Analytics',
        description: 'Used to improve website performance.',
        required: false
      // },
      // ads: {
      //   label: 'Advertisement',
      //   description: 'Used for ad personalization.'
      }
    },
    scripts: [
      {
        id: 'ga2',
        src: `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`,
        async: true,
        defer: true,
        categories: ['analytics', 'ads']
      },
      // {
      //   id: 'ads',
      //   src: 'https://ads.example.com/script.js',
      //   categories: ['ads']
      // },
      {
        id: 'ga',
        src: `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`,
        customContent: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `,
        categories: ['analytics']
      }
    ]
  }
})
