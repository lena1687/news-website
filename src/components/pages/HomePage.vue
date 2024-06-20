<template>
  <MainTemplate>
    <div class="home-page">
      <div class="current-time-wrap">
        <IconText iconName="calendar" size="16px"><CurrentTime /></IconText>
      </div>
      <div class="home-page__title">
        <h1>Tops News</h1>
      </div>
      <ArticleList :articles="articles" />
    </div>
  </MainTemplate>
</template>

<script lang="ts">
import MainTemplate from "../templates/MainTemplate.vue";
import ArticleList from "../organisms/ArticleList.vue";
import { computed, watch } from "vue";
import { useNewsStore } from "@/stores/newsStore";
import IconText from "@/components/molecules/IconText.vue";
import CurrentTime from "@/components/atoms/CurrentTime.vue";

export default {
  name: "HomePage",
  components: {
    CurrentTime,
    IconText,
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

<style lang="sass" scoped>
@import '@/assets/styles/pages/HomePage.sass'
</style>
