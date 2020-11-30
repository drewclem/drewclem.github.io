<script>
import BaseHeadingH1 from "../components/base/BaseHeadingH1"

export default {
  name: "Contact",
  components: {
    BaseHeadingH1,
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        comment: "",
      },
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&")
    },
    handleSubmit() {
      fetch("/", {
        method: "post",
        header: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": "contact",
          ...this.form,
        }),
      })
        .then(res => {
          if (res.status === 200) {
            console.log("success")
            this.$router.push("/contact/thanks")
          } else {
            console.log("error")
          }
        })
        .catch(e => console.error(e))
    },
  },
}
</script>

<template>
  <div>
    <BaseHeadingH1 class="capitalize">{{ $route.name }}</BaseHeadingH1>

    <form
      class="flex flex-col"
      name="contact"
      method="POST"
      @submit.prevent="handleSubmit"
      :data-netlify="true"
    >
      <input type="hidden" name="form-name" value="contact" />

      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="flex flex-col">
          <label class="text-lg font-bold mb-3" for="name">Name</label>
          <input
            id="name"
            type="text"
            class="border border-gray-300 p-2"
            v-model="form.name"
          />
        </div>

        <div class="flex flex-col">
          <label class="text-lg font-bold mb-3" for="email">Email</label>
          <input
            id="email"
            type="email"
            class="border border-gray-300 p-2"
            v-model="form.email"
          />
        </div>
      </div>

      <div class="flex flex-col mb-12">
        <label class="text-lg font-bold mb-3" for="comment">Comment</label>
        <textarea
          id="comment"
          class="border border-gray-300 p-2"
          rows="8"
          v-model="form.comment"
        />
      </div>

      <p class="hidden">
        <label>
          Don’t fill this out if you're human:
          <input name="bot-field" />
        </label>
      </p>

      <button class="btn w-32">Send</button>
    </form>
  </div>
</template>
