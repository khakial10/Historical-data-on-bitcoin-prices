module.exports = {
  
  head: {
    title: "cryptoapp",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "//fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,700,400italic|Material+Icons"
      }
    ]
  },
  css: ["~/assets/theme.scss", "vue-material/dist/vue-material.min.css"],

  plugins: ["~/plugins/vue-material.js"],

  
  loading: { color: "#3B8070" },
 
  build: {
    vendor: ["axios", "vue-material"],
    
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
