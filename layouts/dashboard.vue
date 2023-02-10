<template>
  <div class="app font-lexend">
    <DashboardNavbar />
    <div class="container max-w-7xl mx-auto gap-5 p-5 text-white">
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
      this.currentColors("#eee");
    },
  },
  mounted() {
    this.init();
  },
};
</script>
