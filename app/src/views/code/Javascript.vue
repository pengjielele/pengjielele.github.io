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
export default {
  name: "Javascript",
  data() {
    return {
      codes: [
        {
          id: "1",
          title: "是否是空对象",
          content: `
const isEmpty = obj => {
  return Object.keys(obj).length === 0 && obj.constructor === Object
}
# or
const isEmpty = value => {
  var name
  for (name in value) {
    return false
  }
  return true
}
          `
        },
        {
          id: "2",
          title: "生成唯一标识符",
          content: `
const uuidv4 = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
          `
        },
        {
          id: "3",
          title: "防抖函数",
          content: `
const debounce = (func, wait, immediate) => {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
          `
        }
      ]
    };
  }
};
</script>
