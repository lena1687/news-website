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
import { CountryCodes } from "@/types/commonTypes";

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
      const category = route.params.category as NewsCategory;
      return Object.values(NewsCategory).includes(category as NewsCategory)
        ? (category as NewsCategory)
        : NewsCategory.General;
    });

    const country = computed(() => {
      const countryParam = route.params.country as CountryCodes;
      return Object.values(CountryCodes).includes(countryParam as CountryCodes)
        ? (countryParam as CountryCodes)
        : CountryCodes.US;
    });

    newsStore.initializeStore(country.value, activeCategory.value);

    watch(
      [activeCategory, country],
      ([newCategory, newCountry]) => {
        if (
          newsStore.getActiveCategory !== newCategory ||
          newsStore.getCountry !== newCountry
        ) {
          newsStore.setActiveCategory(newCategory);
          newsStore.setCountry(newCountry);
        }
      },
      { immediate: true }
    );

    const articles = computed(() => newsStore.articles);

    return {
      activeCategory,
      country,
      articles,
    };
  },
});
</script>
