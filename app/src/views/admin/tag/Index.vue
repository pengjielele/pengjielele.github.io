<template>
  <div class="page page-list page-tags">
    <div class="page-header">
      <h1 class="title">{{ $route.meta.title }}</h1>
    </div>
    <div class="page-body">
      <div class="search-form">
        <el-form :inline="true" :model="searchData" class="demo-form-inline">
          <el-form-item label="标签属性">
            <el-select
              v-model="searchData.property"
              placeholder="标签属性"
              @change="handleChange"
            >
              <el-option label="全部" value=""></el-option>
              <el-option label="原始标签" value="1"></el-option>
              <el-option label="模型标签" value="2"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="标签名称">
            <el-input
              v-model="searchData.tagName"
              placeholder="标签名称"
              style="width: 285px;"
              @change="handleChange"
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="handleSearch"
              ><i class="el-icon-search"></i>查询</el-button
            >
          </el-form-item>
        </el-form>
      </div>
      <div class="search-result">
        <el-table :data="tags" stripe style="width: 100%">
          <el-table-column fixed prop="id" label="标签ID"> </el-table-column>
          <el-table-column prop="propertyName" label="标签属性">
          </el-table-column>
          <el-table-column prop="name" label="标签名称"> </el-table-column>
          <el-table-column prop="operate" label="创建人"> </el-table-column>
          <el-table-column prop="createTime" label="创建时间">
          </el-table-column>
          <el-table-column label="操作" fixed="right" width="120px">
            <template slot-scope="scope">
              <el-button
                type="primary"
                plain
                size="mini"
                class="btn-table"
                @click="handleLook(scope.$index, scope.row)"
                >查看标签值</el-button
              >
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
import { tags } from "@/db/tag.js";

export default {
  created: function() {},
  methods: {
    handleLook() {
      // this.$router.push({
      //   path: `/tag/model/${row.id}/`,
      //   query: { property: row.property, name: encodeURIComponent(row.name) }
      // });
    },
    handleChange() {
      this.searchData.page = 1;
    },
    handleCurrentChange(page) {
      let data = this.$data.searchData;
      data.page = page;
      this.getTags(data);
    },
    handleSearch() {
      let data = this.$data.searchData;
      this.getTags(data);
    },
    handleJump(name) {
      this.$router.push(`/tag/${name}/`);
    },
    formatTags(tags) {
      const newTags = tags.map(item => {
        const createDates = item.createdAt.split(" ");
        item.ruleName = item.rule === 1 ? "单选" : "多选";
        item.propertyName = item.property === 1 ? "原始标签" : "模型标签";
        item.createTime = createDates[0] ? createDates[0] : "";
        item.operate = item.operate || "--";
        return item;
      });
      return newTags;
    },
    getTags() {},
    getCategories() {}
  },
  data() {
    return {
      showGuide: false,
      searchData: {
        tagName: "",
        property: "",
        cateId: "",
        page: 1,
        size: 15
      },
      tags: tags,
      showPaging: true,
      total: 0
    };
  }
};
</script>
