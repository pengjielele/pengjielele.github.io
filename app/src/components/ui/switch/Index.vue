<template>
  <label :class="['hi-switch',{ on: checked }]" :style="switchStyle">
    <input type="checkbox" :checked="checked" class="hi-switch-input" @change="handleChange"/>
    <span :class="['hi-switch-label',{ on: checked }]">{{ checked ? labels.checked : labels.unchecked }}</span>
    <div :class="['hi-switch-button',{ on: checked }]" :style="switchButtonStyle"></div>
  </label>
</template>

<script>
export default {
  name: 'HiSwitch',
  props: {
    width: {
      type: String,
      default: '60'
    },
    height: {
      type: String,
      default: '25'
    },
    colors: {
      type: Object,
      default: function () {
        return {
          checked: '#75c791',
          unchecked: '#bfcbd9'
        }
      }
    },
    labels: {
      type: Object,
      default: function () {
        return {
          checked: 'on',
          unchecked: 'off'
        }
      }
    }
  },
  computed: {
    switchStyle () {
      return {
        width: `${this.width}px`,
        height: `${this.height}px`,
        borderRadius: parseInt(this.height / 2) + 'px',
        backgroundColor: this.checked ? this.colors.checked : this.colors.unchecked
      }
    },
    switchButtonStyle () {
      const height = this.height - 4
      return {
        width: `${height}px`,
        height: `${height}px`,
        borderRadius: parseInt(height / 2) + 'px'
      }
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
      checked: false
    }
  }
}
</script>

<style lang="scss" scoped>
.hi-switch {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 15px;
  background: #75c791;
  position: relative;
  cursor: pointer;
  &.on {
    background: #bfcbd9;
  }
  .hi-switch-input {
    opacity: 0;
    position: absolute;
    width: 1px;
    height: 1px;
  }
  .hi-switch-label {
    color: #fff;
    margin-left: 15px;
    &.on {
      margin-right: 15px;
      margin-left: 0;
    }
  }
  .hi-switch-button {
    position: absolute;
    display: inline-block;
    top: 50%;
    left: 3px;
    transform: translateY(-50%);
    border: none;
    outline: none;
    background: #fff;
    &.on {
      left: unset;
      right: 3px;
    }
  }
}
</style>
