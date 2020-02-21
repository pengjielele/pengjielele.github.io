<template>
  <div class="page page-contacts">
    <div class="page-header">
      <h1 class="title">{{ $route.meta.title }}</h1>
    </div>
    <div class="page-body">
      <el-tabs v-model="searchData.type" @tab-click="handleTabClick">
        <el-tab-pane name="0" label="一对一">
          <div class="search-list">
            <el-table
              :data="list"
              stripe
              style="width: 100%"
              @selection-change="handleSelectionChange"
            >
              <el-table-column fixed prop="id" label="ID" width="55px">
              </el-table-column>
              <el-table-column prop="name" label="姓名"> </el-table-column>
              <el-table-column prop="mobile" label="手机"> </el-table-column>
              <el-table-column prop="city" label="城市"> </el-table-column>
              <el-table-column prop="birthday" label="出生日期">
              </el-table-column>
              <el-table-column prop="sex" label="性别"> </el-table-column>
              <el-table-column prop="tags" label="标签"> </el-table-column>
              <el-table-column label="备注" width="150px">
                <template slot-scope="scope">
                  <el-input
                    v-model="scope.row.remark"
                    placeholder="请输入内容"
                  ></el-input>
                </template>
              </el-table-column>
              <el-table-column fixed="right" type="selection" width="55">
              </el-table-column>
            </el-table>
          </div>
          <div class="search-action">
            <div class="info">
              <span v-if="merges.length > 0">
                要合并的序列是： {{ mergeIds }}
              </span>
            </div>
            <el-button type="primary" :disabled="disabled" @click="handleMerge"
              >合并数据</el-button
            >
          </div>
          <div class="search-paging">
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
        </el-tab-pane>

        <el-tab-pane name="1" label="群内">
          <div class="search-list">
            <el-table
              :data="list"
              stripe
              style="width: 100%"
              @selection-change="handleSelectionChange"
            >
              <el-table-column fixed prop="id" label="ID" width="55px">
              </el-table-column>
              <el-table-column prop="name" label="姓名"> </el-table-column>
              <el-table-column prop="mobile" label="手机"> </el-table-column>
              <el-table-column prop="city" label="城市"> </el-table-column>
              <el-table-column prop="birthday" label="出生日期">
              </el-table-column>
              <el-table-column prop="sex" label="性别"> </el-table-column>
              <el-table-column prop="tags" label="标签"> </el-table-column>
              <el-table-column label="备注" width="150px">
                <template slot-scope="scope">
                  <el-input
                    v-model="scope.row.remark"
                    placeholder="请输入内容"
                  ></el-input>
                </template>
              </el-table-column>
              <el-table-column label="设为星标" width="80px">
                <template slot-scope="scope">
                  <el-checkbox v-model="scope.row.star">{{
                    scope.row.star ? "星标" : "取消"
                  }}</el-checkbox>
                </template>
              </el-table-column>
              <el-table-column fixed="right" type="selection" width="55">
              </el-table-column>
            </el-table>
          </div>
          <div class="search-action">
            <div class="info">
              <span v-if="merges.length > 0">
                要合并的序列是： {{ mergeIds }}
              </span>
            </div>
            <el-button type="primary" :disabled="disabled" @click="handleMerge"
              >合并数据</el-button
            >
          </div>
          <div class="search-paging">
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
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.getList();
  },
  computed: {
    disabled: function() {
      return this.merges.length <= 0 ? true : false;
    },
    mergeIds: function() {
      return this.merges
        .map(item => {
          return item.id;
        })
        .join(",");
    }
  },
  methods: {
    handleMerge() {
      this.$message({
        type: "success",
        message: "success",
        center: true
      });
    },
    handleSelectionChange(val) {
      this.merges = val;
    },
    handleTabClick() {
      let data = this.$data.searchData;
      data.page = 1;
      this.getList(data);
    },
    handleCurrentChange(page) {
      let data = this.$data.searchData;
      data.page = page;
      this.getList(data);
    },
    formatList(list) {
      const newList = list.map(item => {
        return item;
      });
      return newList;
    },
    getList() {}
  },
  data() {
    return {
      list: [
        {
          id: 1,
          name: "jim",
          mobile: "18614023236",
          city: "beijing",
          birthday: "1990-11-05",
          sex: "male",
          remark: "",
          tags: "funny",
          star: true
        },
        {
          id: 2,
          name: "jim",
          mobile: "18614023236",
          city: "beijing",
          birthday: "1990-11-05",
          sex: "male",
          remark: "",
          tags: "funny",
          star: true
        },
        {
          id: 3,
          name: "jim",
          mobile: "18614023236",
          city: "beijing",
          birthday: "1990-11-05",
          sex: "male",
          remark: "",
          tags: "funny",
          star: true
        },
        {
          id: 4,
          name: "jim",
          mobile: "18614023236",
          city: "beijing",
          birthday: "1990-11-05",
          sex: "male",
          remark: "",
          tags: "funny",
          star: true
        },
        {
          id: 5,
          name: "jim",
          mobile: "18614023236",
          city: "beijing",
          birthday: "1990-11-05",
          sex: "male",
          remark: "",
          tags: "funny",
          star: true
        },
        {
          id: 6,
          name: "jim",
          mobile: "18614023236",
          city: "beijing",
          birthday: "1990-11-05",
          sex: "male",
          remark: "",
          tags: "funny",
          star: true
        },
        {
          id: 7,
          name: "jim",
          mobile: "18614023236",
          city: "beijing",
          birthday: "1990-11-05",
          sex: "male",
          remark: "",
          tags: "funny",
          star: true
        }
      ],
      size: 20,
      showPaging: true,
      total: 20,
      merges: [],
      searchData: {
        type: "0", // type 0，联系人 1，群
        page: 1,
        size: 15
      }
    };
  }
};
</script>
