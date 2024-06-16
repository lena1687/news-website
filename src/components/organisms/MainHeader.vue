<template>
  <header>
    <IconText iconName="calendar" size="2rem"><CurrentTime/></IconText>
    <HeaderHeading />
    <SearchBar />
  </header>
</template>

<script lang="ts">
import SearchBar from '../molecules/SearchBar.vue';
import CurrentTime from "@/components/atoms/CurrentTime.vue";
import HeaderHeading from "@/components/molecules/HeaderHeading.vue";
import IconText from "@/components/molecules/IconText.vue";

export default {
  name: 'MainHeader',
  components: {
    IconText,
    HeaderHeading,
    CurrentTime,
    SearchBar
  }
};
</script>