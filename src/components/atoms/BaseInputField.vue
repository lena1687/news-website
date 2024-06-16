<template>
  <input :type="type" :value="value" :placeholder="placeholder" />
</template>

<script lang="ts">
export default {
  name: 'InputField',
  props: {
    type: String,
    value: String,
    placeholder: String
  }
};
</script>