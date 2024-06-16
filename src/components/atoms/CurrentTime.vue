<template>
  <div>
    <p>{{ formattedDate }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'CurrentTime',
  setup() {
    const formattedDate = ref<string>('');

    const updateTime = () => {
      const date = new Date();
      const formatter = new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      formattedDate.value = formatter.format(date);
    };

    onMounted(() => {
      updateTime();
      setInterval(updateTime, 1000);
    });

    return {
      formattedDate
    };
  }
});
</script>