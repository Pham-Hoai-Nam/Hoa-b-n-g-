<template>
  <va-modal :class="props.class" v-model="props.showModal"  >
    <template #content="{ ok }">
      <va-card-title>
        {{props.titleModal}}
      </va-card-title>
      <va-card-content>
        <div><slot name="body"></slot></div>
        <div><slot name="footer"></slot></div>
      </va-card-content>
    </template>
  </va-modal>
</template>

<script setup>
import { defineProps, watch, computed } from "vue";
const props = defineProps({
  showModal: Boolean,
  titleModal: String,
  class: String,
});
</script>

<style lang="scss" scoped>
</style>