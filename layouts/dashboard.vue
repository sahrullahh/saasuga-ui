<template>
  <div class="app font-lexend">
    <div class="flex">
      <div class="flex-none">
        <Nuxt />
      </div>
      <div class="flex-auto">
        <DashboardSidebarWrapper />
      </div>
      <div v-if="$auth.loggedIn">Welcome {{ $auth.user.email }}</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  background-color: #dcdcdc;
}
</style>
