<template>
  <div class="page page-codeimgs">
    <div class="navs">
      <router-link to="/">Home</router-link>
      <i class="fa fa-chevron-right"></i>
      <a>CodeImgs</a>
    </div>
    <div class="list">
      <ul class="item" v-for="(item, index) in list" v-bind:key="item.id">
        <li @click="handleLook(item.id)">
          <div class="media">
            <span>{{ index + 1 }}. {{ item.title }}</span
            ><a class="link">查看</a>
          </div>
          <template v-if="item.show"><img :src="item.image"/></template>
        </li>
      </ul>
    </div>
    <back-top></back-top>
  </div>
</template>

<script>
import BackTop from "@/components/BackTop.vue";
import { codeimgs } from "@/db/front/codeimgs.js";

export default {
  name: "CodeImgs",
  components: {
    BackTop
  },
  methods: {
    handleLook(id) {
      this.list = this.list.map(item => {
        item.show = false;
        if (item.id === id) {
          item.show = true;
        }
        return item;
      });
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  data() {
    return {
      list: codeimgs.map(item => {
        item.show = false;
        return item;
      })
    };
  }
};
</script>

<style lang="scss" scoped>
.page-codeimgs {
  width: 1000px;
  margin: 20px auto;
  .list {
    .item {
      margin-bottom: 10px;
      padding: 8px 10px;
      box-shadow: 0 0 5px #ddd;
      .media {
        display: flex;
        justify-content: space-between;
      }
      img {
        margin-top: 10px;
        width: auto;
        max-width: 100%;
      }
    }
  }
  .link {
    font-size: 14px;
    border: none;
    outline: none;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
}

@media screen and (max-width: 768px) {
  .page-codeimgs {
    width: 100%;
  }
}
</style>
