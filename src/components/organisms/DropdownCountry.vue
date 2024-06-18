<template>
  <DropdownIcon
    :items="countries"
    @selectItem="onCountryChange"
    :defaultItem="defaultCountry"
  />
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import DropdownIcon from "@/components/molecules/DropdownIcon.vue";
import emojione from "emojione";
import { CountryCodes } from "@/types/commonTypes";
import { useNewsStore } from "@/stores/newsStore";
import { countryCodeToEmoji } from "@/utils/common";
import { useRoute, useRouter } from "vue-router";

interface CountryItem {
  text: CountryCodes;
  icon: string;
}

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
    const route = useRoute();
    const router = useRouter();
    const newsStore = useNewsStore();
    const countryCode =
      (route.params.country as CountryCodes) || CountryCodes.US;
    const defaultCountry: CountryItem = {
      text: countryCode,
      icon: emojione.toImage(emojione.toImage(countryCodeToEmoji(countryCode))),
    };
    const selectedCountry = ref(countryCode);

    watch(selectedCountry, (newCountry) => {
      router.push({ params: { country: newCountry } });
    });

    const onCountryChange = (country: CountryItem) => {
      selectedCountry.value = country.text;
      newsStore.setCountry(selectedCountry.value);
    };

    return {
      defaultCountry,
      selectedCountry,
      onCountryChange,
    };
  },
});
</script>
