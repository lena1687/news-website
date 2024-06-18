<template>
  <nav>
    <ul>
      <li
        v-for="category in categories"
        :key="category"
        :class="{ active: isActive(category) }"
        @click="navigateToCategory(category)"
      >
        {{ category }}
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { NewsCategory } from "@/types/newsTypes";
import { useNewsStore } from "@/stores/newsStore";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  name: "NavMenu",
  setup() {
    const router = useRouter();
    const route = useRoute();
    const newsStore = useNewsStore();
    const categories: NewsCategory[] = Object.values(NewsCategory);

    const isActive = (category: NewsCategory) => {
      return category === route.params.category;
    };

    const navigateToCategory = (category: NewsCategory) => {
      const country = route.params.country as string;
      newsStore.setActiveCategory(category);
      router.push({ path: `/${country}/category/${category}` });
    };

    return {
      categories,
      isActive,
      navigateToCategory,
    };
  },
});
</script>

<style scoped>
.active {
  font-weight: bold;
}
</style>
