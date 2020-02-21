<template>
  <div class="page page-card">
    <div class="page-header">
      <h1 class="title">{{ $route.meta.title }}</h1>
    </div>

    <div class="page-body">
      <div class="panel">
        <h1 class="title">一行两列</h1>
        <div class="action-list row">
          <div class="action-item col-6">
            <h1 class="title">用户管理</h1>
            <div class="content">
              <i class="fa fa-user-circle fa-5x"></i>
            </div>
          </div>
          <div class="action-item col-6">
            <h1 class="title">标签管理</h1>
            <div class="content">
              <i class="fa fa-tags fa-5x"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="panel">
        <h1 class="title">一行三列</h1>
        <div class="action-list row">
          <div class="action-item col-4">
            <h1 class="title">用户管理</h1>
            <div class="content">
              <i class="fa fa-user-circle fa-5x"></i>
            </div>
          </div>
          <div class="action-item col-4">
            <h1 class="title">标签管理</h1>
            <div class="content">
              <i class="fa fa-tags fa-5x"></i>
            </div>
          </div>
          <div class="action-item col-4">
            <h1 class="title">标签管理</h1>
            <div class="content">
              <i class="fa fa-tags fa-5x"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="panel">
        <h1 class="title">一行四列</h1>
        <div class="action-list row">
          <div class="action-item col-3">
            <h1 class="title">用户管理</h1>
            <div class="content">
              <i class="fa fa-user-circle fa-5x"></i>
            </div>
          </div>
          <div class="action-item col-3">
            <h1 class="title">标签管理</h1>
            <div class="content">
              <i class="fa fa-tags fa-5x"></i>
            </div>
          </div>
          <div class="action-item col-3">
            <h1 class="title">文章管理</h1>
            <div class="content">
              <i class="fa fa-address-card fa-5x"></i>
            </div>
          </div>
          <div class="action-item col-3">
            <h1 class="title">通迅录</h1>
            <div class="content">
              <i class="fa fa-address-book fa-5x"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.page-card {
  .panel {
    margin-bottom: 20px;
    .title {
      margin-bottom: 10px;
      font-size: 16px;
    }
  }
}
</style>
