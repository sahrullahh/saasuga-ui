<script>
import { currentColors } from "../helpers/background.js";
export default {
  auth: false,
  loading: {
    color: "green",
    height: "5px",
  },
  data() {
    return {
      isError: false,
      errorMsg: "",
      count: 0,
      seo: {
        title: "Login - Saasuga",
      },
    };
  },
  head() {
    return {
      title: this.seo.title,
    };
  },

  methods: {
    async isLoggedWith(auth) {
      const authentication = "/login/" + auth;
      this.$nuxt.$loading.start();
      await this.auth(authentication);
    },
    async auth(url) {
      try {
        const res = await this.$axios.get(url);
        const redirect = res.data.data.redirect_url;
        window.location.href = redirect;
        this.isError = false;
      } catch (e) {
        console.log(e);
        this.isError = true;
        this.errorMsg = e;
        this.count++;
      }
    },
    currentColors,
    init() {
      this.currentColors("#001e26");
    },
  },

  mounted() {
    this.$store.commit("navbar/inLogin", true);
    this.init();
  },
};
</script>

<template>
  <div>
    <div
      class="text-white h-screen pt-10 pb-36 max-w-lg rounded-lg mx-auto mt-20 text-center"
    >
      <div class="head">
        <h2 class="text-4xl font-bold text-white tracking-tighter">
          Log in to Saasuga.
        </h2>
      </div>
      <!-- wrapper button auth -->
      <div class="body space-y-5 max-w-xs mx-auto mt-20">
        <button
          @click="isLoggedWith('github')"
          class="bg-github hover:bg-gray-700 rounded-md w-full text-white text-sm font-medium px-5 py-3 block"
        >
          <div class="flex justify-center">
            <span class="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                />
              </svg>
            </span>
            <span class="ml-3"> Continue with Github </span>
          </div>
        </button>
        <button
          @click="isLoggedWith('google')"
          class="bg-blue-500 hover:bg-blue-400 rounded-md w-full text-white text-sm font-medium px-5 py-3 block"
        >
          <div class="flex justify-center">
            <span class="text-white">
              <svg
                aria-hidden="true"
                width="1.5em"
                height="1.5em"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                ></path>
              </svg>
            </span>
            <span class="ml-3"> Continue with Google </span>
          </div>
        </button>
      </div>
      <div v-show="isError" class="mt-5 space-y-4">
        <p class="text-red-500">{{ errorMsg }}</p>
        <p class="text-red-500 font-semibold text-lg" v-if="count > 2">
          We`re sorry for your login session, for now the server has encountered
          an error, you have tried {{ count }} times
        </p>
      </div>
    </div>
  </div>
</template>
