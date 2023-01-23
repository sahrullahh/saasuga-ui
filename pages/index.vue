<script>
import CustomUrlInput from "~/components/CustomUrlInput.vue";
export default {
  auth: "guest",
  components: { CustomUrlInput },
  name: "Home",
  // method data for define variable
  data() {
    return {
      url: "",
      generate: true,
      alert: false,
      alertMessage: "",
      seo: {
        title: "Saasuga",
        longTitle: "Saasuga - Shorten URL Secure",
        description:
          "Make your url as many people expect, Try now for free forever.",
        icons: "",
        image: "",
      },
    };
  },

  // head for use meta tag SEO

  head() {
    return {
      title: this.seo.longTitle,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: this.seo.description,
        },
        {
          property: "og:title",
          content: this.seo.title,
        },
        {
          property: "og:description",
          content: this.seo.description,
        },
        {
          property: "og:image",
          content: this.seo.image,
        },
        {
          property: "twitter:title",
          content: this.seo.title,
        },
        {
          property: "twitter:description",
          content: this.seo.description,
        },
        {
          property: "twitter:image",
          content: this.seo.image,
        },
      ],
    };
  },

  // action methods execution
  methods: {
    submit: function (url) {
      if (url.includes("https://") || url.includes("http://")) {
        this.alert = false;
        if (url.includes("https://")) {
          this.alert = false;
        } else {
          this.alert = true;
          this.alertMessage =
            "We do not recommend unsafe websites, for personal safety.";
        }
      } else {
        this.alert = true;
        this.alertMessage = "Invalid url, please fill in correctly.";
      }
    },
    setActive: function (isactive) {
      this.generate = isactive;
    },
  },
  mounted() {
    this.$store.commit("navbar/inLogin", false);
  },
};
</script>
<template>
  <div class="container max-w-6xl mx-auto lg:p-0 p-5">
    <div class="form text-center lg:mt-20 mt-10 space-y-5">
      <div class="text-left space-y-5">
        <h2 class="font-bold tracking-tighter text-gray-200 text-5xl max-w-2xl">
          Make your url short easily and quickly to accessable
        </h2>
        <p class="text-lg font-semibold text-gray-300">
          Make your url as many people expect, Try now for free forever.
        </p>
      </div>
      <!-- start box -->
      <div class="">
        <div class="flex">
          <button
            @click="setActive(true)"
            :class="{
              'text-green-800 bg-white': generate,
              ' bg-gray-100 ': !generate,
            }"
            class="px-4 py-3 text-gray-500 rounded-md rounded-br-none rounded-bl-none"
          >
            <i class="bi bi-gear"></i>
            <span class="ml-2"
              >Auto-Generate
              <!-- <span
                class="bg-green-300 rounded-md p-2 text-xs text-green-800 ml-2"
                >Free</span
              > -->
            </span>
          </button>
          <button
            @click="setActive(false)"
            :class="{
              'text-green-800 bg-white ': !generate,
              ' bg-gray-100 ': generate,
            }"
            class="px-4 py-3 text-gray-500 rounded-md rounded-br-none rounded-bl-none"
          >
            Customize url
            <!-- <span
              class="bg-yellow-200 rounded-md p-2 text-xs text-green-800 ml-3"
              >Free 1 month</span
            > -->
          </button>
        </div>

        <div
          class="box transition-all rounded-tl-none bg-white shadow border border-t-0 w-full text-left space-y-5 p-5 rounded-md pb-7"
        >
          <div class="space-y-5">
            <h2 class="font-semibold text-gray-500">
              <i class="bi bi-link-45deg"></i> Enter or paste your long url
              here, to shorten your url
            </h2>
            <div class="input-box-url">
              <input
                type="url"
                v-model="url"
                autocomplete="off"
                class="w-full p-3 border text-green-500 bg-gray-100 font-semibold outline-none rounded-md"
                placeholder=""
                pattern="https://.*"
              />
            </div>
            <Alert :message="alertMessage" v-show="alert" />
          </div>
          <!-- custom input components -->
          <CustomUrlInput v-if="!generate" />
          <button
            @click="submit(url)"
            class="bg-green-300 shadow-lg shadow-green-300/50 px-5 py-3 rounded-md text-green-800"
          >
            Create, short url
          </button>
        </div>
      </div>
      <!-- end box -->
    </div>
    <Footer title="Saasuga" />
  </div>
</template>
