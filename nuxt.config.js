export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s",
    htmlAttrs: {
      lang: "id",
    },
    // add meta or links here
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/logo/saasuga.svg" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/bootstrap-icons.js", mode: "client" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // configure sitemap
  sitemap: {
    hostname: "https://sasu.ga",
    filter({ routes }) {
      return routes.map((route) => {
        route.url = `${route.url}/`;
        route.priority = 1;
        return route;
      });
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/sitemap",
    "@nuxtjs/axios",
    "@nuxtjs/auth",
  ],
  // auth: {
  //   strategies: {
  //     google: {
  //       clientId: "...",
  //     },
  //   },
  // },

  // setup tailwind
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true,
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.BASE_URL || "https://backend-dev.saasu.ga/api",
  },
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || "https://backend-dev.saasu.ga/api",
  },
  // router: {
  //   middleware: ["auth"],
  // },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
