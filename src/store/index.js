import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: '',
    isLoggedIn: false,
    token: ''
  },

  getters: {
    getUser: (state) => state.user,
    getToken: state => state.token,
    getIsloggedIn: state => state.isLoggedIn
  },

  actions: {
    login({commit}, user) {
      return new Promise((resolve, reject) => {
        console.log(commit, user)
        axios.post('url', user)
        .then(res => {
          const token = res.data.token
          const user = res.data.user

          localStorage.setItem('token', token)
          localStorage.setItem('user', user)

          commit('auth_success', token, user)
          resolve(res)
          
        }).catch(err => {
          commit('auth_error', err)
          localStorage.removeItem('token')
          reject(err)
        })
      })
      
    },
    register({ commit }, newUser) {
      console.log(commit, newUser)
      axios.post('url', newUser)
        .then(res => {
          const token = res.data.token
          const user = res.data.token

          localStorage.setItem('token', token)
          localStorage.setItem('user', user)

          commit('auth_success', token, user)

        }).catch(err => {
          commit('auth_error', err)
          localStorage.removeItem('token')
        })
    },
    logout({commit}) {
      localStorage.removeItem('user');
      localStorage.removeItem('token');

      commit('logout')
    }
  },

  mutations: {
    auth_success: (state, user, token) =>  {
      state.user = user
      state.toke = token
      state.isLoggedIn = true
    },
    auth_error: (state, err) => state.error = err,
    logout: (state) => state.isLoggedIn = false
  }

})
