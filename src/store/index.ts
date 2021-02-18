import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store, ActionContext } from "vuex";

type TodoItem = {
  title: string;
  isCompleted: boolean;
};
export interface State {
  todoList: Array<TodoItem>;
};

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    todoList: [],
  },
  getters: {
    uncompletedTodoList: (state) => state.todoList.filter(item => !item.isCompleted),
  },
  mutations: {
    addTodo(state: State, payload: string): void {
      state.todoList.push({
        title: payload,
        isCompleted: false,
      });
      return;
    },
    clearTodo(state: State): void {
      state.todoList.splice(-state.todoList.length);
      return;
    },
    removeTodo(state: State, index: number): void {
      state.todoList.splice(index, 1);
      return;
    },
    toggleTodoCompleteState(state: State, index: number): void {
      const target = state.todoList[index];
      state.todoList[index].isCompleted = !!target.isCompleted;
      return;
    }
  },
  actions: {
    addTodo({ commit }: ActionContext<State, State>, payload: string): void {
      commit('addTodo', payload);
      return;
    },
    clearTodo({ commit }: ActionContext<State, State>): void {
      commit('clearTodo');
      return;
    },
    removeTodo({ commit }: ActionContext<State, State>, payload: number): void {
      commit('removeTodo', payload);
      return;
    },
    toggleTodoCompleteState({ commit }: ActionContext<State, State>, payload: number): void {
      commit('toggleTodoCompleteState', payload);
      return;
    },
  }
})

// define your own `useStore` composition function
export function useStore () {
  return baseUseStore(key)
}