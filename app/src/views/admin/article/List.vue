<template>
  <div class="page page-list page-articles">
    <div class="page-header">
      <h1 class="title">{{ $route.meta.title }}</h1>
    </div>
    <div class="page-body">
      <div class="search-form">
        <el-form :inline="true" :model="searchData">
          <el-form-item label="标题">
            <el-input
              v-model="searchData.title"
              placeholder="标题"
              style="width: auto;"
              @change="handleChange"
            ></el-input>
          </el-form-item>

          <el-form-item label="文章状态">
            <el-select
              v-model="searchData.status"
              placeholder="文章状态"
              @change="handleChange"
              width="150px"
            >
              <el-option label="全部" value=""></el-option>
              <el-option
                v-for="item in statuses"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item>
            <el-button class="btn-search" type="primary" @click="handleSearch"
              ><i class="el-icon-search"></i>查询</el-button
            >
            <el-button
              type="success"
              icon="el-icon-document-add"
              @click="handleAdd"
              >新建</el-button
            >
          </el-form-item>
        </el-form>
      </div>
      <div class="search-result">
        <el-table :data="list" stripe style="width: 100%">
          <el-table-column fixed prop="id" label="ID"> </el-table-column>
          <el-table-column prop="title" label="标题"> </el-table-column>
          <el-table-column prop="author" label="作者"> </el-table-column>
          <el-table-column prop="tags" label="标签"> </el-table-column>
          <el-table-column label="简介" width="200px" v-if="1 === 2">
            <template slot-scope="scope">
              <div v-html="scope.row.desc"></div>
            </template>
          </el-table-column>
          <el-table-column label="文章状态" width="140px;">
            <template slot-scope="scope">
              <template v-if="scope.row.status === '0'">
                <el-tag type="warning" effect="dark">
                  {{ statusMap[scope.row.status] }}
                </el-tag>
              </template>
              <template v-else-if="scope.row.status === '1'">
                <el-tag type="success" effect="dark">
                  {{ statusMap[scope.row.status] }}
                </el-tag>
              </template>
            </template>
          </el-table-column>
          <el-table-column prop="create_time" label="创建时间">
          </el-table-column>
          <el-table-column prop="publish_time" label="发布时间">
          </el-table-column>
          <el-table-column label="操作" fixed="right" width="160px">
            <template slot-scope="scope">
              <div class="btn-group">
                <el-button
                  type="primary"
                  plain
                  size="medium"
                  @click="handleEdit(scope.row.id)"
                  >编辑</el-button
                >
                <el-button
                  type="warning"
                  plain
                  size="medium"
                  @click="handleDelete(scope.row.title)"
                  >删除</el-button
                >
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="page-footer">
      <el-pagination
        background
        layout="prev, pager, next"
        :hide-on-single-page="showPaging"
        :total="total"
        :page-size="searchData.size"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { articles } from "@/db/article.js";
import { toArray } from "@/utils/index.js";

export default {
  created() {},
  methods: {
    handleAdd() {
      this.$router.push("/admin/article/add");
    },
    handleDelete(title) {
      this.$confirm(`确认删除文章${title}?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {});
    },
    handleEdit(id) {
      this.$router.push(`/admin/article/edit/${id}`);
    },
    handleChange() {
      this.searchData.page = 1;
    },
    handleCurrentChange(page) {
      let data = this.$data.searchData;
      data.page = page;
      this.getList(data);
    },
    handleSearch() {
      let data = this.$data.searchData;
      this.getList(data);
    },
    getList() {}
  },
  data() {
    const statusMap = {
      "0": "未发布",
      "1": "已发布"
    };

    const statuses = toArray(statusMap);

    return {
      searchData: {
        title: "",
        status: "",
        categoryId: "",
        tags: "",
        page: 1,
        size: 5
      },
      list: articles,
      showPaging: true,
      total: 20,
      statuses: statuses,
      statusMap: statusMap
    };
  }
};
</script>
