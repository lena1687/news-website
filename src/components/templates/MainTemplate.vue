<template>
  <div>
    <Header />
    <main>
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<script>
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