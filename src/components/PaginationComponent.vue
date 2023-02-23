<template>
  <div class="pagination pagination-custom">
    <div class="pagination-custom__left">
      <div class="pagination-custom__prePages">
        <span style="padding-top:5px;">Số hàng hiển thị : </span>
        <va-select v-model="perPage" :options="perPages" width="100px" />
      </div>
      <span class="vertical_brick">|</span>
      <div class="pagination-custom__info">{{ info }}</div>
    </div>
    <div class="pagination-custom__right">
      <va-pagination
        v-model="nextPage"
        :pages="props?.pagination?.total"
        color="#215890"
        :visible-pages="5"
        size="small"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, defineEmits } from "vue";
import type { Ref } from "vue";
import type { PaginationType } from "@/stores/type_store";
const props = withDefaults(
  defineProps<{
    pagination?: PaginationType;
  }>(),
  {}
);
const emits = defineEmits(["changePagination"]);
const current_page =
  typeof props.pagination?.current_page != "undefined"
    ? props.pagination?.current_page
    : 1;
const total_pages =
  typeof props.pagination?.total_pages != "undefined"
    ? props.pagination?.total_pages
    : 0;
const nextPage: Ref<number> = ref(current_page | 1);
const perPage: Ref<number> = ref(30);
const perPages: Ref<number[]> = ref([30, 50, 100, 200, 500]);
const info: Ref<string> = computed(() => {
  const count =
    typeof props.pagination?.count != "undefined" ? props.pagination?.count : 0;
  const offset =
    typeof props.pagination?.current_page != "undefined"
      ? props.pagination?.current_page - 1
      : 0;
  const per_page =
    typeof props.pagination?.per_page != "undefined"
      ? props.pagination?.per_page
      : 30;
  const from = offset * per_page + 1;
  const to = from + count - 1;
  return (
    "Hiện thị " +
    from +
    " đến " +
    to +
    " của " +
    props.pagination?.total +
    " bản ghi"
  );
});
watch(nextPage, (value) => {
  emits("changePagination", {
    nextPage: value,
    perPage: perPage.value,
  });
});
watch(perPage, (value) => {
  nextPage.value = 1;
  emits("changePagination", {
    nextPage: nextPage.value,
    perPage: value,
  });
});
</script>

<style lang="scss">
.pagination-custom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .va-dropdown {
    min-width: 30px !important;
  }
  .vertical_brick {
    margin: 0 15px 3px 10px;
  }
  &__left {
    display: flex;
    align-items: center;
    justify-content: left;
  }
  &__prePages {
    display: flex;
    margin-left: 11px;
    .va-input-wrapper {
      &__field {
        border: none !important;
        padding: 2px !important;
      }
      &__text {
        min-height: 0 !important;
        margin-bottom: 2px;
        margin-right: 0px !important;
      }
    }
  }
  &__info {
    margin-right: 5px;
  }
}
</style>
