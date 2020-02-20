<template>
  <div>HiInputTags</div>
</template>

<script>
export default {
  name: "HiInputTags",
  props: {
    type: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: "default"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    radius: {
      type: String,
      default: "0"
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
    handleClick(event) {
      this.$emit("click", event);
    }
  },
  data() {
    return {
      title: "Button"
    };
  }
};
</script>
