<template>
  <div class="preview">
    <div class="card">
      <h3 class="title">设置类型</h3>
      <div class="content">
        <hi-button>默认按钮</hi-button>
        <hi-button type="primary">主要按钮</hi-button>
        <hi-button type="success">成功按钮</hi-button>
        <hi-button type="info">信息按钮</hi-button>
        <hi-button type="warning">警告按钮</hi-button>
        <hi-button type="danger">危险按钮</hi-button>
      </div>
      <div class="code">
        <codemirror v-model="codes[0]" :options="cmOption"></codemirror>
      </div>
    </div>

    <div class="card">
      <h3 class="title">设置圆角</h3>
      <div class="content">
        <hi-button radius="5">默认按钮</hi-button>
        <hi-button type="primary" radius="5">主要按钮</hi-button>
        <hi-button type="success" radius="5">成功按钮</hi-button>
        <hi-button type="info" radius="5">信息按钮</hi-button>
        <hi-button type="warning" radius="5">警告按钮</hi-button>
        <hi-button type="danger" radius="5">危险按钮</hi-button>
      </div>
      <div class="code">
        <codemirror v-model="codes[1]" :options="cmOption"></codemirror>
      </div>
    </div>

    <div class="card">
      <h3 class="title">设置块状</h3>
      <div class="content">
        <hi-button radius="5" block>默认按钮</hi-button>
        <hi-button type="primary" radius="5" block>主要按钮</hi-button>
        <hi-button type="success" radius="5" block>成功按钮</hi-button>
        <hi-button type="info" radius="5" block>信息按钮</hi-button>
        <hi-button type="warning" radius="5" block>警告按钮</hi-button>
        <hi-button type="danger" radius="5" block>危险按钮</hi-button>
      </div>
       <div class="code">
        <codemirror v-model="codes[2]" :options="cmOption"></codemirror>
      </div>
    </div>

    <div class="card">
      <h3 class="title">设置边框</h3>
      <div class="content">
        <hi-button radius="5" plain>默认按钮</hi-button>
        <hi-button type="primary" radius="5" plain>主要按钮</hi-button>
        <hi-button type="success" radius="5" plain>成功按钮</hi-button>
        <hi-button type="info" radius="5" plain>信息按钮</hi-button>
        <hi-button type="warning" radius="5" plain>警告按钮</hi-button>
        <hi-button type="danger" radius="5" plain>危险按钮</hi-button>
      </div>
       <div class="code">
        <codemirror v-model="codes[3]" :options="cmOption"></codemirror>
      </div>
    </div>

    <div class="card">
      <h3 class="title">设置尺寸</h3>
      <div class="content">
        <hi-button size="mini">mini</hi-button>
        <hi-button type="primary" size="small">small</hi-button>
        <hi-button>default</hi-button>
        <hi-button type="success" size="medium">medium</hi-button>
        <hi-button type="info" size="large">large</hi-button>
      </div>
       <div class="code">
        <codemirror v-model="codes[4]" :options="cmOption"></codemirror>
      </div>
    </div>

    <div class="card">
      <h3 class="title">设置禁用</h3>
      <div class="content">
        <hi-button disabled>默认按钮</hi-button>
        <hi-button type="primary" disabled>主要按钮</hi-button>
        <hi-button type="success" disabled>成功按钮</hi-button>
        <hi-button type="info" disabled>信息按钮</hi-button>
        <hi-button type="warning" disabled>警告按钮</hi-button>
        <hi-button type="danger" disabled>危险按钮</hi-button>
      </div>
       <div class="code">
        <codemirror v-model="codes[5]" :options="cmOption"></codemirror>
      </div>
    </div>

    <div class="card">
      <h3 class="title">设置宽高</h3>
      <div class="content">
        <hi-button width="200px" height="30px">默认按钮</hi-button>
        <hi-button type="primary">主要按钮</hi-button>
        <hi-button type="success">成功按钮</hi-button>
        <hi-button type="info">信息按钮</hi-button>
        <hi-button type="warning">警告按钮</hi-button>
        <hi-button type="danger">危险按钮</hi-button>
      </div>
       <div class="code">
        <codemirror v-model="codes[6]" :options="cmOption"></codemirror>
      </div>
    </div>

    <div class="card">
      <h3 class="title">设置图标</h3>
      <div class="content">
        <hi-button><i class="fa fa-user-o"></i>默认按钮</hi-button>
        <hi-button type="primary" icon="fa-home">主要按钮</hi-button>
        <hi-button type="success" icon="fa-book">成功按钮</hi-button>
        <hi-button type="info" icon="fa-pencil">信息按钮</hi-button>
        <hi-button type="warning" icon="fa-cog">警告按钮</hi-button>
        <hi-button type="danger" icon="fa-square">危险按钮</hi-button>
      </div>
       <div class="code">
        <codemirror v-model="codes[7]" :options="cmOption"></codemirror>
      </div>
    </div>
  </div>
