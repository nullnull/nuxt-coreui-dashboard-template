import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      categories: [],
      shouldFetchCategories: true
    }),
    mutations: {
      setCategories (state, data) {
        state.categories = data
        state.shouldFetchCategories = false
      }
    },
    actions: {
      async getCategories ({ commit, state }) {
        if (!state.shouldFetchCategories) { return }
        // ex.
        // const { data } = await axios.get('http://0.0.0.0:3000/api/categories')
        const data = [
          {id: 1, name: 'name1' },
          {id: 2, name: 'name2' },
          {id: 3, name: 'name3' }
        ]
        commit('setCategories', data)
      }
    }
  })
}

export default createStore
