<template>
  <nav>
    <ul>
      <li v-for="category in categories" :key="category">
        <router-link :to="`/category/${category}`">{{ category }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { NewsCategory } from "@/shared/enums/newsCategory";

export default defineComponent({
  name: "NavMenu",
  computed: {
    categories(): NewsCategory[] {
      return Object.values(NewsCategory);
    },
  },
});
</script>
