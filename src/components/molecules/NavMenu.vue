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
import { computed, defineComponent } from "vue";
import { NewsCategory } from "@/types/newsTypes";
import { useRouter } from "vue-router";
import { useNewsStore } from "@/stores/newsStore";

export default defineComponent({
  name: "NavMenu",
  setup() {
    const router = useRouter();
    const categories: NewsCategory[] = Object.values(NewsCategory);
    const newsStore = useNewsStore();
    const category = computed(() => newsStore.params.category);

    const isActive = (currentCategory: NewsCategory) => {
      return currentCategory === category.value;
    };

    const navigateToCategory = (newCategory: NewsCategory) => {
      const name = newCategory === NewsCategory.General ? "home" : "category";
      router.push({ params: { category: newCategory }, name });
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
