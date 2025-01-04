// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: true,

  app: {
    pageTransition: { name: "page", mode: "out-in" },

    head: {
      title: 'همزاد - کارت های یکسان رو پیدا کن',
      htmlAttrs: {
        lang: "fa",
        dir: "rtl",
      },
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1, user-scalable=no",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, user-scalable=no",
        },
        { name: "format-detection", content: "telephone=no" },
      ],
    },
  },

  runtimeConfig: {
    public: {
      githubRepo: process.env.GITHUB_REPO,
      gameMoves: process.env.GAME_MOVES,
      gameTime: process.env.GAME_TIME
    }
  },

  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/icon", '@nuxt/eslint'],
})
