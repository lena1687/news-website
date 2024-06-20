<template>
  <button @click="$emit('click')" class="base-button">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: "BaseButton",
};
</script>

<style lang="sass" scoped>
@import '@/assets/styles/atoms/BaseButton.sass'
</style>
