<template>
  <div class="new-item-form-container">
			<input 
        ref="inputRef"
        class="new-item-input"
        @enter="onAdd(textInput)"
        @keypress=" handleSubmit"
        v-model="textInput" />
			<button 
        class="new-item-button"
        @click="onAdd(textInput)">Create</button>
		</div>
</template>

<script lang='ts' setup>
import { onMounted, ref } from 'vue';

  const props = defineProps<{
    onAdd: (text: string) => void
  }>()

  const textInput = ref<string>('')

  onMounted(() => inputRef.value?.focus())

  const inputRef = ref<HTMLInputElement>();

  const handleSubmit = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      props.onAdd(textInput.value)
    }
  }  
</script>
