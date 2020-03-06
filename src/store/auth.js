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
      console.log(commit, user, 'test123')
      // axios.post('url', user)
      //   .then(res => {
      //     const token = res.data.token
      //     const user = res.data.user

      //     localStorage.setItem('token', token)
      //     localStorage.setItem('user', user)

      //     commit('auth_success', token, user)
          
      //   }).catch(err => {
      //     commit('auth_error', err)
      //     localStorage.removeItem('token')
      //   })
    },
    register({ commit }, user) {
      axios.post('url', user)
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
    }
  },

  mutations: {}

})
