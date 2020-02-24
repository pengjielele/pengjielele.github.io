<template>
  <div class="user-resetpwd">
    <h1 class="title">重置密码</h1>
    <el-form
      :model="resetPwdForm"
      status-icon
      :rules="rules"
      ref="resetPwdForm"
    >
      <div class="form-group">
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="resetPwdForm.password"
            placeholder="请输入新密码"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password2">
          <el-input
            type="password"
            v-model="resetPwdForm.password2"
            placeholder="请再次输入新密码"
          ></el-input>
        </el-form-item>
      </div>
      <div class="form-group form-btn">
        <el-button type="primary" size="medium" @click="submitForm"
          >确定修改</el-button
        >
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  methods: {
    submitForm() {
      this.$refs["resetPwdForm"].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          return false;
        }
      });
    }
  },
  data() {
    var validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.resetPwdForm.password2 !== "") {
          this.$refs.resetPwdForm.validateField("password2");
        }
        callback();
      }
    };
    var validatePassword2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.resetPwdForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    return {
      resetPwdForm: {
        password: "",
        password2: ""
      },
      rules: {
        password: [{ validator: validatePassword, trigger: "change" }],
        password2: [{ validator: validatePassword2, trigger: "change" }]
      }
    };
  }
};
</script>
