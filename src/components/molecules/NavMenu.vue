<template>
  <nav>
    <ul>
      <li
        v-for="category in categories"
        :key="category"
        :class="{ active: category === activeCategory }"
      >
        <router-link :to="`/category/${category}`">{{ category }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { NewsCategory } from "@/types/newsTypes";

export default defineComponent({
  name: "NavMenu",
  props: {
    activeCategory: {
      type: String as PropType<NewsCategory>,
      required: true,
    },
  },
  setup() {
    const categories = Object.values(NewsCategory);

    return {
      categories,
    };
  },
});
</script>
