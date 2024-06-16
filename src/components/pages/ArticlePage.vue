<template>
  <MainTemplate>
    <ArticleDetail />
  </MainTemplate>
</template>

<script>
import MainTemplate from '../templates/MainTemplate.vue';
import ArticleDetail from '../organisms/ArticleDetail.vue';

export default {
  name: 'ArticlePage',
  components: {
    MainTemplate,
    ArticleDetail
  }
};
</script>