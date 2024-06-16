<template>
  <div :class="['icon-text', className]">
    <font-awesome-icon :icon="iconObject" class="icon" :style="{ fontSize: size }" />
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import {IconPrefix} from "@fortawesome/free-solid-svg-icons";

export default defineComponent({
  name: 'BaseIcon',
  components: {
    FontAwesomeIcon
  },
  props: {
    iconName: {
      type: String as PropType<IconName>,
      required: true
    },
    prefix: {
      type: String as PropType<IconPrefix>,
      default: 'fa'
    },
    size: {
      type: String,
      required: false,
      default: '1rem'
    },
    className: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const iconObject = computed(() => [props.prefix, props.iconName]);
    return {
      iconObject
    };
  }
});
</script>