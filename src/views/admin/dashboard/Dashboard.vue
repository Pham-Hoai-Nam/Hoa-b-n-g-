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
        v-model="searchValue"
        :type="text"
        class="mr-6 mb-6"
        @keydown.enter="search()"
      >
        <template #appendInner>
          <i
            style="color: #a5a5a5; cursor: pointer"
            class="fa-solid fa-magnifying-glass"
            @click="search()"
          ></i>
        </template>
      </va-input>
      <i
        style="font-size: 20px !important; color: #a5a5a5; cursor: pointer"
        class="fa-solid fa-rotate-right pt-1 ml-2"
        @click="searchAll()"
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
              <td>{{ item.department?.name }}</td>
              <td>{{ item.bank_number }}</td>
              <td>{{ item.bank?.name }}</td>
              <td>{{ item.bank_branch }}</td>
              <td
                class="text-center position-relative"
                style="color: #1787db"
                @click="item.choose = !item.choose"
              >
                Sửa <i class="fa-solid fa-caret-down"></i>
                <div v-if="item.choose" class="popup">
                  <div class="" @click="activeRow($event)">Nhân bản</div>
                  <div
                    class=""
                    @click="activeRow($event), eventDelete(item.code, item.id)"
                  >
                    Xóa
                  </div>
                  <div class="" @click="activeRow($event)">Ngừng xử dụng</div>
                </div>
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
  <modal-default :class="`modal-err`" :showModal="modalDelete">
    <template v-slot:body>
      <div class="mt-4 d-flex">
        <i
          class="fa-solid fa-triangle-exclamation"
          style="color: #fec107; font-size: 35px !important"
        ></i>
        <div class="ms-4 pt-3">
          Bạn có thực sự muốn xóa nhân viên {{ codeValue }} không?
        </div>
      </div>
      <div>
        <hr />
      </div>
    </template>
    <template v-slot:footer>
      <div class="d-flex">
        <va-button
          class="btn-main btn-cancle mx-auto"
          @click="modalDelete = false"
        >
          Không
        </va-button>
        <va-button class="btn-main btn-add mx-auto" @click="save()">
          Có
        </va-button>
      </div>
    </template>
  </modal-default>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { menuMini, menu_width, loading } from "@/services/menu";
import Add from "@/components/Add.vue";
import PaginationComponent from "@/components/PaginationComponent.vue";
import axios from "axios";
const modal = ref(false);
const modalDelete = ref(false);
const getConfirm = ref(0);
const nextPage = ref(1);
const showPopup = ref([]);
const showModal = () => {
  modal.value = true;
};
const activeRow = (e) => {
  document
    .querySelectorAll(".active")
    .forEach((el) => el.classList.remove("active"));
  e.currentTarget.classList.add("active");
};
const codeValue = ref("");
const idDelete = ref(0);
const eventDelete = (code, id) => {
  modalDelete.value = true;
  codeValue.value = code;
  idDelete.value = id;
};
watch(getConfirm, () => {
  modal.value = false;
  getConfirm.value = 0;
});
const width = computed(() => {
  return menuMini.value ? 130 : 280;
});
const pagination = ref();
watch(pagination, (newData, oldData) => {
  nextPage.value = newData.current_page;
});
const changePage = async (entry) => {
  loading.value = true;
  await axios
    .get(
      `http://127.0.0.1:8000/api/employees?page=${entry.nextPage}&per_page=${entry.perPage}`
    )
    .then((response) => {
      lists.value = response.data.data;
      lists.value.map((item) => {
        item.choose = false;
      });
      pagination.value = response.data.meta;
      loading.value = false;
    });
};
const save = async () => {
  loading.value = true;
  await axios
    .delete(`http://127.0.0.1:8000/api/employees/${idDelete.value}`)
    .then((response) => {
      axios.get("http://127.0.0.1:8000/api/employees").then((response) => {
        lists.value = response.data.data;
        lists.value.map((item) => {
          item.choose = false;
        });
        pagination.value = response.data.meta;
        loading.value = false;
      });
      modalDelete.value = false;
    })
    .catch((err) => {
      console.log(err);
    });
};
const searchValue = ref("");
const search = async () => {
  loading.value = true;
  await axios
    .get(`http://127.0.0.1:8000/api/employees?search=${searchValue.value}`)
    .then((response) => {
      lists.value = response.data.data;
      lists.value.map((item) => {
        item.choose = false;
      });
      pagination.value = response.data.meta;
      loading.value = false;
    });
};
const searchAll = async () => {
  loading.value = true;
  await axios.get(`http://127.0.0.1:8000/api/employees`).then((response) => {
    lists.value = response.data.data;
    lists.value.map((item) => {
      item.choose = false;
    });
    searchValue.value = ""
    pagination.value = response.data.meta;
    loading.value = false;
  });
};
const lists = ref([]);
onMounted(() => {
  loading.value = true;
  axios
    .get("http://127.0.0.1:8000/api/employees")
    .then((response) => {
      lists.value = response.data.data;
      lists.value.map((item) => {
        item.choose = false;
      });
      pagination.value = response.data.meta;
      loading.value = false;
    })
    .catch((err) => {
      console.log(err);
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
.active {
  color: green;
}
</style>