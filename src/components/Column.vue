template<script lang='ts' setup>
import { useAppState } from '../hooks/useAppState';
import AddNewItem from './AddNewItem.vue';
import Card from './Card.vue';
import draggable from 'vuedraggable'
defineProps<{
  text: string,
  index: number,
  id: string,
}>()

const handleMove = (event: any, origianlEvent:any)=>{
  // console.log(event, origianlEvent)
}

const handleEnd = (event: any)=>{
  console.log('event end ::',event)
}

const handleAdd = (event: any)=>{
  console.log('event  added ::',event)
}


const { appState, appMutations } = useAppState();

</script>

<template>
  <div class="column-container">
    <div class="column-title">{{ text }}</div>
    <draggable 
      :list="appState.lists[index].tasks"
      ghostClass="ghost"
      group="column"
      animation="300"
      dragClass="drag"
      chosenClass="drag"
      itemKey="id"
      :move="handleMove"
      :onEnd="handleEnd"
      @onAdd="handleAdd"
      >
      <!-- <Card
        v-for="task in appState.lists[index].tasks"
        :key="task.id"
      :text="task.text" />-->
      <template #item="{ element} ">
        <Card :text="element.text" />
      </template>
    </draggable>

    <AddNewItem text="+ Add a new list" :onAdd="() => appMutations.addTask(id, text)" dark />
  </div>
</template>

<style scoped>
.ghost {
  opacity: 0.0;
}

.drag{
  opacity: 1;
  visibility: visible;
  background: #000;
  color: red;
}
</style>

