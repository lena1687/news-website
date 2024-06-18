<template>
  <div class="dropdown-icon">
    <button @click="toggleDropdown" class="dropdown-icon__button">
      <span v-if="selectedItem?.icon" v-html="selectedItem?.icon"></span>
      <span>{{ selectedItem?.text || "Select an option" }}</span>
      <BaseIcon icon-name="chevron-down" />
    </button>
    <ul v-if="isOpen" class="dropdown-icon__list">
      <li
        v-for="item in items"
        :key="item.text"
        @click="selectItem(item)"
        class="dropdown-icon__item"
      >
        <span v-if="item.icon" v-html="item.icon"></span>
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

<style scoped>
.dropdown-icon {
  position: relative;
  display: inline-block;
}

.dropdown-icon__button {
  display: flex;
  align-items: center;
  background: white;
  border: 1px solid black;
  padding: 5px 10px;
  cursor: pointer;
}

.dropdown-icon__button span {
  margin-left: 5px;
}

.dropdown-icon__arrow {
  margin-left: auto;
}

.dropdown-icon__list {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border: 1px solid black;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

.dropdown-icon__item {
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
}

.dropdown-icon__item span {
  margin-right: 8px;
}

.dropdown-icon__item:hover {
  background: gray;
}
</style>
