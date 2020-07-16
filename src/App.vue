<template>
  <div class="text-blue-900 font-body" id="app">
    <GlobalHeader />

    <main>
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

<style lang="postcss" scope></style>
