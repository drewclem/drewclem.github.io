<script>
import BaseHeadingH1 from "../components/base/BaseHeadingH1"

export default {
  name: "Contact",
  components: {
    BaseHeadingH1,
  },
  data() {
    return {
      name: "",
      email: "",
      comment: "",
    }
  },
}
</script>

<template>
  <div>
    <BaseHeadingH1 class="capitalize">{{ $route.name }}</BaseHeadingH1>

    <form
      class="flex flex-col"
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/contact/thanks"
    >
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="flex flex-col">
          <label class="text-lg font-bold mb-3" for="name">Name</label>
          <input
            id="name"
            type="text"
            class="border border-gray-300 p-2"
            v-model="name"
          />
        </div>

        <div class="flex flex-col">
          <label class="text-lg font-bold mb-3" for="email">Email</label>
          <input
            id="email"
            type="email"
            class="border border-gray-300 p-2"
            v-model="email"
          />
        </div>
      </div>

      <div class="flex flex-col mb-12">
        <label class="text-lg font-bold mb-3" for="comment">Comment</label>
        <textarea
          id="comment"
          class="border border-gray-300 p-2"
          rows="8"
          v-model="comment"
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
