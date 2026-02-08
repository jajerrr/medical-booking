import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  // modules: ['@pinia/nuxt'],
  // runtimeConfig: {
  //   public: {
  //     apiBase: 'http://localhost:3001/api'
  //   }
  // },

  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ['./assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});