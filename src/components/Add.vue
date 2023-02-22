<template >
  <modal-default
    :class="`pitch--area pitch--config`"
    :showModal="props.showModal"
    :titleModal="props.titleModal"
  >
    <template v-slot:body>
      <div class="form-label">
        <div class="label-left">
          <h3>Thông tin nhân viên</h3>
          <va-checkbox class="mr-3" label="là khách hàng" />
          <va-checkbox label="là Nhà cung cấp" />
        </div>
        <div @click="close()">close</div>
      </div>
      <div class="form-wrap">
        <div class="form-group mr-2">
          <label
            ><span class="pr-1" style="font-size: 12px !important">Mã</span
            ><i class="fa-solid fa-star-of-life"></i
          ></label>
          <div>
            <va-input style="width: 150px !important" v-model="value" />
            <error-label-component class="ms-2" name="room_level_id" />
          </div>
        </div>
        <div class="form-group mr-4 pr-1">
          <label
            ><span class="pr-1" style="font-size: 12px !important">Tên</span
            ><i class="fa-solid fa-star-of-life"></i
          ></label>
          <va-input style="width: 200px !important" v-model="value" />
        </div>
        <div class="form-group mr-3">
          <label
            ><span class="pr-1" style="font-size: 12px !important"
              >Ngày sinh</span
            ></label
          >
          <va-date-input style="width: 150px !important" v-model="value" />
        </div>
        <div class="form-group">
          <label
            ><span class="pr-1" style="font-size: 12px !important"
              >Giới tính</span
            ></label
          >
          <div class="radio-group">
            <!-- <va-radio
              v-for="(option, index) in options"
              :key="index"
              v-model="selectedOption"
              :option="option"
            /> -->
          </div>
        </div>
      </div>
      <div class="form-wrap">
        <div class="form-group mr-4 pr-1" style="font-size: 12px !important">
          <label
            ><span class="pr-1" style="font-size: 12px !important"
              >Đơn vị</span
            ><i class="fa-solid fa-star-of-life"></i
          ></label>
          <va-input style="width: 360px !important" v-model="value" />
        </div>
        <div class="form-group mr-3">
          <label
            ><span class="pr-1" style="font-size: 12px !important"
              >Số CMND</span
            ></label
          >
          <va-input style="width: 200px !important" v-model="value" />
        </div>
        <div class="form-group">
          <label
            ><span class="pr-1" style="font-size: 12px !important"
              >Ngày cấp</span
            ></label
          >
          <va-date-input style="width: 150px !important" v-model="value" />
        </div>
      </div>
      <div class="form-wrap mb-4 pb-3">
        <div class="form-group mr-4 pr-1">
          <label
            ><span class="pr-1" style="font-size: 12px !important"
              >Chức danh</span
            ><i class="fa-solid fa-star-of-life"></i
          ></label>
          <va-input style="width: 360px !important" v-model="value" />
        </div>
        <div class="form-group mr-4 pr-1">
          <label
            ><span class="pr-1" style="font-size: 12px !important"
              >Nơi cấp</span
            ><i class="fa-solid fa-star-of-life"></i
          ></label>
          <va-input style="width: 365px !important" v-model="value" />
        </div>
      </div>
      <div class="form-wrap">
        <div class="form-group mr-4 pr-1">
          <label
            ><span class="pr-1" style="font-size: 12px !important"
              >Địa chỉ</span
            ></label
          >
          <va-input style="width: 750px !important" v-model="value" />
        </div>
      </div>
      <div class="form-wrap">
        <div class="form-group mr-3">
          <label
            ><span class="pr-1" style="font-size: 12px !important"
              >ĐT di động</span
            ></label
          >
          <va-input style="width: 200px !important" v-model="value" />
        </div>
        <div class="form-group mr-3">
          <label
            ><span class="pr-1" style="font-size: 12px !important"
              >ĐT cố định</span
            ></label
          >
          <va-input style="width: 200px !important" v-model="value" />
        </div>
        <div class="form-group mr-3">
          <label
            ><span class="pr-1" style="font-size: 12px !important"
              >Email</span
            ></label
          >
          <va-input style="width: 200px !important" v-model="value" />
        </div>
      </div>
      <div class="form-wrap">
        <div class="form-group mr-3">
          <label
            ><span class="pr-1" style="font-size: 12px !important"
              >TK ngân hàng</span
            ></label
          >
          <va-input style="width: 200px !important" v-model="value" />
        </div>
        <div class="form-group mr-3">
          <label
            ><span class="pr-1" style="font-size: 12px !important"
              >Tên ngân hàng</span
            ></label
          >
          <va-input style="width: 200px !important" v-model="value" />
        </div>
        <div class="form-group mr-3">
          <label
            ><span class="pr-1" style="font-size: 12px !important"
              >Chi nhánh</span
            ></label
          >
          <va-input style="width: 200px !important" v-model="value" />
        </div>
      </div>
      <hr style="margin-top: 35px; margin-bottom: 20px" />
    </template>

    <template v-slot:footer>
      <div class="btn-footer">
        <div>
          <va-button class="btn-main btn-cancle" @click="showModal()">
            Hủy
          </va-button>
        </div>
        <div>
          <va-button class="btn-main mr-2 btn-cancle" @click="showModal()">
            Cất
          </va-button>
          <va-button class="btn-main btn-add" @click="showModal()">
            Cất và Thêm
          </va-button>
        </div>
      </div>
    </template>
  </modal-default>
</template>

<script setup>
import { defineProps, watch, computed, defineEmits, ref } from "vue";
const props = defineProps({
  showModal: Boolean,
  titleModal: String,
  class: String,
});
const options = ["one", "two", "three"];
const selectedOption = ref("one");
const emit = defineEmits(["update:confirm"]);
const close = () => {
  emit("update:confirm", 1);
};
</script>

<style lang="scss" scoped>
.button-action {
  display: flex;
  justify-content: flex-end;
}
.form-label {
  margin-top: 15px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.label-left {
  align-items: center;
  display: flex;
  h3 {
    font-size: 18px !important;
    margin-right: 20px;
  }
}
.fa-star-of-life {
  font-size: 8px !important;
  color: rgb(218, 37, 37);
  position: absolute;
  top: 2px;
}
.form-wrap {
  margin-bottom: 16px;
  display: flex;
}
label {
  padding-left: 2px;
  font-weight: 600;
  font-size: 10px !important;
  position: relative;
  display: block;
  margin-bottom: 5px;
}
.radio-group {
  display: flex;
  align-items: center;
}
.btn-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>