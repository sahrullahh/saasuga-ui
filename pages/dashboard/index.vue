<script>
export default {
  layout: "dashboard",
  auth: true,

  data() {
    return {
      items: [],
      updateForm: false,
      formVisible: false,
      updateId: "",
      deleteId: "",
      alert: false,
      alertDelete: false,
      alertMessage: "",
      form: {
        title: "",
        destination: "",
        keyword: "",
      },
    };
  },

  // fetch data url from api
  async fetch() {
    await this.getData();
  },

  // meta tags

  head() {
    return {
      title: "Dashboard - Saasuga",
    };
  },

  methods: {
    // method on modal delete active
    deleteClick(id) {
      this.alertDelete = !this.alertDelete;
      this.deleteId = id;
    },

    // action delete data api
    async deleteData(id) {
      try {
        await this.$axios.delete("/urls/" + id);
        await this.$fetch();
        this.alertDelete = false;
      } catch (e) {
        console.error(e);
      }
    },
    // action post data api
    async post() {
      try {
        await this.$axios.post("/urls", {
          title: this.form.title,
          destination: this.form.destination,
          keyword: this.form.keyword,
        });
        await this.$fetch();
        this.formVisible = false;
        this.form = {
          title: "",
          destination: "",
          keyword: "",
        };
      } catch (e) {
        console.error(e);
      }
    },
    // action put data api
    async update() {
      try {
        await this.$axios.put("/urls/" + this.updateId, {
          title: this.form.title,
          destination: this.form.destination,
          keyword: this.form.keyword,
        });
        await this.$fetch();
        this.formVisible = false;
        this.form = {
          title: "",
          destination: "",
          keyword: "",
        };
      } catch (e) {
        console.error(e);
      }
    },
    // method get data for any update
    changeData(id, title, keyword, destination) {
      this.updateForm = true;
      this.formVisible = true;
      this.updateId = id;
      this.alert = false;
      this.form = {
        title,
        keyword,
        destination,
      };
    },
    // method on create data when modal visible
    createData() {
      this.updateForm = false;
      this.formVisible = true;
      this.alert = false;
      this.form = {
        title: "",
        destination: "",
        keyword: "",
      };
    },
    // to submit all done data
    async submitForm() {
      if (!this.updateForm) {
        if (
          this.form.destination.includes("https://") ||
          this.form.destination.includes("http://")
        ) {
          this.alert = false;
          if (this.form.destination.includes("https://")) {
            await this.post();
            this.alert = false;
            this.formVisible = false;
          } else {
            this.alert = true;

            this.alertMessage =
              "We do not recommend unsafe websites, for personal safety.";
          }
        } else {
          this.alert = true;
          this.alertMessage = "Invalid url, please fill in correctly.";
        }
      } else {
        if (
          this.form.destination.includes("https://") ||
          this.form.destination.includes("http://")
        ) {
          this.alert = false;
          if (this.form.destination.includes("https://")) {
            this.alert = false;
            this.formVisible = false;
            await this.update();
          } else {
            this.alert = true;
            this.alertMessage =
              "We do not recommend unsafe websites, for personal safety.";
          }
        } else {
          this.alert = true;
          this.alertMessage = "Invalid url, please fill in correctly.";
        }
      }
    },
    async getData() {
      try {
        const response = await this.$axios.get("/urls");
        this.items = response.data.data.urls;
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<template>
  <div>
    <DashboardHead />
    <transition name="modal" mode="out-in">
      <alertDelete
        v-show="alertDelete"
        @confirm="deleteData(deleteId)"
        @cancel="deleteClick"
      />
    </transition>
    <transition name="modal" mode="out-in">
      <div
        v-show="formVisible"
        class="w-full bg-black/20 text-gray-700 h-screen fixed z-10 top-0 left-0"
      >
        <div class="max-w-3xl p-3 mx-auto bg-white mt-10 rounded-md">
          <div class="p-4">
            <h2 class="font-semibold tracking-tighter text-2xl">
              {{
                !updateForm ? "Create new short url" : "Change your shorten url"
              }}
            </h2>
            <p class="text-gray-400 mt-2">
              {{
                !updateForm
                  ? "Convert your long url to tiny, so it's easy to remember by staying on the click, and stored safely"
                  : "You can update item title, keyword or destination."
              }}
            </p>
          </div>
          <form @submit.prevent="submitForm">
            <div class="pl-5 pr-5 pb-10">
              <div class="body mt-5 space-y-5">
                <div class="space-y-4">
                  <label for="title"
                    >Title <span class="text-pink-500">*</span></label
                  >
                  <input
                    type="text"
                    v-model="form.title"
                    class="w-full outline-none focus:bg-gray-100 p-2 rounded-md bg-white border"
                  />
                </div>
                <div class="space-y-4">
                  <label for="title"
                    >Paste long url destination here.
                    <span class="text-pink-500">*</span></label
                  >

                  <input
                    type="text"
                    v-model="form.destination"
                    :class="{ 'border-red-500 text-red-500': alert }"
                    placeholder=""
                    class="w-full p-2 rounded-md outline-none focus:bg-gray-100 bg-white border"
                  />
                  <Alert :message="alertMessage" v-show="alert" />
                </div>
                <div class="space-y-4">
                  <label for="title"
                    >Keyword url <span class="text-pink-500">*</span></label
                  >
                  <div
                    class="input-box-url bg-white text-gray-500 border rounded-md flex"
                  >
                    <label for="" class="pl-4 pt-3">saasu.ga/</label>
                    <input
                      type="text"
                      v-model="form.keyword"
                      autocomplete="off"
                      class="w-full p-3 pl-0 bg-white placeholder-gray-300 focus:placeholder-green-500 text-primary font-medium outline-none rounded-md"
                      placeholder="alias"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 flex justify-end">
              <div>
                <button
                  type="button"
                  @click="formVisible = false"
                  class="bg-gray-100 px-5 py-3 rounded-md text-gray-800 hover:bg-gray-200"
                >
                  Close
                </button>
                <button
                  type="submit"
                  class="bg-primary 0 px-5 py-3 rounded-md text-white hover:bg-gray-700"
                >
                  {{ !updateForm ? "Create, url shorten" : "Save changes " }}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </transition>
    <div
      class="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-5 w-full mt-8 text-gray-800"
    >
      <div class="bg-white shadow p-5 rounded-md border-l-4 border-blue-500">
        <h2>Total Click</h2>
        <h1>0</h1>
      </div>
      <div class="bg-white shadow p-5 rounded-md border-l-4 border-orange-500">
        <h2>Url Shorten</h2>
        <h1>{{ !items ? 0 : items.length }}</h1>
      </div>
      <div class="bg-white shadow p-5 rounded-md border-l-4 border-green-500">
        <h2>Active url</h2>
        <h1>0</h1>
      </div>
    </div>
    <div class="mt-8 space-y-8">
      <button
        @click="createData"
        class="bg-primary px-5 py-3 rounded-md text-white hover:bg-gray-700"
      >
        Create new
      </button>

      <div class="flex gap-5" v-for="(item, index) in items" :key="index">
        <div
          class="border-l-4 text-gray-700 border-green-500 bg-white w-full p-5 rounded-md"
        >
          <div class="w-full space-y-4">
            <h1>{{ item.title }}</h1>
            <div class="p-2 rounded-sm bg-gray-100">
              <p class="text-gray-400">https://saasu.ga/{{ item.keyword }}</p>
            </div>
          </div>
        </div>
        <div>
          <ul class="text-gray-500 space-y-3">
            <li>
              <button @click="deleteClick(item.id)" title="delete this item">
                <i class="bi bi-trash text-red-500"></i>
              </button>
            </li>

            <li>
              <button
                @click="
                  changeData(
                    item.id,
                    item.title,
                    item.keyword,
                    item.destination
                  )
                "
                title="update this item"
              >
                <i class="bi bi-pencil"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s;
}
.modal-enter,
.modal-leave-active {
  transform: translateY(-12px);
  opacity: 0;
}
.item-enter-active,
.item-leave-active {
  transition: all 0.3s;
}
.item-enter,
.item-leave-active {
  transform: translateY(-12px);
  opacity: 0;
}
</style>
