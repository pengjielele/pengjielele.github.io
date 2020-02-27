<template>
  <div class="page page-category">
    <div class="page-header">
      <h1 class="title">{{ $route.meta.title }}</h1>
      <div class="">
        <el-button type="primary" size="medium" @click="handleAdd"
          >新增类别</el-button
        >
      </div>
    </div>

    <div class="page-body">
      <div class="search-result">
        <el-table :data="list" stripe style="width: 100%">
          <el-table-column fixed prop="id" label="ID"> </el-table-column>
          <el-table-column prop="name" label="分类"> </el-table-column>
          <el-table-column prop="createdAt" label="创建时间"> </el-table-column>
          <el-table-column label="操作" fixed="right" width="150px">
            <template slot-scope="scope">
              <el-button
                type="primary"
                plain
                size="mini"
                class="btn-table"
                @click="handleEdit(scope.$index, scope.row)"
                >修改</el-button
              >
              <el-button
                type="warning"
                plain
                size="mini"
                class="btn-table"
                @click="handleDelete(scope.row.name)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <el-dialog
      :title="title"
      width="450px"
      top="30vh"
      class="dialog-category"
      :visible.sync="showForm"
    >
      <el-form :model="cateForm" ref="cateForm">
        <el-form-item
          label="类别名称"
          label-width="180"
          prop="name"
          :rules="[{ required: true, message: '请填写类别名称' }]"
        >
          <el-input
            v-model="cateForm.name"
            placehoder="类别名称"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <div class="form-group">
          <el-button type="primary" @click="handleConfirm">确认</el-button>
        </div>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { categories } from "@/db/admin/category.js";

export default {
  created() {},
  computed: {
    title() {
      return this.cateForm.id ? "编辑类别" : "新增类别";
    }
  },
  methods: {
    handleAdd() {
      this.showForm = true;
    },
    handleDelete(name) {
      this.$confirm(`确认删除类别'${name}'?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {});
    },
    handleEdit() {
      this.cateForm = categories[0];
      this.showForm = true;
    },
    handleConfirm() {
      this.$refs["cateForm"].validate(valid => {
        if (!valid) {
          return false;
        }
        this.$message({
          type: "success",
          message: "操作成功",
          center: true
        });
      });
    }
  },
  data() {
    return {
      list: categories,
      cateForm: {
        name: ""
      },
      showForm: false
    };
  }
};
</script>
