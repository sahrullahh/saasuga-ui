<template>
  <div>
    <p class="text-left text-red-500">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "alert",
  props: {
    message: {
      type: String,
      default: "",
    },
  },
};
</script>
