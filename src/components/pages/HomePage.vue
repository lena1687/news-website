<template>
  <MainTemplate>
    <h1>HomePage</h1>
    <ArticleList :articles="articles" />
  </MainTemplate>
</template>

<script lang="ts">
import MainTemplate from "../templates/MainTemplate.vue";
import ArticleList from "../organisms/ArticleList.vue";
import { computed, watch } from "vue";
import { useNewsStore } from "@/stores/newsStore";

export default {
  name: "HomePage",
  components: {
    MainTemplate,
    ArticleList,
  },
  setup() {
    const newsStore = useNewsStore();
    const articles = computed(() => newsStore.getArticles);
    const params = computed(() => newsStore.params);

    watch(
      params,
      (newParams) => {
        newsStore.fetchArticles(newParams);
      },
      { immediate: true }
    );

    return {
      articles,
    };
  },
};
</script>
