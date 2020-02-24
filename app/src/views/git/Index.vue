<template>
  <div class="page page-git">
    <ul class="list">
      <li class="item" v-for="item in list" v-bind:key="item.id">
        <h1 class="title">{{ item.title }}</h1>
        <div class="content">
          <codemirror v-model="item.content"></codemirror>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { list } from "@/db/git.js";

export default {
  name: "git",
  mounted() {
    window.scrollTo(0, 0);
  },
  data() {
    return {
      list: list
    };
  }
};
</script>

<style lang="scss" scoped>
.page-git {
  width: 800px;
  margin: 20px auto;
  .list {
    .item {
      margin-bottom: 20px;
      overflow: wrap;
      border-radius: 5px;
      .title {
        font-size: 16px;
        margin-bottom: 5px;
      }
      .content {
        border: 1px solid #ddd;
        font-size: 14px;
        border-radius: 5px;
        padding: 0 10px;
        .CodeMirror {
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .page-git {
    width: 100%;
    .list .item {
      .content {
        display: flex;
        flex-direction: column;
        .link {
          margin: 0;
        }
      }
    }
  }
}
</style>
