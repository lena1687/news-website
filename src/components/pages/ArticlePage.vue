<template>
  <MainTemplate>
    <h1>ArticlePage</h1>
    <ArticleDetail />
  </MainTemplate>
</template>

<script lang="ts">
import MainTemplate from "../templates/MainTemplate.vue";
import ArticleDetail from "../organisms/ArticleDetail.vue";

export default {
  name: "ArticlePage",
  components: {
    MainTemplate,
    ArticleDetail,
  },
};
</script>
