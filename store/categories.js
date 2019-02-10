import axios from 'axios'

export const state = () => ({
  list: [],
  shouldFetch: true
})

export const mutations = {
  set(state, data) {
    state.list = data
    state.shouldFetch = false
  }
}

export const actions = {
  async get ({ commit, state }) {
    if (!state.shouldFetch) { return }
    // ex.
    // const { data } = await axios.get('http://0.0.0.0:3000/api/categories')
    const data = [
      {id: 1, name: 'name1' },
      {id: 2, name: 'name2' },
      {id: 3, name: 'name3' }
    ]
    commit('set', data)
  }
}
