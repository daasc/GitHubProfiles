<template>
  <div class="main">
    <nav-bar></nav-bar>
    <search-user @doSearch="doSearch"></search-user>
    <div class="card">
      <card-profile
        v-if="Object.keys(users).length"
        :users="users"
      ></card-profile>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import SearchUser from '@/components/SearchUser.vue'
import CardProfile from '@/components/CardProfile.vue'
export default {
  name: 'IndexPage',
  components: { NavBar, SearchUser, CardProfile },
  computed: {
    users() {
      return this.$store.state.github.users
    },
  },
  methods: {
    doSearch({ term }) {
      this.$store.dispatch('github/getUsers', term)
    },
  },
}
</script>
<style lang="scss" scoped>
.main {
  background: var(--container-color);
  height: 100vh;
  .card {
    display: flex;
    justify-content: center;
    min-height: 500px;
  }
}
</style>
