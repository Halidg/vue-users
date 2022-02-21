import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    users:[]
  },
  mutations: {
   setUsers(state,users) {
    if(state.users.length) {
      state.users.forEach(stateUser => {
        users.forEach(user => {
          stateUser = stateUser.id === user.id ? user : stateUser
        })
      })
    } else {
      state.users = users
    }  
    },
    deleteUsers(state,id) {
     state.users = state.users.filter(el => el.id !== id)
    },
    createUsers(state,user) {
     state.users.push(user)
    }  
  },
  actions: {
    async getUsers({commit,dispatch}) {
      const users = await axios.get('https://reqres.in/api/users?page=1')
      commit('setUsers',users.data.data)
    }
  },
  getters:{
    users: s => s.users,
    usersById: s => id => s.users.find(el => el.id === +id)
  }
})
