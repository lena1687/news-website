<template>
  <MainTemplate>
    <h1>HomePage</h1>
    <div>
      <IconText iconName="calendar" size="32px"><CurrentTime /></IconText>
    </div>
    <ArticleList :articles="articles" />
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
