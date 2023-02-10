<template>
  <div class="app font-lexend">
    <Navbar />
    <div class="p-5">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import { currentColors } from "../helpers/background.js";
export default {
  methods: {
    currentColors,
    init() {
      this.currentColors(
        "radial-gradient(circle at top, rgba(11,71,50,1) 0%, rgba(34,70,47,1) 0%, rgba(0,30,38,1) 35%, rgba(0,30,38,1) 100%)"
      );
    },
  },
  mounted() {
    this.init();
  },
};
</script>
<style scoped>
body {
  height: 100vh;
}
</style>
