<template>
  <section class="container">
    <div>
      <h1 class="title">
        All Users
      </h1>
      <fieldset>
        <legend>Search</legend>
        <input type="search" v-model="username">
        <nuxt-link class="button--green" :to="{ name: 'users-username', params: { username } }">Go to {{ username }}'s page</nuxt-link>
      </fieldset>
      <nuxt-link class="button--green" to="/">Go Home</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      username: ''
    }
  }
}
</script>

<style>

</style>
