<template>
  <div
    style="background-color: black !important; height: 100vh;"
    ref="minimized_width"
  >
    <va-sidebar
      :width="width"
      :minimized="menuMini"
      :minimized-width="minimizedWidth"
    >
      <menu-minimized  v-if="menuMini" :items="items" />
      <menu-accordion  v-else :items="items" />
    </va-sidebar>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, computed } from "vue";
import NavigationRoutes from "./NavigationRoutes";
import MenuAccordion from "./menu/MenuAccordion.vue";
import MenuMinimized from "./menu/MenuMinimized.vue";
import { menuMini, menu_width } from "@/services/menu";
const minimized_width = ref("");
const accordion_width = ref("");
withDefaults(
  defineProps<{
    width?: string;
    color?: string;
    minimized?: boolean;
    minimizedWidth?: string;
  }>(),
  {
    width: "16rem",
    color: "secondary",
    minimized: true,
    minimizedWidth: undefined,
  }
);
const widthSideBar = computed(() => {
  return minimized_width.value.offsetWidth;
});
watch(minimized_width.value.offsetWidth, () => {
  localStorage.setItem("widthSideBar",minimized_width.value.offsetWidth);
});
onMounted(() => {
  localStorage.setItem("widthSideBar", widthSideBar.value);
});
const items = ref(NavigationRoutes.routes);
</script>

<style lang="scss">
.va-sidebar {
  .va-collapse__body {
    margin-top: 0 !important;
  }

  &__menu {
    padding: 2rem 0;
    &__inner {
      padding-bottom: 8rem;
    }
  }

  &-item {
    &-content {
      padding: 0.75rem 1rem;
    }

    &__icon {
      width: 1.5rem;
      height: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>

<style lang="scss" scoped>
.va-sidebar {
  flex-shrink: 0;
}
</style>
