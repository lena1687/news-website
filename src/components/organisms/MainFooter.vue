<template>
  <footer class="footer">
    <div class="footer-copyright">&copy; 2024 News Website</div>
    <div class="footer-media">
      <a class="footer-media__link" :href="links.instagram" target="_blank"
        ><BaseIcon icon-name="instagram" prefix="fab" size="36px"
      /></a>
      <a class="footer-media__link" :href="links.facebook" target="_blank"
        ><BaseIcon icon-name="facebook" prefix="fab" size="36px"
      /></a>
      <a class="footer-media__link" :href="links.youtube" target="_blank"
        ><BaseIcon icon-name="youtube" prefix="fab" size="36px"
      /></a>
    </div>
  </footer>
</template>

<script lang="ts">
import BaseIcon from "@/components/atoms/BaseIcon.vue";
import { SOCIAL_MEDIA_LINKS } from "@/constants";

export default {
  name: 'MainFooter',
  components: { BaseIcon },
  setup() {
    return {
      links: SOCIAL_MEDIA_LINKS,
    };
  },
};
</script>

<style lang="sass" scoped>
@import '@/assets/styles/organisms/MainFooter.sass'
</style>
