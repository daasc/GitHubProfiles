<template>
  <div class="search">
    <input
      v-model="search"
      date-testid="input-search"
      type="search"
      name=""
      class="search__input"
    />
    <button class="search__button" date-testid="search" @click="searchUser()">
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
      this.$emit('doSearch', { term: this.search })
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
    border: 1px solid rgb(170, 170, 170);
    outline: none;
    border-right: none;
  }
  .search__button {
    border: 1px solid;
    border-left: none;
  }
}
</style>
