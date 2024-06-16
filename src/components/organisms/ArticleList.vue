<template>
  <div>
    <ArticleSummary v-for="article in articles" :key="article.id" :article="article" />
  </div>
</template>

<script>
import ArticleSummary from '../molecules/ArticleSummary.vue';

export default {
  name: 'ArticleList',
  components: {
    ArticleSummary
  },
  setup() {
    //load articles from store
  },
  computed: {
    articles() {
      return [];
    }
  }
};
</script>