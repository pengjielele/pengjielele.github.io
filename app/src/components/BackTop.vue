<template>
  <div class="backtop" @click="handleBackTop">
    top
  </div>
</template>

<script>
export default {
  name: "BackTop",
  methods: {
    handleBackTop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style lang="scss" scoped>
.backtop {
  position: fixed;
  right: 10px;
  bottom: 10px;
  background: #000;
  color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
