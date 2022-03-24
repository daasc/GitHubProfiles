import axios from 'axios'
export const state = () => ({
  users: {},
  repository: [],
})

export const mutations = {
  SET_USERS: (state, payload) => {
    state.users = payload
  },
  SET_REPOSITORY: (state, payload) => {
    state.repository = payload
  },
}

export const getters = {}

export const actions = {
  async getUsers({ commit }, search) {
    const response = await axios.get(`https://api.github.com/users/${search}`)
    commit('SET_USERS', response.data)
  },
  async getRepository({ commit, state }) {
    const response = await axios.get(state.users.repos_url)
    commit('SET_REPOSITORY', response.data)
  },
}
