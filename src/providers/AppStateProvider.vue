<template>
  <main>
    <slot />
  </main>
</template>

<script lang='ts' setup>
import { provide, reactive, ref } from 'vue';
import { StoreKeys } from '../InjectionKeys/keys';
import { AppState } from '../interfaces/AppStateInterface'
import {nanoid} from 'nanoid';

const appData = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [{ id: "c0", text: "Generate app scaffold" }],
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ id: "c2", text: "Learn Typescript" }],
    },
    {
      id: "2",
      text: "Done",
      tasks: [{ id: "c3", text: "Begin to use static typing" }],
    },
  ],
};


const data = reactive<AppState>(appData)

const addList = (text: string) : void => {
  data.lists = [...data.lists, {id: nanoid(), text, tasks: []}]
}

const addTask = (listId: string, text: string) : void => {
  const list = data.lists.find(list => list.id === listId)
  if (list) {
    list.tasks = [...list.tasks, {id: nanoid(), text}]
  }
}

provide(StoreKeys.appState, data)
provide(StoreKeys.appStateMutations, {addList, addTask})
</script>
