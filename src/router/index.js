import { createRouter, createWebHistory } from 'vue-router'
import UserView from '../views/UserView.vue'
import UsersList from '../components/UsersList.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
      {path: '/user/:id', name: 'User', component:UserView},
      {path: '/', component:UsersList,}
  ]    
})