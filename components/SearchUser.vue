<template>
  <div class="search">
    <input
      v-model="search"
      date-testid="input-search"
      type="search"
      name=""
      class="search__input"
      @keyup.enter="searchUser()"
    />
    <button
      class="search__button primary ghost"
      date-testid="search"
      @click="searchUser()"
    >
      search
    </button>
  </div>
</template>
<script>
export default {
  name: 'SearchUser',
  data() {
    return {
      search: '',
    }
  },
  methods: {
    searchUser() {
      if (this.search) {
        this.$emit('doSearch', { term: this.search })
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.search {
  display: flex;
  margin: 50px;
  .search__input {
    padding: 10px;
    border: 1px solid #02899c;
    outline: none;
    border-right: none;
  }
  .search__button {
    border: 1px solid;
    border-left: none;
    border-radius: 0px 3px 3px 0px;
    cursor: pointer;
  }
}
</style>
