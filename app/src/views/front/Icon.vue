<template>
  <div class="page page-icons">
    <div class="header">
      <h1>Font Awesome 4.7图标库</h1>
      <ul class="navigation">
        <li
          class="item"
          v-for="item in list"
          v-bind:key="item.id"
          @click="goAnchor(item.id)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="list">
      <div class="item" v-for="item in list" v-bind:key="item.id">
        <h2 class="title" :id="item.id">{{ item.name }}</h2>
        <ul class="icons">
          <li
            class="icon"
            v-for="(icon, index) in item.icons"
            v-bind:key="index"
          >
            <i :class="icon.class" aria-hidden="true"></i>
            <span class="name">{{ icon.name }}</span>
            <div class="cover">
              <button class="btn-copy" @click="handleCopy">copy</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <back-top></back-top>
  </div>
</template>

<script>
import BackTop from "@/components/BackTop.vue";
import { list } from "@/db/icon.js";

export default {
  name: "icons",
  components: {
    BackTop
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    goAnchor: function(selector) {
      var anchor = this.$el.querySelector("#" + selector);
      // document.body.scrollTop = anchor.offsetTop; // not work
      // window.scrollTo(0, anchor.offsetTop);       // work
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    },
    handleCopy: function(event) {
      var html = event.target.parentNode.parentNode.childNodes[0].outerHTML;
      html = html.replace(/data-v.+?\s/gi, "");
      this.$copyText(html).then(
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
      list: list
    };
  }
};
</script>

<style lang="scss" scoped>
.page-icons {
  width: 100%;
  margin: 20px auto;
  .header {
    .navigation {
      text-align: left;
      margin-bottom: 20px;
      li {
        padding: 10px 5px;
        border-bottom: 1px solid #ddd;
        cursor: pointer;
        &:hover {
          background: #ece9e9;
        }
      }
    }
  }
  .list {
    .item {
      margin-bottom: 20px;
      overflow: wrap;
      .title {
        font-size: 20px;
        margin-bottom: 5px;
      }
    }
  }
  .icons {
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #ddd;
    .icon {
      position: relative;
      overflow: hidden;
      flex: 0 1 20%;
      height: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-right: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      margin-bottom: -1px;
      margin-right: -1px;
      i {
        margin-bottom: 10px;
      }
      &:nth-child(5n) {
        border-right: 0;
      }
      &:hover {
        .cover {
          width: 100%;
          display: block;
        }
        i {
          transform: scale(1.3);
        }
        .name {
          transform: scale(1.2);
          color: #000;
          font-weight: bold;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .page-icons {
    .icons {
      .icon {
        flex: 0 1 50%;
        &:nth-child(5n) {
          border-right: 1px solid #ddd;
        }
        &:nth-child(2n) {
          border-right: 0;
        }
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
