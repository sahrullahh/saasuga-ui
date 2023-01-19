<template>
  <div
    class="navbar w-full p-3 sticky top-0"
    v-if="visible"
    :class="{ 'border-b border-gray-800': inLogin }"
  >
    <div class="container max-w-6xl mx-auto flex justify-between">
      <a href="/">
        <div class="w-full flex mt-1">
          <span class="text-green-400">
            <img src="/logo/saasuga.svg" class="w-7" alt="" />
          </span>

          <h2 class="pl-3 font-bold text-2xl text-gray-200">Saasuga.</h2>
        </div>
      </a>
      <div class="flex gap-5 text-sm">
        <button
          v-if="!inLogin"
          @click="pushTo('/login')"
          class="text-green-500 px-4 flex rounded-md py-2"
        >
          <span class="text-white">Login</span>
        </button>
        <button
          @click="pushTo('/login')"
          class="px-4 border hover:bg-primary-dark border-primary-dark flex rounded-md py-2"
        >
          <span class="text-white">Sign Up</span>
          <span class="text-gray-500 ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 21v-2h7V5h-7V3h7q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm-2-4l-1.375-1.45l2.55-2.55H3v-2h8.175l-2.55-2.55L10 7l5 5Z"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    visible() {
      return this.$store.state.navbar.visible;
    },
    inLogin() {
      return this.$store.state.navbar.log;
    },
  },
  methods: {
    pushTo(link) {
      this.$router.push(link);
    },
  },
};
</script>
