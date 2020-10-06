<template>
  <div class="relative">
    <div class="w-4 h-4 lg:w-6 lg:h-6 bg-red-500 absolute"></div>
    <h1
      class="text-3xl lg:text-4xl font-display font-bold ml-4 pt-1 lg:ml-6 lg:pt-3 mb-8"
    >
      <slot />
    </h1>
  </div>
</template>

<script>
export default {
  name: "BaseHeadingH1",
};
</script>
