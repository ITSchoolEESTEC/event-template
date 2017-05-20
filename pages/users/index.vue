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
input {
  display: block;
  width: 100%;
  margin: 30px 0;
}
fieldset {
  margin: 30px;
}
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
</style>
