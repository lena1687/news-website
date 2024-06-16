<template>
  <div>
    <Heading :level="2">{{ article.title }}</Heading>
    <Paragraph>{{ article.description }}</Paragraph>
  </div>
</template>

<script lang="ts">
import Heading from '../atoms/BaseHeading.vue';
import Paragraph from '../atoms/BaseParagraph.vue';

export default {
  name: 'ArticleSummary',
  components: {
    Heading,
    Paragraph
  },
  props: {
    article: Object
  },
};
</script>
