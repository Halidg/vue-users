<template>
  <div class="modal-card">
   <input v-model="name" class="modal-card__input" type="text" placeholder="введите имя">    
   <input v-model="secondName" class="modal-card__input" type="text" placeholder="введите фамилию">  
   <input v-model="email" class="modal-card__input" type="text" placeholder="введите email">     
   <button class="btn primary" :disabled="!disabled" @click="create">создать пользователя</button>
  </div>
</template>

<script>
export default {
props:['created'],  
data() {
  return {
    name: '',
    secondName: '',
    email: '',
    modalView: true  
  }  
},
methods:{
  create() {
    const user = {
      first_name: this.name,
      last_name: this.secondName,
      email: this.email,
      id: Date.now()  
    }
    this.$store.commit('createUsers', user)
    this.$emit('created')   
  }
},
computed: {
  disabled(){
    return  !!this.name && !!this.secondName && !!this.email
  }
}
}
</script>

<style lang="scss" scoped>
.modal-card {
  padding: 15px; 
  margin: 0 auto;
  border-radius: 10px;
  background: #fff;
  width: 50%;
  &__input {
    border-radius: 10px;
    border: 1px solid black;
    padding: 4px;
    margin-bottom: 10px;
    outline: none;
  } 
}
</style>