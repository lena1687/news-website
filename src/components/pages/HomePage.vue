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
import { useRoute } from "vue-router";
import { NewsCategory } from "@/types/newsTypes";
import { CountryCodes } from "@/types/commonTypes";

export default {
  name: "HomePage",
  components: {
    MainTemplate,
    ArticleList,
  },
  setup() {
    const route = useRoute();
    const newsStore = useNewsStore();
    const articles = computed(() => newsStore.getArticles);

    onMounted(() => {
      const country = (route.params.country as CountryCodes) || CountryCodes.US;
      const category = NewsCategory.General;
      newsStore.initializeStore(country, category);
    });

    return {
      articles,
    };
  },
};
</script>
