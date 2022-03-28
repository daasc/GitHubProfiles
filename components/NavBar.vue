<template>
  <nav class="navbar">
    <span class="title"> Github Profiles </span>
    <div class="actions">
      <img
        v-if="light"
        src="@/assets/img/light.png"
        alt=""
        data-testid="dark-light"
        @click="changeTheme()"
      />
      <img
        v-else
        src="@/assets/img/dark.png"
        alt=""
        data-testid="dark-light"
        @click="changeTheme()"
      />
    </div>
  </nav>
</template>
<script>
export default {
  name: 'NavBar',
  data() {
    return {
      light: true,
    }
  },
  methods: {
    changeTheme() {
      this.light = !this.light
      const body = document.querySelector('body')
      if (this.light) {
        body.classList.remove('dark')
        body.classList.add('light')
      } else {
        body.classList.remove('light')
        body.classList.add('dark')
      }
    },
  },
}
</script>
<style lang="scss" scoped>
@media (min-width: 0px) {
  .navbar {
    display: flex;
    height: 80px;
    background-color: var(--primary-color, #0e1116);
    width: 100%;
    color: var(--font-color, #f0f6fc);
    font-size: 22px;
    align-items: center;
    .title {
      width: 80%;
      margin-left: 40px;
    }
    .actions {
      width: 20%;
      display: flex;
      justify-content: center;
      img {
        width: 50px;
        cursor: pointer;
      }
    }
  }
}
@media (min-width: 1200px) {
  .navbar {
    .title {
      width: 90%;
    }
    .actions {
      width: 10%;
    }
  }
}
</style>
