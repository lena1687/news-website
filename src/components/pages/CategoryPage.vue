<template>
  <MainTemplate>
    <h1>CategoryPage</h1>
    <ArticleList />
  </MainTemplate>
</template>

<script lang="ts">
import MainTemplate from "../templates/MainTemplate.vue";
import ArticleList from "../organisms/ArticleList.vue";

export default {
  name: "CategoryPage",
  components: {
    MainTemplate,
    ArticleList,
  },
};
</script>