</template>

<script>
import HiButton from '@/components/ui/button/Index.vue'

export default {
  name: 'Preview',
  components: {
    HiButton
  },
  data () {
    return {
      codes: [
        `
<hi-button>默认按钮</hi-button>
<hi-button type="primary">主要按钮</hi-button>
<hi-button type="success">成功按钮</hi-button>
<hi-button type="info">信息按钮</hi-button>
<hi-button type="warning">警告按钮</hi-button>
<hi-button type="danger">危险按钮</hi-button>
`,
        `
<hi-button radius="5">默认按钮</hi-button>
<hi-button type="primary" radius="5">主要按钮</hi-button>
<hi-button type="success" radius="5">成功按钮</hi-button>
<hi-button type="info" radius="5">信息按钮</hi-button>
<hi-button type="warning" radius="5">警告按钮</hi-button>
<hi-button type="danger" radius="5">危险按钮</hi-button>
`,
        `
<hi-button radius="5" block>默认按钮</hi-button>
<hi-button type="primary" radius="5" block>主要按钮</hi-button>
<hi-button type="success" radius="5" block>成功按钮</hi-button>
<hi-button type="info" radius="5" block>信息按钮</hi-button>
<hi-button type="warning" radius="5" block>警告按钮</hi-button>
<hi-button type="danger" radius="5" block>危险按钮</hi-button>
`,
        `
<hi-button radius="5" plain>默认按钮</hi-button>
<hi-button type="primary" radius="5" plain>主要按钮</hi-button>
<hi-button type="success" radius="5" plain>成功按钮</hi-button>
<hi-button type="info" radius="5" plain>信息按钮</hi-button>
<hi-button type="warning" radius="5" plain>警告按钮</hi-button>
<hi-button type="danger" radius="5" plain>危险按钮</hi-button>
`,
        `
<hi-button size="mini">mini</hi-button>
<hi-button type="primary" size="small">small</hi-button>
<hi-button>default</hi-button>
<hi-button type="success" size="medium">medium</hi-button>
<hi-button type="info" size="large">large</hi-button>
`,
        `
<hi-button disabled>默认按钮</hi-button>
<hi-button type="primary" disabled>主要按钮</hi-button>
<hi-button type="success" disabled>成功按钮</hi-button>
<hi-button type="info" disabled>信息按钮</hi-button>
<hi-button type="warning" disabled>警告按钮</hi-button>
<hi-button type="danger" disabled>危险按钮</hi-button>
`,
        `
<hi-button width="200px" height="30px">默认按钮</hi-button>
<hi-button type="primary">主要按钮</hi-button>
<hi-button type="success">成功按钮</hi-button>
<hi-button type="info">信息按钮</hi-button>
<hi-button type="warning">警告按钮</hi-button>
<hi-button type="danger">危险按钮</hi-button>
`,
        `
<hi-button><i class="fa fa-user-o"></i>默认按钮</hi-button>
<hi-button type="primary" icon="fa-home">主要按钮</hi-button>
<hi-button type="success" icon="fa-book">成功按钮</hi-button>
<hi-button type="info" icon="fa-pencil">信息按钮</hi-button>
<hi-button type="warning" icon="fa-cog">警告按钮</hi-button>
<hi-button type="danger" icon="fa-square">危险按钮</hi-button>
`
      ],
      cmOption: {
        mode: 'text/html',
        lineNumbers: false,
        collapseIdentical: false,
        highlightDifferences: false,
        readOnly: true,
        autofocus: false
      }
    }
  }
}
</script>
