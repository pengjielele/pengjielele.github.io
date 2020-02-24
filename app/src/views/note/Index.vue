<template>
  <div class="page page-note">
    <ul class="list">
      <li class="item" v-for="item in list" v-bind:key="item._id">
        <div class="content">
          <div v-html="item.content"></div>
        </div>
        <div class="date">{{ item.date }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import dayjs from "dayjs";
import { HtmlUtil } from "@/utils/html.js";
import { notes } from "@/db/note.js";

export default {
  name: "note",
  mounted() {
    window.scrollTo(0, 0);
  },
  computed: {
    list() {
      return this.notes.filter(item => {
        item.date = dayjs(item.create_date).format("YYYY-MM-DD HH:mm:ss");
        var content = HtmlUtil.htmlEncodeByRegExp(item.content);
        item.content = HtmlUtil.htmlDecodeByRegExp(content);
        return item.content.indexOf("http") < 0;
      });
    }
  },
  data() {
    return {
      notes: notes
    };
  }
};
</script>

<style lang="scss" scoped>
.page-note {
  width: 800px;
  margin: 50px auto 20px;
  .list {
    .item {
      margin-bottom: 20px;
      overflow: wrap;
      box-shadow: 1px 1px 5px #ddd;
      padding: 15px;
      border-radius: 5px;
      .content {
        margin-bottom: 5px;
        line-height: 30px;
      }
      .date {
        text-align: right;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .page-note {
    width: 100%;
  }
}
</style>
