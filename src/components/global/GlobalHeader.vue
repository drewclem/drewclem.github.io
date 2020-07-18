<template>
  <header
    class="w-screen md:w-auto md:bg-gray-200 absolute top-0 md:fixed flex md:items-center flex-col md:pt-24"
  >
    <div
      class="flex md:block bg-white md:bg-transparent z-50 flex-row justify-between px-4 md:px-0 md:mb-6"
      :class="[isActive ? 'shadow-md' : '']"
    >
      <router-link
        to="/"
        class="font-display font-black text-red-600 text-4xl md:text-6xl md:text-center mb-0 md:mb-8"
      >
        dC
      </router-link>

      <button
        @click="isActive = !isActive"
        class="md:hidden opacity-75 hover:opacity-100"
      >
        <Jedi v-if="!isActive" class="w-8" />
        <Close v-else class="w-6" />
      </button>
    </div>

    <div
      :class="[isActive ? 'mobile-nav-open' : 'mobile-nav-closed']"
      class="bg-gray-100 md:bg-transparent py-4"
    >
      <GlobalHeaderNav class="mb-12"></GlobalHeaderNav>

      <GlobalHeaderSocialIcons></GlobalHeaderSocialIcons>
    </div>
  </header>
</template>

<script>
import GlobalHeaderNav from "./GlobalHeaderNav";
import GlobalHeaderSocialIcons from "./GlobalHeaderSocialIcons";
import Jedi from "../../assets/svgs/jedi-order-brands.svg";
import Close from "../../assets/svgs/times-circle-regular.svg";

export default {
  name: "GlobalHeader",
  components: {
    GlobalHeaderNav,
    GlobalHeaderSocialIcons,
    Jedi,
    Close,
  },
  data: function() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleMenu() {
      if (this.isActive == true) {
        return this.isActive == false;
      } else {
        return this.isActive == true;
      }
    },
  },
};
</script>

<style scoped>
header a {
  letter-spacing: -0.1em;
}

@media (min-width: 768px) {
  header {
    min-width: 200px;
    height: 100vh;
  }
}

@media (max-width: 767px) {
  .mobile-nav-closed {
    margin-top: -350px;
    transition: 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .mobile-nav-open {
    margin-top: 0px;
    transition: 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
}
</style>
