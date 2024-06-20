<template>
  <div class="icon-text">
    <BaseIcon :iconName="iconName" :size="iconSize" />
    <div class="text" :style="{ fontSize: textSize }"><slot></slot></div>
  </div>
</template>

<script lang="ts">
import BaseIcon from "@/components/atoms/BaseIcon.vue";
import { defineComponent, computed, PropType } from "vue";
import { IconName } from "@fortawesome/fontawesome-svg-core";

export default defineComponent({
  name: "IconText",
  components: {
    BaseIcon,
  },
  props: {
    iconName: {
      type: String as PropType<IconName>,
      required: true,
    },
    size: {
      type: String,
      required: false,
      default: "16px",
    },
  },
  setup(props) {
    const textSize = computed(() => props.size);
    const iconSize = computed(() => `calc(${props.size} * 0.9)`);

    return {
      textSize,
      iconSize,
    };
  },
});
</script>

<style lang="sass" scoped>
@import '@/assets/styles/molecules/IconText.sass'
</style>
