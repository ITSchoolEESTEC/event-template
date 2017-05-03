<template>
  <div id="search">
    <input class="search-input" @change="searchShow" type="search" placeholder="Search for a show">
    <show-list></show-list>
  </div>
</template>

<script>
import ShowList from '@/components/ShowList'

export default {
  name: 'search',
  components: {
    ShowList
  },
  data () {
    return {

    }
  },
  methods: {
    searchShow(e) {
      this.$root.$emit('search-show', e.target.value);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @gray: #CCC;

  #search {
    display: flex;
    flex-direction: column;
  }

  .search {
    &-input {
      margin: 1rem 5vw;
      padding: 1rem;
      font-size: 1rem;

      &::placeholder {
        color: @gray;
      }
    }
  }
</style>
