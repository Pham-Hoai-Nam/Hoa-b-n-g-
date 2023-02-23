<template>
  <ul class="error-form" ref="errorForm" :id="keyError">
    <template v-if="listErrors.length > 0">
      <li
        class="text-danger text-wr"
        v-for="(entry, key) in listErrors"
        :key="key"
        v-text="entry"
        :title="`${entry}`" 
      ></li>
    </template>
  </ul>
</template>

<script setup>
import { ref, computed, defineProps, watch } from "vue";
import { useGlobalStore } from "@/stores/global-store";
import { makeid } from "@/services/utils";
import $ from "jquery";

const listErrors = ref([]);
const props = defineProps({
  name: String,
});
const GlobalStore = useGlobalStore();

const nameError = computed(() => {
  return props.name;
});
const keyError = ref("error_" + makeid(8));
const addHightlightFocus = () => {
  $("#" + keyError.value)
    .parent()
    .addClass("error-hotelaas")
    .find(".error-hightlight-focus")
    .addClass("input-error");
};
const setIdError = () => {
  return nameError.value.toString().replace(".", "_");
};
const errors = computed(() => {
  return GlobalStore.errors;
});
watch(errors, (newPage) => {
  $("#" + keyError.value)
    .parent()
    .find(".error-hightlight-focus")
    .removeClass("input-error");
  listErrors.value = [];
  for (const [key, value] of Object.entries(newPage)) {
    if (key == nameError.value) {
      for (let i = 0; i < value.length; i++) {
        listErrors.value.push(value[i]);
      }
    }
  }
  console.log(listErrors.value.length);
  if (listErrors.value.length > 0) {
    addHightlightFocus();
  }
});
</script>

<style lang="scss">
.text-wr {
  -webkit-line-clamp: 2 !important;
  -webkit-box-orient: vertical !important;
  display: -webkit-box !important;
  overflow: hidden;
  position: relative !important;
  cursor: pointer;
}
.error-hotelaas {
  position: relative;
  &__icon {
    position: absolute;
  }
}
</style>
