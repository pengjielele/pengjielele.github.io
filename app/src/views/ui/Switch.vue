<template>
  <div>
    <div class="card">
      <h2>默认</h2>
      <hi-switch></hi-switch>
    </div>
  </div>
</template>

<script>
import HiSwitch from '@/components/ui/switch/Index.vue'

export default {
  components: {
    HiSwitch
  },
  data () {
    return {
      title: '',
      codes: []
    }
  }
}
</script>
