// nuxt.config.js

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Term Game",
    },
  },
  modules: ["@nuxt/ui"],
  tailwindcss: {
    cssPath: "~/assets/style/css/tailwind.css",
    configPath: "tailwind.config.ts",
  },
  colorMode: {
    preference: "light",
    fallback: "light",
  },
});
