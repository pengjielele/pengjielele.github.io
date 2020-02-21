<template>
  <div class="user-register">
    <h1 class="title">用户注册</h1>
    <el-form
      :model="registerForm"
      status-icon
      :rules="rules"
      ref="registerForm"
    >
      <div class="form-group">
        <el-form-item prop="username">
          <el-input
            v-model="registerForm.username"
            placeholder="请输入邮箱"
          ></el-input>
        </el-form-item>

        <el-form-item prop="userphone">
          <el-input
            v-model="registerForm.userphone"
            placeholder="请输入手机号"
          ></el-input>
        </el-form-item>

        <el-form-item prop="code">
          <el-input
            v-model="registerForm.code"
            placeholder="请输入验证码"
          ></el-input>
        </el-form-item>

        <el-form-item prop="userpwd">
          <el-input
            type="password"
            v-model="registerForm.userpwd"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
      </div>
      <div class="form-group form-btn">
        <el-button type="primary" size="medium" @click="submitForm"
          >立即注册</el-button
        >
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  methods: {
    submitForm() {
      const self = this;
      self.$refs["registerForm"].validate(valid => {
        if (valid) {
          console.log(valid);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  data() {
    return {
      registerForm: {
        username: "",
        userphone: "",
        userpwd: "",
        code: "",
        rememberme: false
      },
      rules: {
        username: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
        userphone: [
          { required: true, message: "请输入密码", trigger: "change" }
        ],
        code: [{ required: true, message: "请输入密码", trigger: "change" }],
        userpwd: [{ required: true, message: "请输入密码", trigger: "change" }]
      }
    };
  }
};
</script>
