<template>
  <div class="page page-update">
    <div class="page-header">
      <h1 class="title">{{ $route.meta.title }}</h1>
    </div>
    <div class="page-body">
      <el-form ref="myForm" :model="myForm" :rules="rules">
        <div class="form-group">
          <div class="form-label">
            <label>文章类别</label>
          </div>
          <el-form-item prop="category">
            <el-select v-model="myForm.category" placeholder="请选择类别">
              <el-option
                v-for="cate in categories"
                :key="cate.id"
                :label="cate.name"
                :value="cate.id"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </div>

        <div class="form-group">
          <div class="form-label">
            <label>文章标题</label>
          </div>
          <el-form-item prop="title">
            <el-input v-model="myForm.title" clearable></el-input>
          </el-form-item>
        </div>

        <div class="form-group">
          <div class="form-label">
            <el-tooltip placement="top">
              <div slot="content" v-html="tooltips.url"></div>
              <i class="el-icon-question"></i>
            </el-tooltip>
            <label>文章Url</label>
          </div>
          <el-form-item prop="url">
            <el-input v-model="myForm.url" clearable></el-input>
          </el-form-item>
        </div>

        <div class="form-group">
          <div class="form-label">
            <label>文章标签</label>
          </div>
          <el-form-item prop="tags">
            <el-input v-model="myForm.tags" clearable></el-input>
          </el-form-item>
        </div>

        <div class="form-group">
          <div class="form-label">
            <label>文章内容</label>
          </div>
          <el-form-item prop="content">
            <el-input
              type="textarea"
              :rows="6"
              v-model="myForm.content"
              clearable
            ></el-input>
          </el-form-item>
        </div>

        <div class="form-group">
          <div class="form-label">
            <el-tooltip placement="top">
              <div slot="content" v-html="tooltips.status"></div>
              <i class="el-icon-question"></i>
            </el-tooltip>
            <label>文章状态</label>
          </div>
          <el-form-item prop="status">
            <el-radio-group v-model="myForm.status">
              <el-radio label="0">立即发布</el-radio>
              <el-radio label="1">保存草稿</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <div class="form-group form-btn">
          <el-form-item>
            <el-button type="primary" @click="handleSave">保存</el-button>
            <el-button @click="handleBack">返回</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { categories } from "@/db/category.js";
import { articles } from "@/db/article.js";

export default {
  created() {
    const params = this.$route.params;
    if (params && params.id) {
      this.myForm = articles[0];
    }
  },
  methods: {
    handleSave() {
      const self = this;
      self.$refs["myForm"].validate(valid => {
        if (!valid) {
          return false;
        }
        self.$message({
          type: "success",
          message: "操作成功",
          center: true,
          onClose: function() {
            self.$router.replace(`/admin/article/list`);
          }
        });
      });
    },
    handleBack() {
      this.$router.back();
    }
  },
  data() {
    const checkUrl = (rule, value, callback) => {
      if (!value) {
        return callback("请输入文章Url");
      }
      callback();
    };

    return {
      myForm: {
        category: "",
        title: "",
        url: "",
        status: "",
        content: "",
        tags: ""
      },
      tooltips: {
        url: "文章Url",
        status: "文章状态"
      },
      rules: {
        category: [
          { required: true, message: "请选择类别", trigger: "change" }
        ],
        title: [{ required: true, message: "请输入标题", trigger: "change" }],
        url: [{ validator: checkUrl, trigger: "change" }],
        tags: [{ required: true, message: "请输入标签", trigger: "change" }],
        content: [{ required: true, message: "请输入内容", trigger: "change" }],
        status: [
          { required: true, message: "请选择文章状态", trigger: "change" }
        ]
      },
      categories: categories
    };
  }
};
</script>
