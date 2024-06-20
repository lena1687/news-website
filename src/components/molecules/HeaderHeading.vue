<template>
  <div class="header-heading">
    <BaseIcon iconName="newspaper" size="42px" />
    <div class="header-heading__title">Reporter</div>
  </div>
</template>

<script lang="ts">
import BaseIcon from "@/components/atoms/BaseIcon.vue";

export default {
  name: "HeaderHeading",
  components: {
    BaseIcon,
  },
};
</script>

<style lang="sass" scoped>
@import '@/assets/styles/molecules/HeaderHeading.sass'
</style>
