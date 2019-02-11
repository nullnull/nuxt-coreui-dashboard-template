import axios from 'axios'

export const state = () => ({
  list: [],
  current: null,
  shouldFetch: true
})

export const mutations = {
  setList(state, data) {
    state.list = data
    state.shouldFetch = false
  },
  set(state, data) {
    state.current = data
  }
}

export const actions = {
  async getList ({ commit, state }) {
    if (!state.shouldFetch) { return }
    const { data } = await axios.get('http://0.0.0.0:3000/api/items')
    commit('setList', data)
  },
  async get ({ commit, state }, id) {
    const item = state.list.filter(item => item.id === parseInt(id))[0];
    if (item) {
      commit('set', item);
    } else {
      const { data } = await axios.get('http://0.0.0.0:3000/api/items/' + id)
      commit('set', data)
    }

  },
}
