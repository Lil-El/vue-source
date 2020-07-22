<template>
  <div>{{$attrs}}</div>
</template>

<script>
export default {
  props: {
    x: String,
    y: String,
    z: String
  },
  inheritAttrs: false,
  created() {
    /* eslint-disable */
    console.log(this.$attrs);
  }
};
</script>
