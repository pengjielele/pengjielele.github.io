<template>
  <label :class="['hi-switch',{ on: checked }]">
    <input type="checkbox" :checked="checked" class="hi-switch-input" @change="handleChange"/>
    <button :class="['hi-switch-button',{ on: checked }]"></button>
  </label>
</template>

<script>
export default {
  name: 'HiSwitch',
  props: {
    width: {
      type: String
    },
    height: {
      type: String
    },
    colors: {
      checked: '#bfcbd9',
      unchecked: '#75c791'
    },
    labels: {
      checked: 'on',
      unchecked: 'off'
    }
  },
  methods: {
    handleChange (event) {
      // this.$emit('click', event)
      this.checked = !this.checked
    }
  },
  data () {
    return {
      title: '',
      checked: true
    }
  }
}
</script>

<style lang="scss" scoped>
.hi-switch {
  display: inline-flex;
  align-items: center;
  border: none;
  width: 100px;
  height: 30px;
  border-radius: 15px;
  background: #75c791;
  position: relative;
  &.on {
    background: #bfcbd9;
  }
  &:hover {
    cursor: pointer;
  }
  .hi-switch-input {
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .hi-switch-button {
    position: absolute;
    display: inline-block;
    top: 50%;
    left: 3px;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    border-radius: 12px;
    background: #fff;
    &.on {
      left: unset;
      right: 3px;
    }
  }
}
</style>
