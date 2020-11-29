<script>
/*
 * What is this component? What does it do?
 */
import BaseHeadingH1 from "../components/base/BaseHeadingH1"

export default {
  name: "Thanks",
  components: {
    BaseHeadingH1,
  },
}
</script>

<template>
  <div>
    <BaseHeadingH1 class="capitalize">{{ $route.name }}</BaseHeadingH1>
    <p>I appreciate your message!</p>
    <p>I promise to respond as soon as possible!</p>
  </div>
</template>
