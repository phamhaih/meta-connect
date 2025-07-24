import { defineNuxtConfig } from "nuxt/config";
import { dfx_env } from "./env";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "./src/MetaConnect_frontend",
  devtools: { enabled: false },
  ssr: false,
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@pinia/nuxt",
    "@nuxtjs/google-fonts",
  ],
  runtimeConfig: {
    public: {
      ...dfx_env(),
      ...{
        posthogPublicKey: "phc_dyI7umiKIWSNOMLkhcOHaaCalWoyFysQeyDdvrg1gWz",
        posthogHost: "https://app.posthog.com",
      },
    },
  },
  app: {
    pageTransition: { name: "slide-left", mode: "out-in" },
    head: {
      titleTemplate: (t) => {
        return t ? `${t} - MetaConnect` : "MetaConnect";
      },
      link: [{ rel: "icon", type: "image/png", href: "/hexagon-white.png" }],
      script: [
        //{
        //    hid: 'sentry',
        //    src: 'https://js.sentry-cdn.com/707065f47a8533141c2cc9ce69029836.min.js',
        //    crossorigin: 'anonymous'
        //},
      ],
    },
  },
  googleFonts: {
    download: true,
    families: {
      "Open+Sans": [300, 400, 500, 600, 700, 800],
    },
  },
});
