<template>
  <div class="flex flex-col items-center">
    <a
      href="https://github.com/drewclem/"
      class="mb-4"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Github />
    </a>
    <a
      href="https://twitter.com/drewclemcr8"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Twitter />
    </a>
  </div>
</template>

<script>
import Github from "../../assets/svgs/github-brands.svg";
import Twitter from "../../assets/svgs/twitter-brands.svg";

export default {
  name: "GlobalHeaderSocialIcons",
  components: {
    Github,
    Twitter,
  },
};
</script>

<style scoped>
a svg {
  width: 18px;
  height: 18px;
  @apply opacity-75 transition ease-in-out duration-150;
}

a:hover svg {
  @apply opacity-100;
}
</style>
