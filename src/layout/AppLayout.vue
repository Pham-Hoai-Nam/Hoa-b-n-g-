<template>
  <va-inner-loading :loading="loading" :size="200" icon="cat" style="z-index:99999;">
  </va-inner-loading>
    <div class="app-layout">
      <div class="app-layout__content">
        <div 
          class="app-layout__sidebar-wrapper"
          :class="{ minimized: isSidebarMinimized }"
        >
          <div v-if="isFullScreenSidebar" class="d-flex justify--end">
            <va-button
              class="px-4 py-4"
              icon="close"
              flat
              color="dark"
              @click="onCloseSidebarButtonClick"
            />
          </div>
          <sidebar
            :width="sidebarWidth"
            :minimized="isSidebarMinimized"
            :minimized-width="sidebarMinimizedWidth"
          />
        </div>
        <div class="app-layout__page">
          <navbar />
          <div class="layout fluid gutter--xl d-flex">
            <router-view />
            <!-- <div style="width: 30%; margin-left: 10px">
            <va-card>
              <va-card-title>Thông tin đặt sân</va-card-title>
              <va-card-content></va-card-content>
            </va-card>
          </div> -->
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { menuMini, menu_width, loading } from "@/services/menu";

import { storeToRefs } from "pinia";
import { useGlobalStore } from "../stores/global-store";
import { onBeforeRouteUpdate } from "vue-router";

import Navbar from "../components/navbar/Navbar.vue";
import Sidebar from "../components/sidebar/Sidebar.vue";

const GlobalStore = useGlobalStore();

const mobileBreakPointPX = 640;
const tabletBreakPointPX = 768;

const sidebarWidth = ref("16rem");
const sidebarMinimizedWidth = ref(undefined);

const isMobile = ref(false);
const isTablet = ref(false);
const { isSidebarMinimized } = storeToRefs(GlobalStore);
const checkIsTablet = () => window.innerWidth <= tabletBreakPointPX;
const checkIsMobile = () => window.innerWidth <= mobileBreakPointPX;

const onResize = () => {
  isSidebarMinimized.value = checkIsTablet();

  isMobile.value = checkIsMobile();
  isTablet.value = checkIsTablet();
  sidebarMinimizedWidth.value = isMobile.value ? 0 : "4rem";
  sidebarWidth.value = isTablet.value ? "100%" : "16rem";
};

onMounted(() => {
  window.addEventListener("resize", onResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", onResize);
});

onBeforeRouteUpdate(() => {
  if (checkIsTablet()) {
    // Collapse sidebar after route change for Mobile
    isSidebarMinimized.value = false;
  }
});

onResize();

const isFullScreenSidebar = computed(
  () => isTablet.value && !isSidebarMinimized.value
);

const onCloseSidebarButtonClick = () => {
  isSidebarMinimized.value = false;
};
</script>

<style lang="scss">
$mobileBreakPointPX: 640px;
$tabletBreakPointPX: 768px;

.app-layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
  &__navbar {
    min-height: 4rem;
  }

  &__content {
    display: flex;
    height: calc(100vh - 4rem);
    flex: 1;

    @media screen and (max-width: tabletBreakPointPX) {
      height: calc(100vh - 6.5rem);
    }

    .app-layout__sidebar-wrapper {
      position: relative;
      height: 100%;
      background: var(--va-white);

      @media screen and (max-width: tabletBreakPointPX) {
        &:not(.minimized) {
          width: 100%;
          height: 100%;
          position: fixed;
          top: 0;
          z-index: 999;
        }

        .va-sidebar:not(.va-sidebar--minimized) {
          // Z-index fix for preventing overflow for close button
          z-index: -1;
          .va-sidebar__menu {
            padding: 0;
          }
        }
      }
    }
  }
  &__page {
    flex-grow: 2;
    overflow-y: scroll;
  }
}
</style>
