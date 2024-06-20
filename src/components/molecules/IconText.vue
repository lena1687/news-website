<template>
  <div class="icon-text">
    <BaseIcon :iconName="iconName" size="32px" />
    <span class="text" :style="{ fontSize: textSize }"><slot></slot></span>
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
    const iconSize = computed(() => props.size);
    const textSize = computed(() => `calc(${props.size} * 0.75)`);

    return {
      iconSize,
      textSize,
    };
  },
});
</script>
