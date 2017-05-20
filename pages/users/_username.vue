<template>
  <section class="container">
    <div>
      <h1 class="title">
        {{ username }} | {{ context }}
      </h1>
      <nuxt-link to="/">Go Home</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  layout ({ params }) {
    return params.username ? params.username : 'custom'
  },

  validate ({ params }) {
    return /^[a-z0-9]+$/.test(params.username)
  },

  asyncData ({ params, isClient }) {
    return {
      username: params.username,
      context: isClient ? 'Browser' : 'Server'
    }
  },

  created () {
    console.log(this)
  }
}
</script>

<style>
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
