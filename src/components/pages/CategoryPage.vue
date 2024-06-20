<template>
  <MainTemplate>
    <div class="category-page">
      <div class="category-page__title">
        <span>{{ activeCategory }}</span>
      </div>
      <ArticleList :articles="articles" />
    </div>
  </MainTemplate>
</template>

<script lang="ts">
import { defineComponent, computed, watch } from "vue";
import { useNewsStore } from "@/stores/newsStore";
import ArticleList from "@/components/organisms/ArticleList.vue";
import MainTemplate from "@/components/templates/MainTemplate.vue";

export default defineComponent({
  name: "CategoryPage",
  components: {
    MainTemplate,
    ArticleList,
  },
  setup() {
    const newsStore = useNewsStore();
    const articles = computed(() => newsStore.articles);
    const params = computed(() => newsStore.params);

    const activeCategory = computed(() => {
      return newsStore.getParams.category;
    });

    watch(
      params,
      (newParams) => {
        newsStore.fetchArticles(newParams);
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

<style lang="sass" scoped>
@import '@/assets/styles/pages/CategoryPage.sass'
</style>
