<template>
  <div style="text-align: left;">
    <div class="title">{{ title }}</div>
    <div ref="editorContainer" class="code-editor"></div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { EditorView, basicSetup } from 'codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { oneDark } from '@codemirror/theme-one-dark'

const props = defineProps({
  title: {
    type: String,
    default: 'Code Editor'
  },
  modelValue: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: 'javascript'
  }
})

const emit = defineEmits(['update:modelValue'])

const editorContainer = ref<HTMLElement>()
let editorView: EditorView | null = null

onMounted(() => {
  if (!editorContainer.value) return

  editorView = new EditorView({
    doc: props.modelValue,
    // Removed tabSize as it's not a valid property
    extensions: [
      basicSetup,
      javascript(),
      oneDark,
      EditorView.updateListener.of(update => {
        if (update.docChanged) {
          const content = update.state.doc.toString()
          emit('update:modelValue', content)
        }
      }),
      EditorView.theme({
        '&': {
          tabSize: '2'
        }
      })
    ],
    parent: editorContainer.value
  })
})

onUnmounted(() => {
  editorView?.destroy()
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