<template>
  <MainHeader />
  <main>
    <NavMenu />
    <div class="main-content">
      <slot></slot>
    </div>
  </main>
  <MainFooter />
</template>

<script lang="ts">
import MainHeader from "../organisms/MainHeader.vue";
import MainFooter from "../organisms/MainFooter.vue";
import NavMenu from "@/components/molecules/NavMenu.vue";

export default {
  name: "MainTemplate",
  components: {
    NavMenu,
    MainHeader,
    MainFooter,
  },
};
</script>

<style lang="sass" scoped>
@import '@/assets/styles/templates/MainTemplate.sass'
</style>
