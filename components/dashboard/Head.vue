<template>
  <div
    class="w-full mt-8 shadow rounded-md p-5 bg-gradient-to-r from-primary via-primary-dark to-green-500"
  >
    <h2 class="font-semibold text-lg">Welcome, {{ this.$auth.user.name }}</h2>
    <p class="text-xs">What the link you add today?</p>
  </div>
</template>
