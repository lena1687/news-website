<template>
  <div>
    <BaseIcon iconName="newspaper" size="2rem" />
    <BaseHeading :level="1">Reporter</BaseHeading>
  </div>
</template>


<script lang="ts">
import BaseHeading from "@/components/atoms/BaseHeading.vue";
import BaseIcon from "@/components/atoms/BaseIcon.vue";

export default {
  name: 'HeaderHeading',
  components: {
    BaseIcon,
    BaseHeading
  }
};
</script>