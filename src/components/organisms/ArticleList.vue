<template>
  <div class="article-list">
    <div
      v-for="(article, index) in articles"
      :key="article.url + index"
      class="article-item"
    >
      <img
        :src="article.urlToImage"
        width="50px"
        height="50px"
        alt="Article Image"
      />
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
