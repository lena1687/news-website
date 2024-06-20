<template>
  <div class="dropdown-icon">
    <button @click="toggleDropdown" class="dropdown-icon__button">
      <span
        class="dropdown-icon__button-pic"
        v-if="selectedItem?.icon"
        v-html="selectedItem?.icon"
      ></span>
      <span class="dropdown-icon__button-text">{{
        selectedItem?.text || "Select an option"
      }}</span>
      <BaseIcon icon-name="chevron-down" />
    </button>
    <ul v-if="isOpen" class="dropdown-icon__list">
      <li
        v-for="item in items"
        :key="item.text"
        @click="selectItem(item)"
        class="dropdown-icon__item"
      >
        <span
          v-if="item.icon"
          v-html="item.icon"
          class="dropdown-icon__symbol"
        ></span>
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import BaseIcon from "@/components/atoms/BaseIcon.vue";

export interface DropdownItem {
  text: string;
  icon?: string;
}

export default defineComponent({
  name: "DropdownIcon",
  components: { BaseIcon },
  props: {
    items: {
      type: Array as () => DropdownItem[],
      required: true,
    },
    defaultItem: {
      type: Object as () => DropdownItem,
      default: null,
    },
  },
  mounted() {
    if (this.defaultItem) {
      this.selectedItem = this.defaultItem;
    }
  },
  setup(props, { emit }) {
    const isOpen = ref(false);
    const selectedItem = ref<DropdownItem | null>(null);

    const toggleDropdown = () => {
      isOpen.value = !isOpen.value;
    };

    const selectItem = (item: DropdownItem) => {
      emit("select-item", item);
      selectedItem.value = item;
      isOpen.value = false;
    };

    return {
      isOpen,
      selectedItem,
      toggleDropdown,
      selectItem,
    };
  },
});
</script>

<style lang="sass" scoped>
@import '@/assets/styles/molecules/DropdownIcon.sass'
</style>
