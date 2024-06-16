<template>
  <button :class="className" @click="onClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'BaseButton',
  props: {
    className: String,
    onClick: Function
  }
};
</script>