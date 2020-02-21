<template>
  <div class="user-login">
    <h1 class="title">用户登录</h1>
    <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm">
      <div class="form-group">
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            placeholder="请输入手机号/邮箱"
            class="form-input-username"
          ></el-input>
        </el-form-item>

        <el-form-item prop="userpwd">
          <el-input
            type="password"
            v-model="loginForm.userpwd"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
      </div>
      <div class="form-group form-action row">
        <el-checkbox v-model="loginForm.rememberme">记住我</el-checkbox>
        <router-link to="/user/findpwd">忘记密码</router-link>
      </div>
      <div class="form-group form-btn">
        <el-button type="primary" size="medium" @click="submitForm"
          >登录</el-button
        >
      </div>
      <div class="form-link">
        没有账号？
        <router-link to="/user/register">快速注册</router-link>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  methods: {
    submitForm() {
      const self = this;
      self.$refs["loginForm"].validate(valid => {
        if (!valid) {
          return false;
        }
      });
    }
  },
  data() {
    var validateUserName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号/邮箱"));
      }
    };

    return {
      links: {
        register: "",
        findpwd: ""
      },
      loginForm: {
        username: "",
        userpwd: "",
        rememberme: false
      },
      rules: {
        username: [{ validator: validateUserName, trigger: "blur" }],
        userpwd: [{ required: true, message: "请输入密码", trigger: "change" }]
      }
    };
  }
};
</script>
