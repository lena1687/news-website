<template>
  <MainTemplate>
    <ArticleList :articles="articles" />
  </MainTemplate>
</template>

<script lang="ts">
import MainTemplate from "../templates/MainTemplate.vue";
import ArticleList from "../organisms/ArticleList.vue";
import { computed, onMounted } from "vue";
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

    onMounted(() => {
      newsStore.fetchArticles();
    });

    return {
      articles,
    };
  },
};
</script>
