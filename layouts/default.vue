<template>
  <div>
    <Menu/>
    <h1> This is the default </h1>
    <nuxt-link class="button--green" to="/about">About</nuxt-link>
    <nuxt-link class="button--green" to="/">Home</nuxt-link>
    <nuxt/>
  </div>
</template>

<script>
import Menu from '~/components/Menu.vue'

export default{
  components: {
    Menu
  }
}
</script>


<style>

body {
  margin: 0;
}

</style>
