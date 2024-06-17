<template>
  <DropdownIcon
    :items="countries"
    @selectItem="selectCountry"
    :defaultItem="defaultCountry"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DropdownIcon from "@/components/molecules/DropdownIcon.vue";
import emojione from "emojione";

export default defineComponent({
  name: "DropdownCountry",
  components: { DropdownIcon },
  data() {
    return {
      countries: [
        { text: "Netherlands", icon: emojione.toImage("🇳🇱") },
        { text: "United Kingdom", icon: emojione.toImage("🇬🇧") },
        { text: "United States", icon: emojione.toImage("🇺🇸") },
      ],
      defaultCountry: { text: "United States", icon: emojione.toImage("🇺🇸") },
    };
  },
  methods: {
    selectCountry(country: { text: string; icon: string }) {
      this.defaultCountry = country;
    },
  },
});
</script>
