<template>
  <input
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
