<template>
  <div>
    <Header />
    <main>
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Header from '../organisms/MainHeader.vue';
import Footer from '../organisms/MainFooter.vue';

export default {
  name: 'MainTemplate',
  components: {
    Header,
    Footer
  }
};
</script>