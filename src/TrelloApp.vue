<script lang='ts' setup>
import Column from './components/Column.vue';
import AddNewItem from './components/AddNewItem.vue';
import { useAppState } from './hooks/useAppState';
import draggable from 'vuedraggable';

const {appState,appMutations} = useAppState();

</script>

<template>
  <div class="app-container">
    <draggable 
      :list="appState.lists"
      ghostClass="ghost"
      group="dashboard"
      itemKey="id"
      animation="300"
      class="app-container"
      >

      <template #item="{ element, index}">
        <Column :text="element.text" :index="index" :id="element.id" />
      </template>
    
    
    </draggable>
    <AddNewItem text="+ Add a new list" :onAdd="appMutations.addList" />
  </div>
</template>

<style>
</style>