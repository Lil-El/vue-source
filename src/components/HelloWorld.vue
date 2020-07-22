<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>{{$attrs}}</div>
  </div>
</template>

<script>
// import C from "./C";
export default {
  components: {},
  inheritAttrs: false,
  props: {
    msg: String
  },
  created() {
    /* eslint-disable */
    console.log(this.$attrs);
  }
};
</script>
