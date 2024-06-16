<template>
  <component :is="`h${level}`" :class="className">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'BaseHeading',
  props: {
    level: {
      type: Number,
      default: 1,
      validator(value) {
        return value >= 1 && value <= 6;
      }
    },
    className: {
      type: String,
      default: ''
    }
  }
};
</script>