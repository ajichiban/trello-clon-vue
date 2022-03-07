<script setup lang="ts">
import AppStateProvider from './providers/AppStateProvider.vue';
import TrelloApp from './TrelloApp.vue';

</script>

<template>
  <AppStateProvider>
    <TrelloApp />
  </AppStateProvider>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
