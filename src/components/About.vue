<template>
  <div id="about">
    <h1 @click="blueify($event)">About my page</h1>
    <h3>Welcome to my new component</h3>
    <router-link to="/">Go to Hello</router-link>
  </div>
</template>

<script>
  export default {
    name: 'about',
    data() {
      return {};
    },
    methods: {
      blueify(e) {
        e.target.style.color = '#147';
      },
    },
  };
</script>

<style lang="less" scoped>
  @red: #A1020C;

  h1 {
    color: lighten(@red, 10%);
  }

  h3 {
    color: @red;
  }
</style>
