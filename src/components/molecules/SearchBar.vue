<template>
  <div>
    <InputField v-model="query" placeholder="Search for news..." />
    <BaseButton @click="search">Search</BaseButton>
  </div>
</template>

<script lang="ts">
import InputField from '../atoms/BaseInputField.vue';
import BaseButton from '../atoms/BaseButton.vue';

export default {
  name: 'SearchBar',
  components: {
    InputField,
    BaseButton
  },
  data() {
    return {
      query: ''
    };
  },
  methods: {
    search() {
      //logic to search for news
    }
  }
};
</script>