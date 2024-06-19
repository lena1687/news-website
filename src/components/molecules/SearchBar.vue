<template>
  <div class="search-bar">
    <InputField v-model="query" @enter="emitSearch" />
    <BaseButton @click="emitSearch">Search</BaseButton>
  </div>
</template>

<script lang="ts">
import InputField from "../atoms/BaseInputField.vue";
import BaseButton from "../atoms/BaseButton.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SearchBar",
  props: {
    placeholder: {
      type: String,
      default: "Search here",
    },
    value: {
      type: String,
      default: "",
    },
  },
  components: {
    InputField,
    BaseButton,
  },
  setup(props, { emit }) {
    const query = ref(props.value);

    const emitSearch = () => {
      emit("searchQuery", query.value);
    };

    return {
      query,
      emitSearch,
    };
  },
});
</script>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;
}
</style>
