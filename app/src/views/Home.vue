<template>
  <div class="page-home">
    <div class="inner">
      <ul class="action-list row">
        <li class="action-item col-4" @click="handleJump('/')" v-if="1 === 2">
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
        <li class="action-item col-4" @click="handleJump('/admin/welcome')">
          <h1 class="title">Admin UI</h1>
          <div class="content">
            <i class="fa fa-bars fa-3x"></i>
          </div>
        </li>
        <li class="action-item col-4" @click="handleJump('/icon')">
          <h1 class="title">Icon</h1>
          <div class="content">
            <i class="fa fa-sun-o fa-3x"></i>
          </div>
        </li>
      </ul>
      <ul class="action-list row">
        <li class="action-item col-4" @click="handleJump('/code')">
          <h1 class="title">Code</h1>
          <div class="content">
            <i class="fa fa-code fa-3x"></i>
          </div>
        </li>
        <li class="action-item col-4" @click="handleJump('/note')">
          <h1 class="title">Note</h1>
          <div class="content">
            <i class="fa fa-edit fa-3x"></i>
          </div>
        </li>
        <li class="action-item col-4" @click="handleJump('/share')">
          <h1 class="title">Share</h1>
          <div class="content">
            <i class="fa fa-share-alt-square fa-3x"></i>
          </div>
        </li>
      </ul>
      <ul class="action-list row">
        <li class="action-item col-4" @click="handleJump('/color')">
          <h1 class="title">Color</h1>
          <div class="content">
            <i class="fa fa-th fa-3x"></i>
          </div>
        </li>
        <li class="action-item col-4" @click="handleJump('/pages')">
          <h1 class="title">Pages</h1>
          <div class="content">
            <i class="fa fa-th fa-3x"></i>
          </div>
        </li>
        <li class="action-item col-4" @click="handleJump('/imgs')">
          <h1 class="title">Imgs</h1>
          <div class="content">
            <i class="fa fa-th fa-3x"></i>
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
  .fa {
    color: #03a9f4;
  }
}

@media screen and (max-width: 768px) {
  .page-home {
    .inner {
      width: auto;
    }
    .row {
      flex-wrap: wrap;
      .col-4 {
        margin: 0;
        width: 100%;
        flex: 1 1 100%;
        max-width: unset;
        margin-bottom: 20px;
      }
    }
    .action-list {
      margin-bottom: 0;
      .action-item {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
