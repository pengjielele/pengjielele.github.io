<template>
  <div class="page page-user">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
.page-user {
  display: flex;
  align-items: center;
  justify-content: center;
  .user-login,
  .user-resetpwd,
  .user-findpwd,
  .user-register {
    width: 450px;
    margin-top: -150px;
    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .form-group {
      margin-bottom: 10px;
    }
    .title {
      text-align: center;
      margin: 20px 0;
    }
    .el-button {
      width: 100%;
    }
    .form-btn {
      margin-top: 20px;
    }
  }
}
</style>
