<template>
  <div class="article-list">
    <div
      v-for="(article, index) in articles"
      :key="article.url + index"
      class="article-item"
    >
      <h2>{{ article.title }}</h2>
      <p>{{ article.description }}</p>
      <a :href="article.url" target="_blank">Read more</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Article } from "@/types/newsTypes";

export default defineComponent({
  name: "ArticleList",
  props: {
    articles: {
      type: Array as PropType<Article[]>,
      required: true,
    },
  },
});
</script>
