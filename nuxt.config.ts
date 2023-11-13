// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css:[
    "@/assets/sass/main.scss"
  ],
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app:{
    head:{
      title: "Volontyor",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "Nuxt.js project" },
      ],
      link:[
        { rel: "icon", type: "image/x-icon", href: "/icon.svg" },
        {
          rel:"stylesheet",
          href:"https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        }
      ],
      script:[
        {
          src:"https://unpkg.com/boxicons@2.1.4/dist/boxicons.js",
          
        }
      ]
    }
  }
})
