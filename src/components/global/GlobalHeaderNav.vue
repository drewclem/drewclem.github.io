<template>
  <nav>
    <ul class="font-display font-light uppercase text-center">
      <li class="text-lg md:text-2xl tracking-wider mb-6">
        <router-link
          class="opacity-75 hover:opacity-100 transition ease-in-out duration-75"
          to="/projects"
          >Projects</router-link
        >
      </li>
      <li class="text-lg md:text-2xl tracking-wider mb-6">
        <router-link
          class="opacity-75 hover:opacity-100 transition ease-in-out duration-75"
          to="/blog"
          >Blog</router-link
        >
      </li>
      <li class="text-lg md:text-2xl tracking-wider mb-6">
        <router-link
          class="opacity-75 hover:opacity-100 transition ease-in-out duration-75"
          to="/contact"
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
  transform: rotate(15deg);
  @apply bg-red-600 text-white font-bold opacity-100
    px-3 py-1;
}
</style>
