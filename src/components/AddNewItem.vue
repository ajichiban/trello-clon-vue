<template>
  <AddNewItemForm
    v-if="showForm"
    :onAdd="(text)=>{
      onAdd(text)
      showForm = false
    }"
  />
  <button
    @click="showForm = !showForm"
    :style="{color: dark ? '#000' : '#fff'}" 
    v-else class="add-item-button" >
    {{ text }}
  </button>
</template>

<script lang='ts' setup>
import { ref } from 'vue';
import AddNewItemForm from './AddNewItemForm.vue';

  defineProps<{
    text: string,
    onAdd: (text: string) => void,
    dark?: boolean
  }>()

  const showForm = ref<boolean>(false)
</script>
