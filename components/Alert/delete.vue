<template>
  <div
    class="w-full bg-black/20 text-gray-700 h-screen fixed z-10 top-0 left-0"
  >
    <div class="max-w-4xl p-3 mx-auto mt-40 bg-white rounded-md">
      <div class="p-5">
        <h2 class="text-2xl font-medium">Delete this Item?</h2>
        <p class="text-gray-400 mt-2">Are you sure delete the items?</p>
      </div>
      <div class="p-5 flex justify-end">
        <div>
          <button
            @click="$emit('cancel')"
            class="bg-gray-100 px-5 py-3 rounded-md text-gray-800 hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            @click="$emit('confirm')"
            class="bg-primary 0 px-5 py-3 rounded-md text-white hover:bg-gray-700"
          >
            Yes, delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
