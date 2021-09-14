<script>
import BaseHeadingH1 from '../../components/base/BaseHeadingH1';

export default {
  name: 'Blog',
  components: {
    BaseHeadingH1,
  },
  data() {
    return {
      articles: [],
    };
  },
  created() {
    this.fetchArticles();
  },
  methods: {
    async fetchArticles() {
      const res = await fetch('https://dev.to/api/articles?username=drewclem', {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((data) => this.articles = data.filter(item => !item.organization));

      return res;
    },
  },
};
</script>

<template>
  <div>
    <BaseHeadingH1 class="capitalize">{{ $route.name }}</BaseHeadingH1>

    <div class="md:w-3/4">
      <article
        class="pb-8 mb-8 border-b border-gray-200"
        v-for="article in articles"
        :key="article.id"
      >
        <p class="text-red-500 text-sm mb-1">
          {{ article.readable_publish_date }}
        </p>

        <h2 class="text-lg font-bold font-display mb-4 ">
          {{ article.title }}
        </h2>

        <p class="opacity-75 mb-2" v-html="article.description" />

        <router-link
          class="text-red-500 opacity-75 text-sm hover:opacity-100 underline font-display"
          :to="`blog/${article.slug}`"
          >Read More</router-link
        >
      </article>
    </div>
  </div>
</template>
