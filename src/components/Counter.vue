<template>
  <div>
    <button @click="decrement(1)">-</button>
    {{ state.count }}
    <button @click="increment(1)">+</button>
  </div>
  <button @click="hoge">hoge</button>
</template>
<script lang="ts">
import { defineComponent, reactive, PropType, SetupContext } from 'vue'

type Props = { 
  initCount?: number,
}

type State = {
  count: number;
}

export default defineComponent({
  props: {
    initCount: Number as PropType<number>,
  },
  emits: ['send'],
  setup(props: Props, context: SetupContext) {
    const state: State = reactive<{count: number}>({
        count: props.initCount ?? 0,
    });

    const increment = (num: number) => {
      state.count += num
    }

    const decrement = (num: number) => {
      state.count -= num;
    };

    const hoge = () => {
      context.emit('send', 'aaa');
    };

    return {
      state,
      increment,
      decrement,
      hoge,
    };
  },
})
</script>