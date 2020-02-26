<template>
  <div class="page page-color">
    <div class="navs">
      <router-link to="/">Home</router-link>
      <i class="fa fa-chevron-right"></i>
      <a>Color</a>
    </div>
    <ul class="tabs">
      <li
        @click="handleTabClick('china')"
        :class="{ active: type === 'china' }"
      >
        中国颜色
      </li>
      <li
        @click="handleTabClick('japan')"
        :class="{ active: type === 'japan' }"
      >
        日本颜色
      </li>
    </ul>
    <div class="group-list">
      <ul v-for="group in list" v-bind:key="group.id" class="group-item">
        <li
          v-for="(item, index) in group.childs"
          v-bind:key="index"
          class="item"
        >
          <div
            :class="['content', item.classname]"
            v-bind:style="{ background: item.rgb }"
          >
            <div class="name">{{ item.name }}</div>
            <div class="value">{{ item.value }}</div>
            <div class="rgb">{{ item.rgb }}</div>
            <div class="cover">
              <button class="btn-copy" @click="handleCopy(item.value)">
                copy
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <back-top></back-top>
  </div>
</template>

<script>
import BackTop from "@/components/BackTop.vue";
import { china_colors, japan_colors } from "@/db/color.js";

export default {
  name: "color",
  components: {
    BackTop
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    handleTabClick(type) {
      let list = [];
      switch (type) {
        case "japan":
          list = japan_colors;
          break;
        case "china":
          list = china_colors;
          break;
      }
      this.type = type;
      this.list = list;
    },
    handleCopy: function(content) {
      this.$copyText(content).then(
        function() {
          alert("Copied");
        },
        function() {
          alert("Can not copy");
        }
      );
    }
  },
  data() {
    return {
      china_colors: china_colors,
      japan_colors: japan_colors,
      list: china_colors,
      type: "china"
    };
  }
};
</script>

<style lang="scss" scoped>
.page-color {
  width: 1000px;
  margin: 20px auto;
  .tabs {
    display: flex;
    border-bottom: 3px solid #ffa631;
    margin-bottom: 10px;
    padding-left: 1px;
    li {
      padding: 10px 15px;
      margin-bottom: -1px;
      margin-left: -1px;
      cursor: pointer;
      &.active {
        background: #ffa631;
        border: 1px solid #ffa631;
        color: #fff;
      }
    }
  }
  .group-list {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(5, 1fr);
    .item {
      margin-bottom: 10px;
      .content {
        padding: 15px 10px;
        border-radius: 5px;
        position: relative;
        &:hover {
          .cover {
            display: block;
          }
        }
      }
      .white {
        color: #fff;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .page-color {
    width: 100%;
    .group-list {
      display: grid;
      grid-gap: 10px;
      grid-template-columns: repeat(2, 1fr);
      .item .content {
        .cover {
          display: block;
          width: 30px;
          height: 30px;
          left: unset;
          right: 0;
          background: unset;
        }
      }
    }
  }
}
</style>
