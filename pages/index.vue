<template>
  <div>
    <nav-bar></nav-bar>
    <search-user @doSearch="doSearch"></search-user>

    <card-profile
      v-if="Object.keys(users).length"
      :users="users"
    ></card-profile>
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
<style lang=""></style>
