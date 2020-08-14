<template>
  <div id="app">
    <!-- <input v-model="dt" />
    <B name="a" age="1" sex="0" />-->
    <HelloWorld msg="HelloWorld" />
  </div>
</template>

<script>
import B from "./components/HelloWorld.vue";

export default {
  // name: "app",
  components: {
    B,
  },
  data() {
    return {
      dt: 1,
    };
  },
};
</script>

