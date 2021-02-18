<template>
  <div class="todo">
    <p>todo</p>
    <button @click="addTodo">add</button>
    <button @click="clearTodo">clear</button>
    <ul>
      <li v-for="(todo, index) in state.todoList" :key="todo.title">
        <span>{{ todo.title }}</span>
        <input type="checkbox" :checked="todo.isCompleted" @change="toggleTodoCompleteState(index)">
        <button @click="removeTodo(index)">remove</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useStore } from "vuex";
import { State } from '../store';

type ComponentState = State;

export default defineComponent({
  name: "Todo",
  setup() {
    const store = useStore();
    const state: ComponentState = reactive<ComponentState>({
        todoList: store.state.todoList,
    });

    const addTodo = () => {
      const rand = Math.random();
      store.dispatch('addTodo', `hogefuga${rand}`);
      return;
    };

    const clearTodo = () => {
      store.dispatch('clearTodo');
      return;
    }

    const removeTodo = (index: number) => {
      store.dispatch('removeTodo', index);
      return;
    }

    const toggleTodoCompleteState = (index: number) => {
      store.dispatch('toggleTodoCompleteState', index);
      return;
    }

    return {
      state,
      addTodo,
      clearTodo,
      removeTodo,
      toggleTodoCompleteState,
    };
  },
});
</script>
