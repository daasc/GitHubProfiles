<template>
  <div class="card-container">
    <img class="round" :src="users.avatar_url" alt="user" />
    <h3>{{ users.name }}</h3>
    <h6>{{ users.location }}</h6>
    <p>
      {{ users.bio }}
    </p>
    <div>
      <div>
        <span>Repositories count:</span> <span>{{ users.public_repos }}</span>
      </div>
      <div>
        <span>Followers:</span> <span>{{ users.followers }}</span>
      </div>
    </div>
    <div class="buttons">
      <a :href="users.html_url" class="primary ghost" target="_blank"
        >Following</a
      >
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
  background-color: var(--card-color);
  border-radius: 5px;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
  color: #b3b8cd;
  padding-top: 30px;
  position: relative;
  width: 350px;
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
    margin-top: 30px;
  }
}
</style>
