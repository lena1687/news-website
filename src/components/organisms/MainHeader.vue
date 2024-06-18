<template>
  <header>
    <div>
      <IconText iconName="calendar" size="2rem"><CurrentTime /></IconText>
      <HeaderHeading />
      <SearchBar />
      <DropdownCountry />
    </div>
    <div>
      <NavMenu />
    </div>
  </header>
</template>

<script lang="ts">
import SearchBar from "../molecules/SearchBar.vue";
import CurrentTime from "@/components/atoms/CurrentTime.vue";
import HeaderHeading from "@/components/molecules/HeaderHeading.vue";
import IconText from "@/components/molecules/IconText.vue";
import NavMenu from "@/components/molecules/NavMenu.vue";
import DropdownCountry from "@/components/organisms/DropdownCountry.vue";

export default {
  name: "MainHeader",
  components: {
    DropdownCountry,
    NavMenu,
    IconText,
    HeaderHeading,
    CurrentTime,
    SearchBar,
  },
};
</script>
