<template>
  <div>
    <div class="header">
      <h1>Nhân viên</h1>
      <va-button class="btn-main" @click="showModal()">
        Thêm mới nhân viên
      </va-button>
    </div>
    <div class="search mt-3 mb-2 pr-4">
      <va-input
        placeholder="Tìm theo mã, tên nhân viên"
        v-model="password"
        :type="text"
        class="mr-6 mb-6"
      >
        <template #appendInner>
          <i style="color: #a5a5a5" class="fa-solid fa-magnifying-glass"></i>
        </template>
      </va-input>
      <i
        style="font-size: 20px !important; color: #a5a5a5"
        class="fa-solid fa-rotate-right pt-1 ml-2"
      ></i>
    </div>
    <va-card :style="`width: calc( 100vw - ${width}px ) ;`">
      <va-card-title></va-card-title>
      <va-card-content>
        <table-component class="pitch--config__table">
          <template v-slot:head>
            <tr>
              <th style="width: 1%"><va-checkbox /></th>
              <th>Mã nhân viên</th>
              <th>Tên nhân viên</th>
              <th>Giới tính</th>
              <th>Ngày sinh</th>
              <th>Số CMND</th>
              <th>Chức danh</th>
              <th>Tên đơn vị</th>
              <th>Số tài khoản</th>
              <th>Tên ngân hàng</th>
              <th>Chi nhánh TK ngân hàng</th>
              <th style="width: 2%">Chức năng</th>
            </tr>
          </template>
          <template v-slot:body>
            <tr v-for="(item, key) in lists" :key="key">
              <td><va-checkbox /></td>
              <td>{{ item.code }}</td>
              <td>{{ item.name }}</td>
              <td>
                <span v-if="item.gender == 0">Nam</span>
                <span v-if="item.gender == 1">Nữ</span
                ><span v-if="item.gender == 2">Nam/Nữ</span>
              </td>
              <td>{{ item.date_of_birth }}</td>
              <td>{{ item.cmnd }}</td>
              <td>{{ item.title }}</td>
              <td>{{ item.department.name }}</td>
              <td>{{ item.bank_number }}</td>
              <td>{{ item.bank.name }}</td>
              <td>{{ item.bank_branch }}</td>
              <td class="text-center" style="color: #1787db">
                Sửa <i class="fa-solid fa-caret-down"></i>
              </td>
            </tr>
          </template>
        </table-component>
        <pagination-component
        class="me-3"
          :pagination="pagination"
          @changePagination="changePage"
        />
      </va-card-content>
    </va-card>
  </div>
  <add :showModal="modal" v-model:confirm="getConfirm" />
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { menuMini, menu_width } from "@/services/menu";
import Add from "@/components/Add.vue";
import PaginationComponent from "@/components/PaginationComponent.vue";
import axios from "axios";
const modal = ref(false);
const getConfirm = ref(0);
const showModal = () => {
  modal.value = true;
};
watch(getConfirm, () => {
  modal.value = false;
  getConfirm.value = 0;
});
const width = computed(() => {
  return menuMini.value ? 130 : 280;
});
const pagination = ref();
const lists = ref([]);
onMounted(() => {
  axios.get("http://127.0.0.1:8000/api/employees").then((response) => {
    lists.value = response.data.data;
    console.log(response.data.meta);
    pagination.value = response.data.meta;
  });
});
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.search {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
h1 {
  margin-bottom: 10px;
  font-size: 25px !important;
}
</style>