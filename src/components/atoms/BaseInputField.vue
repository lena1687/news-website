<template>
  <input
    class="base-input-field"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    @keyup.enter="$emit('enter')"
    type="text"
    :placeholder="placeholder"
  />
</template>

<script lang="ts">
export default {
  name: "InputField",
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="sass" scoped>
@import '@/assets/styles/atoms/BaseInputField.sass'
</style>
