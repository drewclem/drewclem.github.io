<template>
  <nav>
    <ul class="font-display font-light uppercase text-center">
      <li
        class="text-lg md:text-2xl tracking-wider mb-6 transition ease-in-out duration-75"
      >
        <router-link class="opacity-75 hover:opacity-100" to="/projects"
          >Projects</router-link
        >
      </li>
      <li
        class="text-lg md:text-2xl tracking-wider mb-6 transition ease-in-out duration-75"
      >
        <router-link class="opacity-75 hover:opacity-100" to="/blog"
          >Blog</router-link
        >
      </li>
      <li
        class="text-lg md:text-2xl tracking-wider mb-6 transition ease-in-out duration-75"
      >
        <router-link class="opacity-75 hover:opacity-100" to="/contact"
          >Contact</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "GlobalHeaderNav",
};
</script>

<style scoped>
.router-link-active {
  @apply font-bold opacity-100;
}
</style>
