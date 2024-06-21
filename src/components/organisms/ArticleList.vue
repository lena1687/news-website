<template>
  <div v-if="articles.length === 0">
    <IconText iconName="exclamation-triangle" size="16px"
      >No articles available.</IconText
    >
  </div>
  <div v-else class="article-list">
    <a
      class="article-item"
      v-for="(article, index) in articles"
      :key="article.url + index"
      :href="article.url"
      target="_blank"
    >
      <img class="article-img" :src="article.urlToImage" :alt="article.title" />
      <div class="article-content">
        <div class="article_title">
          {{ article.title }}
        </div>
        <span class="article-date">{{ formatDate(article.publishedAt) }}</span>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { type Article } from "@/types";
import { formatDate } from "@/utils/common";
import IconText from "@/components/molecules/IconText.vue";

export default defineComponent({
  name: "ArticleList",
  components: { IconText },
  methods: { formatDate },
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
