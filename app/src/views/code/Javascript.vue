<template>
  <div class="preview">
    <div class="card" v-for="(item, index) in codes" v-bind:key="item.id">
      <h3 class="title">{{ index + 1 + ". " }}{{ item.title }}</h3>
      <div class="code">
        <codemirror v-model="item.content"></codemirror>
      </div>
    </div>
  </div>
</template>

<script>
import { codes } from "@/db/code/javascript.js";

export default {
  name: "Javascript",
  data() {
    return {
      codes: codes
    };
  }
};
</script>
