<template>
  <div class="page page-list">
    <div class="page-header">
      <h1 class="title">标签列表</h1>
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

          <el-form-item label="一级类别">
            <el-select
              v-model="searchData.cateId"
              placeholder="一级类别"
              @change="handleChange"
            >
              <el-option label="全部" value=""></el-option>
              <el-option
                v-for="cate in categories"
                :key="cate.id"
                :label="cate.name"
                :value="cate.id"
              >
              </el-option>
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
          <el-table-column prop="categoryName" label="一级类别">
          </el-table-column>
          <el-table-column prop="name" label="标签名称"> </el-table-column>
          <el-table-column prop="ruleName" label="标签值规则">
          </el-table-column>
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
        :page-size="searchData.pageSize"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  created: function() {},
  methods: {
    handleLook(index, row) {
      this.$router.push({
        path: `/tag/model/${row.id}/`,
        query: { property: row.property, name: encodeURIComponent(row.name) }
      });
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
        pageSize: 15
      },
      tags: [
        {
          id: 10254,
          categoryId: 111,
          enName: "sex",
          name: "性别",
          property: 1,
          rule: 1,
          text: null,
          operate: "admin",
          categoryName: "基本信息",
          createdAt: "2020-02-20 17:54:40",
          updatedAt: "2020-02-20 17:54:40"
        },
        {
          id: 10255,
          categoryId: 112,
          enName: "country",
          name: "国家",
          property: 1,
          rule: 2,
          text: null,
          operate: "admin",
          categoryName: "国家",
          createdAt: "2020-02-20 17:55:26",
          updatedAt: "2020-02-20 17:55:26"
        },
        {
          id: 10256,
          categoryId: 112,
          enName: "gonecountry",
          name: "去过的国家",
          property: 2,
          rule: 2,
          text: "灌灌灌灌",
          operate: "admin",
          categoryName: "国家",
          createdAt: "2020-02-20 17:57:13",
          updatedAt: "2020-02-20 17:57:13"
        }
      ],
      showPaging: true,
      categories: [
        {
          id: 112,
          companyId: 1,
          name: "国家",
          level: 1,
          createdAt: "2020-02-20 17:54:19",
          updatedAt: "2020-02-20 17:54:19"
        },
        {
          id: 111,
          companyId: 1,
          name: "基本信息",
          level: 1,
          createdAt: "2020-02-20 17:54:14",
          updatedAt: "2020-02-20 17:54:14"
        }
      ],
      total: 0
    };
  }
};
</script>
