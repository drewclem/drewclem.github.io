<template>
  <header class="bg-gray-200 flex flex-col justify-center">
    <router-link
      to="/"
      class="font-display font-black text-red-600 text-6xl text-center mb-8"
    >
      dC
    </router-link>

    <GlobalHeaderNav></GlobalHeaderNav>

    <GlobalHeaderSocialIcons></GlobalHeaderSocialIcons>
  </header>
</template>

<script>
import GlobalHeaderNav from "./GlobalHeaderNav";
import GlobalHeaderSocialIcons from "./GlobalHeaderSocialIcons";

export default {
  name: "GlobalHeader",
  components: {
    GlobalHeaderNav,
    GlobalHeaderSocialIcons,
  },
};
</script>

<style scoped>
header {
  position: fixed;
}

header a {
  letter-spacing: -0.1em;
}

@media (min-width: 1024px) {
  header {
    min-width: 250px;
    height: 100vh;
  }
}
</style>
