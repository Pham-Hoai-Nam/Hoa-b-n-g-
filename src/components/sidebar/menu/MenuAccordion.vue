<template>
  <div class="text-white d-flex position-relative ms-3" style="margin-top:-8px;">
    <i class="fa-solid fa-bars"></i>
    <img class="logo" src="../../../.././public/favicon.ico" alt="" />
    <span style="font-size: 20px !important" class="mt-1 ms-2">KẾ TOÁN</span>
  </div>
  <va-accordion
    v-model="accordionValue"
    class="sidebar-accordion va-sidebar__menu__inner mt-3"
    multiply
  >
    <va-collapse v-for="(route, idx) in items" :key="idx">
      <template #header>
        <va-sidebar-item
          :active="isRouteActive(route)"
          :to="route.children ? undefined : { name: route.name }"
        >
          <va-sidebar-item-content>
            <va-icon :name="route.meta.icon" class="va-sidebar-item__icon" />

            <va-sidebar-item-title>
              {{ t(route.displayName) }}
            </va-sidebar-item-title>

            <va-icon
              v-if="route.children"
              :name="accordionValue[idx] ? 'expand_less' : 'expand_more'"
            />
          </va-sidebar-item-content>
        </va-sidebar-item>
      </template>
      <template v-for="(child, index) in route.children" :key="index">
        <va-sidebar-item
          :active="isRouteActive(child)"
          :to="{ name: child.name }"
        >
          <va-sidebar-item-content>
            <div class="va-sidebar-item__icon" />

            <va-sidebar-item-title>
              {{ t(child.displayName) }}
            </va-sidebar-item-title>
          </va-sidebar-item-content>
        </va-sidebar-item>
      </template>
    </va-collapse>
  </va-accordion>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { INavigationRoute } from "../NavigationRoutes";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import { menu_width } from "@/services/menu";

const props = withDefaults(
  defineProps<{
    items?: INavigationRoute[];
  }>(),
  {
    items: () => [],
  }
);

const accordionValue = ref<boolean[]>([]);

onMounted(() => {
  accordionValue.value = props.items.map((item) => isItemExpanded(item));
});

// function isGroup(item: INavigationRoute) {
//   return !!item.children
// }

function isRouteActive(item: INavigationRoute) {
  return item.name === useRoute().name;
}

function isItemExpanded(item: INavigationRoute): boolean {
  if (!item.children) {
    return false;
  }

  const isCurrentItemActive = isRouteActive(item);
  const isChildActive = !!item.children.find((child) =>
    child.children ? isItemExpanded(child) : isRouteActive(child)
  );

  return isCurrentItemActive || isChildActive;
}
</script>
<style lang="scss" scoped>
.logo {
  width: 45px;
  height: 45px;
  margin-left: 45px;
  margin-top: -10px;
}
.fa-bars {
  position: absolute;
  font-size: 23px !important;
  top: 3px;
  left: 12px;
}
</style>