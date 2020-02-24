<template>
  <div class="page-home">
    <div class="inner">
      <ul class="action-list row">
        <li class="action-item col-4" @click="handleJump('/')">
          <h1 class="title">Home</h1>
          <div class="content">
            <i class="fa fa-home fa-4x"></i>
          </div>
        </li>
        <li class="action-item col-4" @click="handleJump('/ui')">
          <h1 class="title">UI</h1>
          <div class="content">
            <i class="fa fa-paper-plane fa-3x"></i>
          </div>
        </li>
        <li class="action-item col-4" @click="handleJump('/admin')">
          <h1 class="title">Admin</h1>
          <div class="content">
            <i class="fa fa-bars fa-3x"></i>
          </div>
        </li>
      </ul>
      <ul class="action-list row">
        <li class="action-item col-6" @click="handleJump('/code')">
          <h1 class="title">Code</h1>
          <div class="content">
            <i class="fa fa-code fa-3x"></i>
          </div>
        </li>
        <li class="action-item col-6" @click="handleJump('/note')">
          <h1 class="title">Note</h1>
          <div class="content">
            <i class="fa fa-edit fa-3x"></i>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    handleJump(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style lang="scss" scoped>
.page-home {
  background: #fdfcfb;
  .inner {
    width: 800px;
    margin: 0 auto;
  }
  .action-list {
    .action-item {
      box-shadow: 1px 1px 5px #ddd;
      min-height: 300px;
      padding: 70px 0;
      cursor: pointer;
      .title {
        font-size: 24px;
      }
    }
  }
}
</style>
