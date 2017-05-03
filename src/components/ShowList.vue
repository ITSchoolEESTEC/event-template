<template>
  <div id="show-list">
    <h2>Results <span class="text-italic" v-if="query">({{ query }})</span></h2>
    <div class="show-results">
      <show v-for="(item, index) in shows" :show="item.show" :key="index"></show>
    </div>
  </div>
</template>

<script>
import Show from '@/components/Show'

export default {
  name: 'show-list',
  components: {
    Show
  },
  data() {
    return {
      query: '',
      shows: [],
      api: 'http://api.tvmaze.com/search/shows'
    }
  },
  created() {
    this.$root.$on('search-show', (data) => {
      this.query = data;
      this.searchQuery(this.query);
    });
  },
  methods: {
    async searchQuery(q) {
      this.shows = (await this.$http.get(`${this.api}?q=${q}`)).data;
    }
  }
}
</script>

<style lang="less" scoped>
  .show {
    &-results {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-bottom: 2rem;
    }
  }
</style>
