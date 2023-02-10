<template>
  <div class=""></div>
</template>

<script>
export default {
  auth: false,
  name: "redirect-link",
  async fetch() {
    const slug = this.$route.params.slug;
    await this.getParams(slug);
  },
  methods: {
    async getParams(slug) {
      try {
        const res = await this.$axios.get("/urls");
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>
