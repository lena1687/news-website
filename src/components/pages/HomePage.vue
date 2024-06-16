<template>
  <MainTemplate>
    <ArticleList />
  </MainTemplate>
</template>

<script>
import MainTemplate from '../templates/MainTemplate.vue';
import ArticleList from '../organisms/ArticleList.vue';

export default {
  name: 'HomePage',
  components: {
    MainTemplate,
    ArticleList
  }
};
</script>