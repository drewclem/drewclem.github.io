<script>
/*
 * What is this component? What does it do?
 */
import BaseHeadingH1 from '../../components/base/BaseHeadingH1';
import Back from '../../assets/svgs/angle-double-left-solid.svg';

export default {
  name: 'BlogArticle',
  components: {
    BaseHeadingH1,
    Back,
  },
  data() {
    return {
      article: null,
    };
  },
  created() {
    this.fetchArticle();
  },
  methods: {
    async fetchArticle() {
      const res = await fetch(
        `https://dev.to/api/articles/drewclem/${this.$route.params.slug}`,
        {
          method: 'GET',
        }
      )
        .then((res) => res.json())
        .then((data) => (this.article = data));

      return res;
    },
  },
};
</script>

<template>
  <div>
    <div class="flex justify-between items-baseline">
      <BaseHeadingH1 class="capitalize">Blog</BaseHeadingH1>

      <router-link
        to="/blog"
        class="text-red-500 opacity-75 hover:opacity-100 flex items-center"
        ><Back class="w-5 h-5 mr-3" /> Back to Articles</router-link
      >
    </div>

    <section>
      <h1 class="text-3xl font-display font-bold mb-6">{{ article.title }}</h1>

      <div v-html="article.body_html" class="article-wrapper" />

      <router-link
        to="/blog"
        class="text-red-500 opacity-75 hover:opacity-100 flex items-center mt-10"
        ><Back class="w-5 h-5 mr-3" /> Back to Articles</router-link
      >
    </section>
  </div>
</template>

<style scoped>
  .highlight__panel {
    display: none;
  }
</style>
