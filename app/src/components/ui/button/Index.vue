<template>
  <button
    :class="[
      'hi-button',
      'hi-button-' + type,
      'hi-button-size-' + size,
      {
        'is-plain': plain,
        'is-block': block
      }
    ]"
    :style="{ borderRadius: radius + 'px', width: width, height: height }"
    :disabled="disabled"
    @click="handleClick"
  >
    <i :class="['fa', icon]" v-if="icon"></i>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'HiButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    radius: {
      type: String,
      default: '0'
    },
    plain: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    width: {
      type: String
    },
    height: {
      type: String
    },
    icon: {
      type: String
    }
  },
  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  },
  data () {
    return {
      title: 'Button'
    }
  }
}
</script>

<style lang="scss" scoped>
.hi-button {
  text-align: center;
  padding: 10px 20px;
  border: none;
  color: #fff;
  &.is-block {
    display: block;
    width: 100%;
  }
  &:disabled {
    cursor: not-allowed;
  }
  .fa {
    margin-right: 5px;
  }
}
.hi-button-default {
  background: #f0f0f4;
  color: #333;
  &:enabled {
    &:hover {
      background: #e3e3ea;
    }
  }
  &.is-plain {
    background: #fff;
    border: 1px solid #e3e3ea;
    color: #333;
    &:hover {
      box-shadow: 0px 0px 2px #e3e3ea;
    }
  }
}
.hi-button-primary {
  color: #fff;
  background: #4b5cc4;
  &:enabled {
    &:hover {
      background: #2b42ce;
    }
  }
  &.is-plain {
    background: #fff;
    border: 1px solid #4b5cc4;
    color: #4b5cc4;
    &:hover {
      box-shadow: 0px 0px 2px #2b42ce;
      color: #fff;
    }
  }
}
.hi-button-success {
  color: #fff;
  background: #afdd22;
  &:enabled {
    &:hover {
      background: #b2e612;
    }
  }
  &.is-plain {
    background: #fff;
    border: 1px solid #afdd22;
    color: #afdd22;
    &:hover {
      box-shadow: 0px 0px 2px #b2e612;
      color: #fff;
    }
  }
}
.hi-button-info {
  color: #fff;
  background: #adadad;
  &:enabled {
    &:hover {
      background: #8e8c8c;
    }
  }
  &.is-plain {
    background: #fff;
    border: 1px solid #adadad;
    color: #adadad;
    &:hover {
      box-shadow: 0px 0px 2px #8e8c8c;
      color: #fff;
    }
  }
}
.hi-button-warning {
  color: #fff;
  background: #fa8c35;
  &:enabled {
    &:hover {
      background: #f37d20;
    }
  }
  &.is-plain {
    background: #fff;
    border: 1px solid #fa8c35;
    color: #fa8c35;
    &:hover {
      box-shadow: 0px 0px 2px #f37d20;
      color: #fff;
    }
  }
}
.hi-button-danger {
  color: #fff;
  background: #d0241b;
  &:enabled {
    &:hover {
      background: #f20c00;
    }
  }
  &.is-plain {
    background: #fff;
    border: 1px solid #d0241b;
    color: #d0241b;
    &:hover {
      box-shadow: 0px 0px 2px #f20c00;
      color: #fff;
    }
  }
}

.hi-button-size-default {
  font-size: 14px;
  height: 40px;
  padding: 0 20px;
}
.hi-button-size-mini {
  height: 30px;
  line-height: 30px;
  padding: 0 20px;
}
.hi-button-size-small {
  height: 35px;
  padding: 0 20px;
}
.hi-button-size-medium {
  font-size: 14px;
  height: 40px;
  padding: 0 20px;
}
.hi-button-size-large {
  font-size: 16px;
  height: 45px;
  padding: 0 20px;
}
</style>
