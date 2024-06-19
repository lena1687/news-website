<template>
  <button @click="$emit('click')" :class="className">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: "BaseButton",
  props: {
    className: String,
  },
};
</script>
