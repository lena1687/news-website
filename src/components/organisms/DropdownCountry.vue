<template>
  <DropdownIcon
    :items="countries"
    @selectItem="onCountryChange"
    :defaultItem="defaultCountry"
  />
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import DropdownIcon from "@/components/molecules/DropdownIcon.vue";
import emojione from "emojione";
import { CountryCode } from "@/types/commonTypes";
import { countryCodeToEmoji } from "@/utils/common";
import { useRouter } from "vue-router";
import { useNewsStore } from "@/stores/newsStore";

interface CountryItem {
  text: CountryCode;
  icon: string;
}

export default defineComponent({
  name: "DropdownCountry",
  components: { DropdownIcon },
  data() {
    return {
      countries: [
        {
          text: CountryCode.NL,
          icon: emojione.toImage(countryCodeToEmoji(CountryCode.NL)),
        },
        {
          text: CountryCode.GB,
          icon: emojione.toImage(countryCodeToEmoji(CountryCode.GB)),
        },
        {
          text: CountryCode.US,
          icon: emojione.toImage(countryCodeToEmoji(CountryCode.US)),
        },
      ],
    };
  },

  setup() {
    const router = useRouter();
    const newsStore = useNewsStore();
    const countryCode = computed(() => newsStore.params.country);
    const defaultCountry: CountryItem = {
      text: countryCode.value,
      icon: emojione.toImage(
        emojione.toImage(countryCodeToEmoji(countryCode.value))
      ),
    };

    const onCountryChange = ({ text }: CountryItem) => {
      router.push({ params: { country: text } });
    };

    return {
      defaultCountry,
      onCountryChange,
    };
  },
});
</script>
