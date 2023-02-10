<script>
export default {
  data() {
    return {
      avatar: "",
      dropdown: false,
    };
  },
  methods: {
    handleDropdown() {
      this.dropdown = !this.dropdown;
    },
    onLogout() {
      this.$auth.logout();
    },
  },
  mounted() {
    this.avatar = `https://ui-avatars.com/api/?name=${this.$auth.user.name}&bold=true&background=random&format=svg`;
  },
};
</script>

<template>
  <div class="w-full rounded-md bg-white shadow p-4">
    <div class="flex justify-between gap-5">
      <div class="flex-auto w-full flex gap-5">
        <img src="/logo/saasuga.svg" class="w-7" alt="" />
        <h2 class="mt-2 text-lg text-gray-800">Dashboard</h2>
      </div>
      <div class="flex-auto flex gap-5 w-full justify-end">
        <h2 class="text-gray-800 mt-2">{{ $auth.user.name }}</h2>
        <img :src="avatar" class="w-10 rounded-full" alt="avatar user" />
      </div>
      <div class="flex-auto mt-2 mr-2">
        <button @click="handleDropdown" v-click-outside="dropdown">
          <i class="bi bi-caret-down-fill text-gray-400"></i>
        </button>
      </div>
      <div
        id="dropdown"
        v-show="dropdown"
        class="rounded-md right-4 border shadow mt-12 fixed bg-white w-44"
      >
        <ul
          class="py-2 text-sm text-gray-700"
          aria-labelledby="dropdownDividerButton"
        >
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >Profile</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >Settings</a
            >
          </li>
          <li>
            <a
              href="#"
              @click="onLogout"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >Log out</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
