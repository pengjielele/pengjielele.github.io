<template>
  <div class="page page-category">
    <div class="page-header">
      <h1 class="title">{{ $route.meta.title }}</h1>
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
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {},
  methods: {
    handleEdit() {}
  },
  data() {
    return {
      list: [
        {
          id: 113,
          companyId: 1,
          name: "发送方式",
          level: 1,
          createdAt: "2020-02-21 15:19:17",
          updatedAt: "2020-02-21 15:19:17"
        },
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
      ]
    };
  }
};
</script>
