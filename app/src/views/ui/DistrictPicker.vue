<template>
  <div>
    <div class="card">
      <h2>默认</h2>
      <district-picker v-on:selected="handleSelected"></district-picker>
      <div class="code">
        <codemirror v-model="codes[0]"></codemirror>
      </div>
    </div>
    <div class="card">
      <h2>只显示省</h2>
      <district-picker
        :onlyProvince="onlyProvince"
        v-on:selected="handleSelected"
      ></district-picker>
      <div class="code">
        <codemirror v-model="codes[1]"></codemirror>
      </div>
    </div>
    <div class="card">
      <h2>隐藏区</h2>
      <district-picker
        :hideArea="hideArea"
        v-on:selected="handleSelected"
      ></district-picker>
      <div class="code">
        <codemirror v-model="codes[2]"></codemirror>
      </div>
    </div>
    <div class="card">
      <h2>数据回填</h2>
      <district-picker
        province="北京"
        city="市辖区"
        area="朝阳区"
        v-on:selected="handleSelected"
      ></district-picker>
      <div class="code">
        <codemirror v-model="codes[3]"></codemirror>
      </div>
    </div>
    <div class="card">
      <h2>自定义高</h2>
      <district-picker
        v-on:selected="handleSelected"
        height="200"
      ></district-picker>
      <div class="code">
        <codemirror v-model="codes[4]"></codemirror>
      </div>
    </div>
  </div>
</template>

<script>
import DistrictPicker from "@/components/ui/districtpicker/Index.vue";

export default {
  components: {
    DistrictPicker
  },
  methods: {
    handleSelected(value) {
      /* eslint-disable no-console */
      console.log(value);
    }
  },
  data() {
    return {
      title: "",
      onlyProvince: true,
      hideArea: false,
      codes: [
        `
<district-picker v-on:selected="handleSelected"></district-picker>
...
methods: {
  handleSelected (value) {
    console.log(value)
  }
},
data () {
  return {
    onlyProvince: true,
    hideArea: false
  }
}
...
`,
        `
<district-picker :onlyProvince="onlyProvince" v-on:selected="handleSelected"></district-picker>
`,
        `
<district-picker :hideArea="hideArea" v-on:selected="handleSelected"></district-picker>
`,
        `
<district-picker province="北京" city="市辖区" area="朝阳区" v-on:selected="handleSelected"></district-picker>
`,
        `
<district-picker v-on:selected="handleSelected" height="200"></district-picker>
`
      ]
    };
  }
};
</script>
