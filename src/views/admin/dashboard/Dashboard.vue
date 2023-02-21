<template>
  <div>
    <h1>Nhân viên</h1>
    <va-card>
      <va-card-title></va-card-title>
      <va-card-content>
        <table-component class="pitch--config__table">
          <template v-slot:head>
            <tr>
              <th><va-checkbox/></th>
              <th>Mã nhân viên</th>
              <th>Tên nhân viên</th>
              <th>Giới tính</th>
              <th>Ngày sinh</th>
              <th>Số CCCD</th>
              <th>Chức danh</th>
              <th>Tên đơn vị</th>
              <th>Số tài khoản</th>
              <th>Tên ngân hàng</th>
              <th>Chi nhánh TK ngân hàng</th>
              <th>Chức năng</th>
            </tr>
          </template>
          <template v-slot:body>
            <!-- <tr v-for="item in 5" :key="item">
              <td>TTCK</td>
              <td>Thanh toán chuyển khoản</td>
              <td>Lorem ipsum dolor sit amet consectetur</td>
              <td class="text-center">Sử dụng</td>
              <td class="text-center"><i class="fa-solid fa-trash"></i></td>
            </tr> -->
          </template>
        </table-component>
      </va-card-content>
    </va-card>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
};
</script>

<style scoped>
h1 {
  margin-top: -20px;
  margin-bottom: 10px;
  font-size: 25px !important;
}
</style>