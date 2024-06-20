<template>
  <div class="article-list">
    <article
      class="article-item"
      v-for="(article, index) in articles"
      :key="article.url + index"
      @click="redirectTo(article.url)"
    >
      <img class="article-img" :src="article.urlToImage" :alt="article.title" />
      <div class="article-content">
        <div class="article_title">
          {{ article.title }}
        </div>
        <span class="article-date">{{ formatDate(article.publishedAt) }}</span>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Article } from "@/types/newsTypes";
import { formatDate, redirectTo } from "@/utils/common";

export default defineComponent({
  name: "ArticleList",
  methods: { formatDate, redirectTo },
  props: {
    articles: {
      type: Array as PropType<Article[]>,
      required: true,
    },
  },
});
</script>

<style lang="sass" scoped>
@import '@/assets/styles/organisms/ArticleList.sass'
</style>
