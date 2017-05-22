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

</style>
