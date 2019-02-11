import axios from 'axios'

export const strict = false

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
  async getList({ commit, state }) {
    if (!state.shouldFetch) {
      return
    }
    // const { data } = await axios.get('http://0.0.0.0:3000/api/items')
    const data = [
      { id: 1, condition: 'condition' },
      { id: 2, condition: 'condition' }
    ]
    commit('setList', data)
  },
  async get({ commit, state }, id) {
    const item = state.list.filter(item => item.id === parseInt(id))[0]
    if (item) {
      commit('set', item)
    } else {
      // const { data } = await axios.get('http://0.0.0.0:3000/api/items/' + id)
      const data = { id: id, condition: 'condition' }
      commit('set', data)
    }
  },
  async update({ commit, state }) {
    if (!state.current) {
      return
    }
    // const response = await axios.put(
    //   'http://0.0.0.0:3000/api/items/' + state.current.id,
    //   {
    //     condition: state.current.condition
    //   }
    // )
    const response = { status: 200 }
    return response
  }
}
