<template>
  <div id="app" class="container">
    <h1 class="text-center">TV Shows Search</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
  html, body {
    margin: 0;
    font-family: 'Titillium Web', Helvetica, Arial, sans-serif;
  }

  .container {
    max-width: 80vw;
    margin: 0 auto;
  }

  .text {
    &-center {
      text-align: center;
    }

    &-bold {
      font-weight: bold;
    }

    &-italic {
      font-style: italic;
    }
  }
</style>
