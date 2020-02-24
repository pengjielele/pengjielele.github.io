<template>
  <div class="user-findpwd">
    <h1 class="title">找回密码</h1>
    <el-form :model="findPwdForm" status-icon :rules="rules" ref="findPwdForm">
      <div class="form-group">
        <el-form-item prop="username">
          <el-input
            v-model="findPwdForm.username"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
      </div>
      <div class="form-group form-btn">
        <el-button
          type="primary"
          size="medium"
          @click="submitForm('findPwdForm')"
          >下一步</el-button
        >
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          return false;
        }
      });
    }
  },
  data() {
    return {
      findPwdForm: {
        username: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "change" }
        ]
      }
    };
  }
};
</script>
