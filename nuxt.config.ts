// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css:['~/assets/main.css'],
  modules: [
    '@pinia/nuxt',
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss", 
    "@nuxt/image",
    "@vueuse/nuxt",
    "@vite-pwa/nuxt",
    "nuxt-icon"
  ],
 
  // pwa:{
  //   manifest:{
  //     name: "NasEshop",
  //     short_name: "NEShop",
  //     description: "Nas Company Eshop PWA  Ecommerce Application",
  //     display: "standalone",
  //     theme_color: "#ffffff",
  //     icons: [
  //       {
  //         src: "icons/icon_64x64.png",
  //         sizes: "64x64",
  //         type: "image/png"
  //       },
  //       {
  //         src: "icons/icon_144x144.png",
  //         sizes: "144x144",
  //         type: "image/png"
  //       },
  //       {
  //         src: "icons/icon_192x192.png",
  //         sizes: "192x192",
  //         type: "image/png"
  //       },
  //       {
  //         src: "icons/icon_512x512.png",
  //         sizes: "512x512",
  //         type: "image/png"
  //       },
  //     ]

  //   },
  //   workbox:{
  //     navigateFallback: "/"
  //   },
  //   devOptions:{
  //     enabled: true,
  //     type: "module"
  //   }
  // },
  runtimeConfig: {
    public: {
      api_url: process.env.API_URL
    }
  }
  
})
