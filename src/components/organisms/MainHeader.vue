<template>
  <header>
    <img src="@/assets/logo.svg" alt="Logo" />
    <SearchBar />
  </header>
</template>

<script>
import SearchBar from '../molecules/SearchBar.vue';

export default {
  name: 'MainHeader',
  components: {
    SearchBar
  }
};
</script>