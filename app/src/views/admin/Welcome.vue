<template>
  <div class="page-welcome">
    <div class="page-title"><strong>欢迎你！</strong>请选择</div>
    <div class="page-body">
      <div class="action-list row">
        <div class="action-item col-3" @click="jumpToPage('/admin/category/')">
          <h1 class="title">类别管理</h1>
          <div class="content">
            <i class="fa fa-user-circle fa-5x"></i>
          </div>
        </div>
        <div class="action-item col-3" @click="jumpToPage('/admin/tags/')">
          <h1 class="title">标签管理</h1>
          <div class="content">
            <i class="fa fa-tags fa-5x"></i>
          </div>
        </div>
        <div
          class="action-item col-3"
          @click="jumpToPage('/admin/article/list')"
        >
          <h1 class="title">文章管理</h1>
          <div class="content">
            <i class="fa fa-address-card fa-5x"></i>
          </div>
        </div>
        <div class="action-item col-3" @click="jumpToPage('/admin/contacts/')">
          <h1 class="title">通迅录</h1>
          <div class="content">
            <i class="fa fa-address-book fa-5x"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    jumpToPage(path) {
      this.$router.push(path);
    }
  }
};
</script>
