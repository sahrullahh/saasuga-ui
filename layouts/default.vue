<template>
  <div class="app font-lexend">
    <Navbar />
    <div class="p-5">
      <transition name="layout" mode="out-in">
        <Nuxt />
      </transition>
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
<style>
body {
  height: 100vh;
}
.layout-enter-active,
.layout-leave-active {
  transition: all 0.5s;
}
.layout-enter,
.layout-leave-active {
  transform: translateY(12px);
  opacity: 0;
}
</style>
