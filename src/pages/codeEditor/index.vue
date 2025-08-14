<template>
  <div>
    <el-button type="primary">示例</el-button>
    <el-popover placement="right" :width="520">
      <template #reference>示例1</template>
      <div>
        <img src="@/assets/mapDemo.png" alt="">
      </div>
    </el-popover>
    <CodeEdit title="代码11" :modelValue="code1"/>
  </div>
</template>
<script setup lang="ts">
import CodeEdit from '@/components/code-edit.vue'
import { onMounted } from 'vue'
import {code1} from './code.js'


onMounted(() => {

})

</script>
<style>
.code-editor {
  height: 100%;
}

.cm-editor {
  height: 100%;
  font-size: 14px;
}

.cm-scroller {
  font-family: 'Fira Code', monospace;
}
</style>