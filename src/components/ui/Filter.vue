<template>
   <input class="filter" type="text" placeholder="Введите полное имя" v-model="name"> 
</template>

<script>
export default {
  props:['modelValue'],
  data() {
    return {
      name:''
    }    
  },
  watch: {
    name(value) {
      this.$emit('updateName', value)    
    }    
  }
}
</script>

<style lang="scss" scoped>
.filter {
  border-radius: 12px;
  border: 1px solid black;
  margin-left: 15px;
  padding: 5px;
  @media (max-width:520px) {
    margin-top: 10px;  
  }
}
</style>