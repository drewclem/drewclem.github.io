<template>
  <nav>
    <ul class="font-display font-medium uppercase text-center">
      <li
        class="text-2xl tracking-wider mb-3 opacity-75 hover:opacity-100 transition ease-in-out duration-75"
      >
        <router-link to="/">Home</router-link>
      </li>
      <li
        class="text-2xl tracking-wider mb-3 opacity-75 hover:opacity-100 transition ease-in-out duration-75"
      >
        <router-link to="/projects">Projects</router-link>
      </li>
      <li
        class="text-2xl tracking-wider mb-3 opacity-75 hover:opacity-100 transition ease-in-out duration-75"
      >
        <router-link to="/blog">Blog</router-link>
      </li>
      <li
        class="text-2xl tracking-wider mb-3 opacity-75 hover:opacity-100 transition ease-in-out duration-75"
      >
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "GlobalHeaderNav",
};
</script>

<style scoped></style>
