<template>
  <div>
    <nav-bar></nav-bar>
    <search-user></search-user>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import SearchUser from '@/components/SearchUser.vue'
export default {
  name: 'IndexPage',
  components: { NavBar, SearchUser },
}
</script>
<style lang=""></style>
