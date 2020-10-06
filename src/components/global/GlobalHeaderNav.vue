<template>
  <nav>
    <ul class="font-light text-center uppercase font-display">
      <li class="mb-6 text-lg tracking-wider md:text-2xl">
        <router-link
          class="transition duration-150 ease-in-out opacity-75 hover:opacity-100 hover:font-medium"
          to="/projects"
          >Projects</router-link
        >
      </li>
      <li class="mb-6 text-lg tracking-wider md:text-2xl">
        <router-link
          class="transition duration-150 ease-in-out opacity-75 hover:opacity-100 hover:font-medium"
          to="/blog"
          >Blog</router-link
        >
      </li>
      <li class="mb-6 text-lg tracking-wider md:text-2xl">
        <router-link
          class="transition duration-150 ease-in-out opacity-75 hover:opacity-100 hover:font-medium"
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

<style lang="postcss" scoped>
.router-link-active {
  @apply bg-red-500 text-white font-bold opacity-100
    px-3 py-1;
}
</style>
