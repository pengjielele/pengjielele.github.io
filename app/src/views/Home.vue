<template>
  <div class="page-home">
    <ul class="action-list row">
      <li class="action-item col-6" @click="handleJump('/')">
        <h1 class="title">Home</h1>
        <div class="content">
          <i class="fa fa-home fa-5x"></i>
        </div>
      </li>
      <li class="action-item col-6" @click="handleJump('/ui')">
        <h1 class="title">UI</h1>
        <div class="content">
          <i class="fa fa-paper-plane fa-5x"></i>
        </div>
      </li>
    </ul>
    <ul class="action-list row">
      <li class="action-item col-6" @click="handleJump('/code')">
        <h1 class="title">Code</h1>
        <div class="content">
          <i class="fa fa-code fa-5x"></i>
        </div>
      </li>
      <li class="action-item col-6" @click="handleJump('/admin')">
        <h1 class="title">Admin</h1>
        <div class="content">
          <i class="fa fa-bars fa-5x"></i>
        </div>
      </li>
    </ul>
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
  width: 800px;
  margin: 0 auto;
  .action-list {
    .action-item {
      box-shadow: 1px 1px 5px #ddd;
      min-height: 300px;
      cursor: pointer;
      .title {
        font-size: 16px;
      }
    }
  }
}
</style>
