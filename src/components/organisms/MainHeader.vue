<template>
  <header>
    <DropdownCountry />
    <HeaderHeading />
    <SearchBar :value="query" @searchQuery="searchNews" />
  </header>
</template>

<script lang="ts">
import SearchBar from "../molecules/SearchBar.vue";
import HeaderHeading from "@/components/molecules/HeaderHeading.vue";
import DropdownCountry from "@/components/organisms/DropdownCountry.vue";
import { useRouter } from "vue-router";
import { useNewsStore } from "@/stores/newsStore";
import {computed, defineComponent} from "vue";

export default defineComponent ({
  name: "MainHeader",
  components: {
    DropdownCountry,
    HeaderHeading,
    SearchBar,
  },

  setup() {
    const router = useRouter();
    const newsStore = useNewsStore();
    const query = computed(() => newsStore.params.query);

    const searchNews = (query: string) => {
      router.push({
        query: { search: query },
      });
    };

    return {
      searchNews,
      query,
    };
  },
});
</script>

<style lang="sass" scoped>
@import '@/assets/styles/organisms/MainHeader.sass'
</style>
