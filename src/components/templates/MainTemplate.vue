<template>
  <div>
    <MainHeader />
    <NavMenu />
    <main>
      <slot></slot>
    </main>
    <MainFooter />
  </div>
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
