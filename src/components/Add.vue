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
          <va-checkbox
            v-model="fields.is_customer"
            class="mr-3"
            label="là khách hàng"
          />
          <va-checkbox v-model="fields.is_supplier" label="là nhà cung cấp" />
        </div>
        <div @click="close()" class="d-flex align-items-center">
          <i
            style="font-size: 22px !important"
            class="fa-regular fa-circle-question"
          ></i>
          <i
            style="font-size: 25px !important"
            class="ms-2 fa-solid fa-xmark"
          ></i>
        </div>
      </div>
      <div class="form-wrap">
        <div class="form-group mr-2">
          <label
            ><span class="pr-1" style="font-size: 12px !important">Mã</span
            ><i class="fa-solid fa-star-of-life"></i
          ></label>
          <div>
            <va-input style="width: 150px !important" v-model="fields.code" />
            <error-label-component name="room_level_id" />
          </div>
        </div>
        <div class="form-group mr-4 pr-1">
          <label
            ><span class="pr-1" style="font-size: 12px !important">Tên</span
            ><i class="fa-solid fa-star-of-life"></i
          ></label>
          <div>
            <va-input
              :title="errors.name"
              style="width: 200px !important"
              v-model="fields.name"
              :class="{ error: errors.name }"
            /><error-label-component :name="errors.name" />
          </div>
        </div>
        <div class="form-group mr-3">
          <label
            ><span class="pr-1" style="font-size: 12px !important"
              >Ngày sinh</span
            ></label
          >
          <div>
            <va-date-input
              :title="errors.date_of_birth"
              :class="{ error: errors.date_of_birth }"
              style="width: 150px !important"
              v-model="fields.date_of_birth"
            /><error-label-component name="room_level_id" />
          </div>
        </div>
        <div class="form-group">
          <label
            ><span class="pr-1" style="font-size: 12px !important"
              >Giới tính</span
            ></label
          >
          <!-- <div class="radio-group"> -->
          <va-radio
            style="display: inline-block"
            color="success"
            v-for="(option, index) in optionType"
            :key="index"
            v-model="fields.gender"
            :option="option.value"
            :label="option.label"
          />
          <!-- <error-label-component name="room_level_id" /> -->
          <!-- </div> -->
        </div>
      </div>
      <div class="form-wrap">
        <div class="form-group mr-4 pr-1" style="font-size: 12px !important">
          <label
            ><span class="pr-1" style="font-size: 12px !important">Đơn vị</span
            ><i class="fa-solid fa-star-of-life"></i
          ></label>
          <div>
            <!-- <va-input
              :title="errors.department_id"
              :class="{ error: errors.department_id }"
              style="width: 360px !important"
              v-model="fields.department_id"
            /> -->
            <!-- <va-select
              class="input-select"
              v-model="fields.department_id"
              :options="listsDepartments"
              track-by="id"
            /> -->

            <select
              style="width: 360px !important"
              class="form-select"
              aria-label="Default select example"
            >
              <option
                v-for="(item, key) in listsDepartments"
                :key="key"
                :value="item.id"
              >{{item.name}}</option>
              <!-- <option selected>Open this select menu</option> -->
              <!-- <option value="1">One</option> -->
              <!-- <option value="2">Two</option> -->
              <!-- <option value="3">Three</option> -->
            </select>
            <error-label-component name="room_level_id" />
          </div>
        </div>
        <div class="form-group mr-3">
          <label
            ><span class="pr-1" style="font-size: 12px !important"
              >Số CMND</span
            ></label
          >
          <div>
            <va-input
              :title="errors.cmnd"
              :class="{ error: errors.cmnd }"
              style="width: 200px !important"
              v-model="fields.cmnd"
            /><error-label-component name="room_level_id" />
          </div>
        </div>
        <div class="form-group">
          <label
            ><span class="pr-1" style="font-size: 12px !important"
              >Ngày cấp</span
            ></label
          >
          <div>
            <va-date-input
              :title="errors.license_date"
              :class="{ error: errors.license_date }"
              style="width: 150px !important"
              v-model="fields.license_date"
            /><error-label-component name="room_level_id" />
          </div>
        </div>
      </div>
      <div class="form-wrap mb-4 pb-3">
        <div class="form-group mr-4 pr-1">
          <label
            ><span class="pr-1" style="font-size: 12px !important"
              >Chức danh</span
            ></label
          >
          <div>
            <va-input
              :title="errors.title"
              :class="{ error: errors.title }"
              style="width: 360px !important"
              v-model="fields.title"
            /><error-label-component name="room_level_id" />
          </div>
        </div>
        <div class="form-group mr-4 pr-1">
          <label
            ><span class="pr-1" style="font-size: 12px !important"
              >Nơi cấp</span
            ></label
          >
          <div>
            <va-input
              :title="errors.city_id"
              :class="{ error: errors.city_id }"
              style="width: 365px !important"
              v-model="fields.city_id"
            /><error-label-component name="room_level_id" />
          </div>
        </div>
      </div>
      <div class="form-wrap">
        <div class="form-group mr-4 pr-1">
          <label
            ><span class="pr-1" style="font-size: 12px !important"
              >Địa chỉ</span
            ></label
          >
          <div>
            <va-input
              :title="errors.address"
              :class="{ error: errors.address }"
              style="width: 750px !important"
              v-model="fields.address"
            /><error-label-component name="room_level_id" />
          </div>
        </div>
      </div>
      <div class="form-wrap">
        <div class="form-group mr-3">
          <label
            ><span class="pr-1" style="font-size: 12px !important"
              >ĐT di động</span
            ></label
          >
          <div>
            <va-input
              :title="errors.phone"
              :class="{ error: errors.phone }"
              style="width: 200px !important"
              v-model="fields.phone"
            /><error-label-component name="room_level_id" />
          </div>
        </div>
        <div class="form-group mr-3">
          <label
            ><span class="pr-1" style="font-size: 12px !important"
              >ĐT cố định</span
            ></label
          >
          <div>
            <va-input
              :title="errors.landline_phone"
              :class="{ error: errors.landline_phone }"
              style="width: 200px !important"
              v-model="fields.landline_phone"
            /><error-label-component name="room_level_id" />
          </div>
        </div>
        <div class="form-group mr-3">
          <label
            ><span class="pr-1" style="font-size: 12px !important"
              >Email</span
            ></label
          >
          <div>
            <va-input
              :title="errors.email"
              :class="{ error: errors.email }"
              style="width: 200px !important"
              v-model="fields.email"
            /><error-label-component name="room_level_id" />
          </div>
        </div>
      </div>
      <div class="form-wrap">
        <div class="form-group mr-3">
          <label
            ><span class="pr-1" style="font-size: 12px !important"
              >Tài khoản ngân hàng</span
            ></label
          >
          <div>
            <va-input
              :title="errors.bank_number"
              :class="{ error: errors.bank_number }"
              style="width: 200px !important"
              v-model="fields.bank_number"
            /><error-label-component name="room_level_id" />
          </div>
        </div>
        <div class="form-group mr-3">
          <label
            ><span class="pr-1" style="font-size: 12px !important"
              >Tên ngân hàng</span
            ></label
          >
          <div>
            <va-input
              :title="errors.bank_id"
              :class="{ error: errors.bank_id }"
              style="width: 200px !important"
              v-model="fields.bank_id"
            /><error-label-component name="room_level_id" />
          </div>
        </div>
        <div class="form-group mr-3">
          <label
            ><span class="pr-1" style="font-size: 12px !important"
              >Chi nhánh</span
            ></label
          >
          <div>
            <va-input
              :title="errors.bank_branch"
              :class="{ error: errors.bank_branch }"
              style="width: 200px !important"
              v-model="fields.bank_branch"
            /><error-label-component name="room_level_id" />
          </div>
        </div>
      </div>
      <hr style="margin-top: 35px; margin-bottom: 20px" />
    </template>

    <template v-slot:footer>
      <div class="btn-footer">
        <div>
          <va-button class="btn-main btn-cancle" @click="close()">
            Hủy
          </va-button>
        </div>
        <div>
          <va-button class="btn-main mr-2 btn-cancle" @click="save()">
            Cất
          </va-button>
          <va-button class="btn-main btn-add" @click="save()">
            Cất và Thêm
          </va-button>
        </div>
      </div>
    </template>
  </modal-default>
  <modal-default :class="`modal-err`" :showModal="modalErr">
    <template v-slot:body>
      <div class="mt-4 d-flex">
        <i class="fa-solid fa-circle-exclamation"></i>
        <div class="ms-4">
          <div v-if="errors.code" class="mb-2">{{ errors.code[0] }}</div>
          <div v-if="errors.name" class="mb-2">{{ errors.name[0] }}</div>
          <div v-if="errors.department_id" class="mb-2">
            {{ errors.department_id[0] }}
          </div>
          <div v-if="errors.title" class="mb-2">{{ errors.title[0] }}</div>
          <div v-if="errors.date_of_birth" class="mb-2">
            {{ errors.date_of_birth[0] }}
          </div>
          <div v-if="errors.gender" class="mb-2">{{ errors.gender[0] }}</div>
          <div v-if="errors.cmnd" class="mb-2">{{ errors.cmnd[0] }}</div>
          <div v-if="errors.license_date" class="mb-2">
            {{ errors.license_date[0] }}
          </div>
          <div v-if="errors.city" class="mb-2">{{ errors.city[0] }}</div>
          <div v-if="errors.address" class="mb-2">{{ errors.address[0] }}</div>
          <div v-if="errors.phone" class="mb-2">{{ errors.phone[0] }}</div>
          <div v-if="errors.landline_phone" class="mb-2">
            {{ errors.landline_phone[0] }}
          </div>
          <div v-if="errors.email" class="mb-2">{{ errors.email[0] }}</div>
          <div v-if="errors.bank_number" class="mb-2">
            {{ errors.bank_number[0] }}
          </div>
          <div v-if="errors.bank_id" class="mb-2">{{ errors.bank_id[0] }}</div>
          <div v-if="errors.bank_branch" class="mb-2">
            {{ errors.bank_branch[0] }}
          </div>
        </div>
      </div>
      <div>
        <hr />
      </div>
    </template>
    <template v-slot:footer>
      <div class="d-flex">
        <va-button class="btn-main btn-add mx-auto" @click="modalErr = false">
          Đóng
        </va-button>
      </div>
    </template>
  </modal-default>
