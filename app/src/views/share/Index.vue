<template>
  <div class="page page-share">
    <ul class="list">
      <li class="item" v-for="item in shares" v-bind:key="item.id">
        <h1 class="title">{{ item.title }}</h1>
        <div class="content">
          <div v-html="item.content"></div>
          <a class="link" :href="item.url" target="_blank">提取</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { shares } from "@/db/share.js";

export default {
  name: "share",
  data() {
    return {
      shares: shares
    };
  }
};
</script>

<style lang="scss" scoped>
.page-share {
  width: 800px;
  margin: 20px auto;
  .list {
    .item {
      margin-bottom: 20px;
      overflow: wrap;
      box-shadow: 1px 1px 5px #ddd;
      padding: 15px;
      border-radius: 5px;
      .content {
        line-height: 30px;
        display: flex;
        .link {
          margin-left: 10px;
          text-decoration: none;
        }
      }
      .title {
        font-size: 16px;
        margin-bottom: 5px;
      }
    }
  }
}
</style>
