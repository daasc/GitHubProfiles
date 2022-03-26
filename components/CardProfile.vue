<template>
  <div class="card-container">
    <span class="pro">PRO</span>
    <img class="round" :src="users.avatar_url" alt="user" />
    <h3>{{ users.name }}</h3>
    <h6>New York</h6>
    <p>
      User interface designer and <br />
      front-end developer
    </p>
    <div class="buttons">
      <button class="primary">Message</button>
      <button class="primary ghost">Following</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardProfile',
  props: {
    users: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
<style lang="scss" scoped>
.card-container {
  h3 {
    margin: 10px 0;
  }

  h6 {
    margin: 5px 0;
    text-transform: uppercase;
  }

  p {
    font-size: 14px;
    line-height: 21px;
  }
  background-color: #231e39;
  border-radius: 5px;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
  color: #b3b8cd;
  padding-top: 30px;
  position: relative;
  width: 350px;
  max-width: 100%;
  text-align: center;

  .pro {
    color: #231e39;
    background-color: #febb0b;
    border-radius: 3px;
    font-size: 14px;
    font-weight: bold;
    padding: 3px 7px;
    position: absolute;
    top: 30px;
    left: 30px;
  }

  .round {
    border: 1px solid #03bfcb;
    border-radius: 50%;
    padding: 7px;
    width: 200px;
  }
  .buttons {
    button.primary {
      background-color: #03bfcb;
      border: 1px solid #03bfcb;
      border-radius: 3px;
      color: #231e39;
      font-family: Montserrat, sans-serif;
      font-weight: 500;
      padding: 10px 25px;
    }

    button.primary.ghost {
      background-color: transparent;
      color: #02899c;
    }
  }
}
</style>
