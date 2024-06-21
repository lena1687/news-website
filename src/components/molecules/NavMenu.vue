<template>
  <nav class="navbar">
    <button class="navbar__toggle" @click="toggleMenu">
      <BaseIcon icon-name="bars" size="32px" />
    </button>
    <ul :class="{ navbar__menu: true, 'navbar__menu-open': isMenuOpen }">
      <li
        v-for="category in categories"
        :key="category"
        :class="{
          navbar__item: true,
          'navbar__item-active': isActive(category),
        }"
        @click="navigateToCategory(category)"
      >
        <span class="navbar__link">{{ category }}</span>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { NewsCategory } from "@/types";
import { useRouter } from "vue-router";
import { useNewsStore } from "@/stores/newsStore";
import BaseIcon from "@/components/atoms/BaseIcon.vue";

export default defineComponent({
  name: "NavMenu",
  components: { BaseIcon },
  setup() {
    const router = useRouter();
    const categories: NewsCategory[] = Object.values(NewsCategory);
    const newsStore = useNewsStore();
    const category = computed(() => newsStore.params.category);
    const isMenuOpen = ref(false);

    const isActive = (currentCategory: NewsCategory) => {
      return currentCategory === category.value;
    };

    const navigateToCategory = (newCategory: NewsCategory) => {
      const name = newCategory === NewsCategory.General ? "home" : "category";
      router.push({ params: { category: newCategory }, name });
    };

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    return {
      categories,
      isActive,
      navigateToCategory,
      toggleMenu,
      isMenuOpen,
    };
  },
});
</script>

<style lang="sass" scoped>
@import '@/assets/styles/molecules/NavMenu.sass'
</style>
