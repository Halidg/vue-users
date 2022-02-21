<template>
 <div class="card">
  <button class="btn create" @click="modalView = true">Создать</button>
  <Filter
    @updateName="updateName"
    v-model="filter"
   />

  <teleport to="body">
    <app-modal v-if="modalView"  @close="modalView=false">
      <create-form @created="modalView=false"></create-form>
    </app-modal>
  </teleport>

  <table class="users-table">
    <thead>
      <tr>
        <th>Имена</th>  
      </tr>                
    </thead>
    <tbody>
      <tr v-for="user in usersName" :key="user.id">
        <td>
          {{user.first_name}}
        </td>   
        <td>
         <router-link v-slot="{navigate}"
          custom :to="{name:'User', params:{id:user.id}}"
         > 
         <button class="btn" @click="navigate">Открыть</button>
         </router-link>
        </td>  
        <td>
          <button class="btn warning" @click="deleteName(user.id)">Удалить</button>
        </td>
      </tr>    
    </tbody>
    </table> 
 </div>   
</template>

<script>
import AppModal from './ui/AppModal.vue'
import CreateForm from './create/CreateForm.vue'
import Filter from './ui/Filter.vue'

export default {
  data() {
    return {
      modalView: false,
      filter: ''
    }
  },
  mounted() {
    this.$store.dispatch('getUsers')  
  },
  computed:{
    users() {
      return this.$store.getters.users
    },
    usersName() {
      return this.users.filter(el => {
        if (!this.filter) {
          return true  
        }
        return el.first_name.toLowerCase().includes(this.filter.toLowerCase())  
      })  
    }
  },
  methods: {
    deleteName(id) {
      this.$store.commit('deleteUsers', id)
    },
    updateName(value) {
      this.filter = value 
    }
  },
  components:{AppModal, CreateForm, Filter}
}
</script>

<style lang="scss" scoped> 
.users-table{
  margin: 0 auto;
}
</style>