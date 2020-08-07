<template>
  <div class="text-blue-900 font-body" id="app">
    <GlobalHeader />

    <main class="mt-24 lg:mt-20 flex px-4 lg:px-0">
      <router-view />
    </main>
  </div>
</template>

<script>
import GlobalHeader from "./components/global/GlobalHeader";

export default {
  name: "App",
  components: {
    GlobalHeader,
  },
};
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
    max-width: 600px;
  }
}
</style>
