import axios from 'axios'

export const state = () => ({
  token: null,
  authenticated: false
})

export const mutations = {
  setToken(state, token) {
    state.token = token
    state.authenticated = true
    localStorage.setItem('token', token)
  },
  removeToken(state) {
    state.token = null
    state.authenticated = false
    localStorage.removeItem('token')
  },
}

export const actions = {
  async login({ commit, state }) {
    if (state.authenticated) {
      return
    }
    // mock
    const response = { status: 200, data: { token: 'hoge' } }
    commit('setToken', response.data.token)
    return response
  },
  async logout({ commit, state }) {
    if (!state.authenticated) {
      return
    }
    commit('removeToken')
  },
  nuxtClientInit ({ commit, state, dispatch }, { req }) {
    if (localStorage.token) {
      commit('setToken', localStorage.token)
    }
  }
}
