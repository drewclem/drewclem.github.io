<template>
  <div class="text-blue-900 font-body" id="app">
    <GlobalHeader />

    <main class="flex px-4 mt-24 lg:mt-20 lg:px-0 pb-32">
      <router-view />
    </main>
  </div>
</template>

<script>
import GlobalHeader from "./components/global/GlobalHeader"

export default {
  name: "App",
  components: {
    GlobalHeader,
  },
  metaInfo: {
    title: "Drew Clements | Frontend Engineer",
    meta: [
      {
        vmid: "description",
        name: "description",
        content:
          "Drew Clements is a frontend engineer that currently works at Nacelle.",
      },
      {
        property: "og:title",
        content: "Drew Clements | Frontend Engineer",
        vmid: "og:title",
      },
      {
        property: "og:description",
        content:
          "Drew Clements is a frontend engineer that currently works at Nacelle.",
        vmid: "og:description",
      },
      {
        property: "og:image",
        content: "./og-image.png",
        vmid: "og:image",
      },
      {
        property: "twitter:card",
        content: "summary_large_image",
        vmid: "twitter:card",
      },
      {
        property: "twitter:creator",
        content: "@drewclemcr8",
        vmid: "twitter:creator",
      },
      {
        property: "twitter:title",
        content: "Drew Clements | Frontend Engineer",
        vmid: "twitter:title",
      },
      {
        property: "twitter:description",
        content:
          "Drew Clements is a frontend engineer that currently works at Nacelle.",
        vmid: "twitter:description",
      },
      {
        property: "twitter:image",
        content: "./og-image.png",
        vmid: "twitter:image",
      },
    ],
  },
}
</script>

<style scoped>
main div {
  width: 100%;
}

header {
  z-index: 9999999;
}

@media (min-width: 768px) {
  main {
    margin-left: 200px;
  }

  main div {
    margin: 0 auto;
    max-width: 680px;
  }
}
</style>
