<script>
import BaseHeadingH1 from '../components/base/BaseHeadingH1';

export default {
  name: 'Blog',
  components: {
    BaseHeadingH1,
  },
  created() {
    this.fetchArticles();
  },
  methods: {
    async fetchArticles() {
      await fetch('https://dev.to/api/articles?username=drewclem', {
        method: 'GET',
        API_key: '7qBg5cnAqx7g64iqzQccsZVF',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          console.log(response);
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<template>
  <div>
    <BaseHeadingH1 class="capitalize">{{ $route.name }}</BaseHeadingH1>
  </div>
</template>
