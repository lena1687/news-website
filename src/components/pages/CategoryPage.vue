<template>
  <MainTemplate>
    <div>
      <h2>{{ activeCategory }}</h2>
      <ArticleList :articles="articles" />
    </div>
  </MainTemplate>
</template>

<script lang="ts">
import { defineComponent, computed, watch } from "vue";
import { useRoute } from "vue-router";
import { useNewsStore } from "@/stores/newsStore";
import { NewsCategory } from "@/types/newsTypes";
import ArticleList from "@/components/organisms/ArticleList.vue";
import MainTemplate from "@/components/templates/MainTemplate.vue";

export default defineComponent({
  name: "CategoryPage",
  components: {
    MainTemplate,
    ArticleList,
  },
  setup() {
    const route = useRoute();
    const newsStore = useNewsStore();

    const activeCategory = computed(() => {
      return (route.params.category as NewsCategory) || NewsCategory.General;
    });

    const articles = computed(() => newsStore.getArticles);

    watch(
      activeCategory,
      (newCategory) => {
        if (newsStore.getActiveCategory !== newCategory) {
          newsStore.setActiveCategory(newCategory);
        }
      },
      { immediate: true }
    );

    return {
      activeCategory,
      articles,
    };
  },
});
</script>
