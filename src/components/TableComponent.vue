<template>
  <div
    class="
      va-data-table va-data-table--sticky va-data-table--scroll
      va-table-custom
    "
    ref="tableResizeHeight"
    :style="{ 'max-height': heightReszie + 'px' }"
    @scroll="infiniteScroll()"
  >
    <table
      class="va-data-table__table"
      :class="props.class != '' ? props.class : ''"
    >
      <thead
        class="va-data-table__table-thead va-data-table__table-thead--sticky"
      >
        <slot name="head"></slot>
      </thead>
      <tbody class="va-data-table__table-tbody" ref="body">
        <slot name="body"></slot>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps, computed, watch, defineEmits } from "vue";
import $ from "jquery";
import { useGlobalStore } from "@/stores/global-store";
import { getMaxHeightTalbe } from "@/services/utils";

const globalStore = useGlobalStore();
const props = defineProps({
  number: {
    type: Number,
    default: 2,
    required: false,
  },
  maxlength: {
    type: Number,
    default: 20,
    required: false,
  },
  maxHeight: {
    type: Number,
    default: 0,
    required: false,
  },
  class: {
    type: String,
    default: "",
    required: false,
  },
  is_scroll: {
    type: Boolean,
    default: false,
    required: false,
  },
});

const heightReszie = computed(() => {
  if (props.maxHeight > 0) {
    return props.maxHeight + props.number;
  }
  return getMaxHeightTalbe() + props.number;
});
watch(props, (value, oldValue, onCleanup) => {
  console.log(value.maxHeight);
  if (value.maxHeight > 0) {
    heightReszie.value = value.maxHeight + value.number;
  }
});
const resizeScroll = () => {
  if (props.maxHeight > 0) {
    heightReszie.value = props.maxHeight + props.number;
  }
};
const emits = defineEmits(["update:nextPage"]);
const nextPage = ref(1);
const infiniteScroll = () => {
  if (props.is_scroll) {
    const listElm = document.querySelector(".va-data-table");
    if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight  - 1) {
      nextPage.value++;
      emits("update:nextPage", nextPage.value);
    }
  }
};
// const numberProp = ref(props.number)
// const maxLengthProp = ref(props.maxlength)
// const header = ref(null)
// const body = ref(null)
// const tableResizeHeight = ref(null)
// const headerScoll = ref(null)
// const resizeHeight = () => {
//   const visible = document.documentElement.clientHeight;
//   return visible
// }
// const maxHeightNavbar = computed(() => {
//   console.log(window.innerHeight, window.innerHeight - (230 + globalStore.maxHeightNavbar))
//   return window.innerHeight - (220 + globalStore.maxHeightNavbar)
// })
// const maxHeightInner = computed(() => {
//   return Math.round((window.innerHeight - (27 + globalStore.maxHeightNavbar)) * 73.5 / 100)
// })
// watch(maxHeightNavbar, (value, oldValue, onCleanup) => {
//   resizeScroll()
// })
// const resizeScroll = () => {
//   const counter = ref(0)
//   const setInval = setInterval(function () {
//     if (counter.value == 5) {
//       clearInterval(setInval);
//     } else {
//       const heightReszie = ref(0)
//       const counterTr = ref(0)
//       $(body.value).find('tr').each(function (index, v) {
//         const heightTr = ref($(v).height())
//         if (index <= maxLengthProp.value) {
//           heightReszie.value += parseFloat(heightTr.value)
//         }
//         counterTr.value++
//       })
//       console.log(heightReszie.value, maxHeightInner.value, counterTr.value)
//       if (heightReszie.value < maxHeightInner.value && counterTr.value < maxLengthProp.value) {
//         heightReszie.value = maxHeightInner.value
//       }
//       if (props.maxHeight > 0) {
//         console.log('TH1', props.maxHeight, heightReszie.value)
//         heightReszie.value = props.maxHeight
//       }
//       if (props.maxHeight == 0 && heightReszie.value > maxHeightInner.value) {
//         console.log('TH2', maxHeightInner.value, heightReszie.value)
//         heightReszie.value = maxHeightInner.value
//
//       }
//       //(counterTr.value < maxLengthProp.value && props.maxHeight == 0) ||
//       if ((counterTr.value == 1 && props.maxHeight > 0)) {
//         $(tableResizeHeight.value).css({
//           'max-height': props.maxHeight + 'px'
//         })
//       } else {
//         console.log('TH4', heightReszie.value, props.maxHeight, counterTr.value, maxHeightNavbar.value)
//         $(tableResizeHeight.value).css({
//           'max-height': heightReszie.value + numberProp.value + 'px'
//         })
//       }
//
//       counter.value = counter.value + 1
//     }
//   }, 300)
// }
// const setTimeScroll = (event) => {
//   const counter = ref(0)
//   const setInval = setInterval(function () {
//     if (counter.value == 5) {
//       clearInterval(setInval);
//     } else {
//       resizeScroll()
//       counter.value = counter.value + 1
//     }
//   }, 300)
// }
onMounted(() => {
  resizeScroll();
});
</script>

<style scoped>
</style>