<template>
  <p :class="className">
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: 'BaseParagraph',
  props: {
    className: {
      type: String,
      default: ''
    }
  }
};
</script>