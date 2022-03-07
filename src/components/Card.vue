<template>
  <div class="card-container">{{ text }}</div>
</template>

<script lang='ts' setup>
  defineProps<{
    text: string
  }>()
</script>

<style>
  
</style>