</template>

<script setup>
import {
  defineProps,
  watch,
  computed,
  defineEmits,
  ref,
  reactive,
  onMounted,
} from "vue";
import axios from "axios";
import { menuMini, menu_width, loading } from "@/services/menu";
const props = defineProps({
  showModal: Boolean,
  titleModal: String,
  class: String,
});
const optionType = ref([
  {
    value: 0,
    label: "Nam",
  },
  {
    value: 1,
    label: "Nữ",
  },
  {
    value: 2,
    label: "Nam/nữ",
  },
]);
const modalErr = ref(false);
const fields = reactive({
  code: "",
  name: "",
  department_id: 1,
  title: "",
  date_of_birth: null,
  gender: 0,
  cmnd: "",
  license_date: null,
  city_id: "",
  address: "",
  phone: "",
  landline_phone: "",
  email: "",
  bank_number: "",
  bank_id: "",
  bank_branch: "",
  is_customer: false,
  is_supplier: false,
});
const errors = ref({});
const save = async () => {
  loading.value = true;
  errors.value = {};
  await axios
    .post("http://127.0.0.1:8000/api/employees", { ...fields })
    .then((res) => {
      console.log(res?.response?.data.errors);
      loading.value = false;
    })
    .catch((error) => {
      errors.value = error?.response?.data.errors;
      modalErr.value = true;
      console.log(errors.value);
      loading.value = false;
    });
};
const options = ["one", "two", "three"];
const selectedOption = ref("one");
const emit = defineEmits(["update:confirm"]);
const close = () => {
  emit("update:confirm", 1);
};
const listsDepartments = ref([]);
onMounted(() => {
  axios
    .get("http://127.0.0.1:8000/api/employees/get_code")
    .then((response) => {
      fields.code = response.data.data.code;
    })
    .catch((error) => {
      console.log(error);
    });
  axios
    .get("http://127.0.0.1:8000/api/departments")
    .then((res) => {
      listsDepartments.value = res.data.data;
      console.log(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
});
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
.error {
  border-color: red !important;
}
</style>