/* eslint-disable import/no-named-as-default-member */
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import axios from 'axios'
import { users, repository } from '../db/test.json'
import { state, mutations, getters, actions } from '@/store/github.js'
jest.mock('axios')

const storeConfig = {
  state,
  mutations,
  getters,
  actions,
  namespaced: true,
}
describe('GitHub', () => {
  const createStore = (getUser = true) => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    if (getUser) {
      axios.get = jest
        .fn()
        .mockImplementationOnce(() => Promise.resolve({ data: users }))
    } else {
      axios.get = jest
        .fn()
        .mockImplementationOnce(() => Promise.resolve({ data: repository }))
    }
    const store = new Vuex.Store(storeConfig)
    return { store }
  }

  it('should make a get call getting the user data', async () => {
    const { store } = createStore()
    await store.dispatch('getUsers', 'daasc')
    expect(store.state.users).toEqual(users)
  })

  it("should perform a get call getting the searched user's repository", async () => {
    const { store } = createStore(false)
    store.commit('SET_USERS', users)
    await store.dispatch('getRepository')
    expect(store.state.repository).toEqual(repository)
  })
})
