// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/image',
        [
            '@nuxtjs/i18n',
            {
                locales: [
                    {
                        code: 'ar',
                        iso: 'ar-DZ',
                        file: 'ar.json',
                        name: 'Arabic',
                    },
                ],
                defaultLocale: 'ar',
                strategy: 'prefix_except_default',
                lazy: true,
                langDir: 'locales/',
                vueI18n: './locales/vue-i18n.options.js',
                detectBrowserLanguage: false, // disables i18n_redirected cookie and redirect
            },
        ],
    ],
    css: ['~/assets/css/app.css'],
    plugins: [
        '@/plugins/aos.client.js',
        '@/plugins/aos.client.js',
        '~/plugins/theme.client.js',
        '~/plugins/backtotop.client.js',
    ],
    ssr: true,
    nitro: {
        preset: 'vercel',
    },
    runtimeConfig: {
        // Private keys (only available on server-side)
        // apiSecret: process.env.API_SECRET,

        // Public keys (exposed to the client)
        public: {
            i18nLocale: process.env.I18N_LOCALE || 'ar',
            i18nFallbackLocale: process.env.I18N_FALLBACK_LOCALE || 'ar',
            authorName: process.env.AUTHOR_NAME || 'Djebiha Amina',
            showMultiLang:false,
            whatsappNumber: process.env.WHATSAPP_NUMBER || '213672358792',
        },
    },
    app: {
        head: {
            title: 'الماهر بالقران | Almaher Belqoraan',
            link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
            script: [
                {
                    src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX',
                    async: true,
                },
                {
                    innerHTML: `window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX');`,
                    type: 'text/javascript',
                },
            ],
        },
    },
    compatibilityDate: '2025-07-08',
});
