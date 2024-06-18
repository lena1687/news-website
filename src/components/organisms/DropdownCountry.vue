<template>
  <DropdownIcon
    :items="countries"
    @selectItem="onCountryChange"
    :defaultItem="selectedCountry"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import DropdownIcon from "@/components/molecules/DropdownIcon.vue";
import emojione from "emojione";
import { CountryCodes } from "@/types/commonTypes";
import { useNewsStore } from "@/stores/newsStore";
import { countryCodeToEmoji } from "@/utils/common";

export default defineComponent({
  name: "DropdownCountry",
  components: { DropdownIcon },
  data() {
    return {
      countries: [
        {
          text: CountryCodes.NL,
          icon: emojione.toImage(countryCodeToEmoji(CountryCodes.NL)),
        },
        {
          text: CountryCodes.GB,
          icon: emojione.toImage(countryCodeToEmoji(CountryCodes.GB)),
        },
        {
          text: CountryCodes.US,
          icon: emojione.toImage(countryCodeToEmoji(CountryCodes.US)),
        },
      ],
    };
  },

  setup() {
    const newsStore = useNewsStore();
    const countryCode = ref(newsStore.getCountry).value;
    const selectedCountry = {
      text: countryCode,
      icon: emojione.toImage(emojione.toImage(countryCodeToEmoji(countryCode))),
    };

    const onCountryChange = ({
      text,
    }: {
      text: CountryCodes;
      icon: string;
    }): void => {
      newsStore.setCountry(text);
    };

    return {
      selectedCountry,
      onCountryChange,
    };
  },
});
</script>
