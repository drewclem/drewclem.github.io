<script>
import BaseHeadingH1 from '../components/base/BaseHeadingH1';

export default {
  name: 'Contact',
  components: {
    BaseHeadingH1,
  },
};
</script>

<template>
  <div>
    <BaseHeadingH1 class="capitalize">{{ $route.name }}</BaseHeadingH1>
  </div>
</template>
