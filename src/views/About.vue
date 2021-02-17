<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <Counter :initCount="100" @send="send"/>
</template>

<script lang="ts">
import Counter from "@/components/Counter.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "About",
  components: {
    Counter,
  },
  setup() {
    const send = (message: unknown) => {
      console.log(message);
    };

    return {
      send,
    };
  }
});

</script>
