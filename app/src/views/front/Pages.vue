<template>
  <div class="page page-pages">
    <div class="navs">
      <router-link to="/">Home</router-link>
      <i class="fa fa-chevron-right"></i>
      <a>Pages</a>
    </div>
    <div class="list">
      <dl class="item" v-for="item in list" v-bind:key="item.id">
        <dt>{{ item.name }}</dt>
        <dd v-for="page in item.childs" v-bind:key="page.id">
          <a :href="page.link" target="_blank">{{ page.title }}</a>
        </dd>
      </dl>
    </div>
    <back-top></back-top>
  </div>
</template>

<script>
import BackTop from "@/components/BackTop.vue";
import { pages } from "@/db/front/page.js";

export default {
  name: "Pages",
  components: {
    BackTop
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  data() {
    return {
      list: pages
    };
  }
};
</script>

<style lang="scss" scoped>
.page-pages {
  width: 800px;
  margin: 20px auto;
  .list {
    .item {
      margin-bottom: 15px;
    }
    dt {
      font-size: 20px;
      font-weight: bold;
      margin: 10px 0;
    }
    dd {
      margin: 5px 0;
    }
  }
}

@media screen and (max-width: 768px) {
  .page-pages {
    width: 100%;
  }
}
</style>
