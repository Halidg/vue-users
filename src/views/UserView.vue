<template>
  <div class="user-card">
      <h1>{{user.last_name}}</h1>
      <h2>{{user.email}}</h2>
   <div class="user-card__block">
    <button class="btn" @click="back">назад</button>
   </div>    
  </div>
</template>

<script>
export default {
computed: {
  user() {
    return this.$store.getters.usersById(this.$route.params.id)
  } 
},
methods: {
  back() {
    this.$router.push('/')
  }
}
}
</script>

<style lang="scss" scoped>
.user-card {
  padding: 15px; 
  margin: 0 auto;
  border-radius: 10px;
  background: #fff;
  width: 50%;
}
</style>