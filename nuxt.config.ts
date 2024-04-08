// nuxt.config.js
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "travel",
      meta: [{ name: "description", content: "รายละเอียดเว็บไซต์" }],
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
  ssr: false,
  runtimeConfig: {
    public: {
      API_URL_TYPE_GAME: process.env.API_URL_TYPE_GAME || "",
    },
  },
  ui: {
    icons: ["simple-line-icons"],
  },
});
