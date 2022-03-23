import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import axios from 'axios'
import { users } from '../db/test.json'
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
  const createStore = () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    axios.get = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve({ data: { results: '' } }))
    const store = new Vuex.Store(storeConfig)
    return { store }
  }
  it('should return the value of the users ', () => {
    const { store } = createStore()
    expect(store.state.users).toEqual({})
  })
  it('should add value in users when SET_USERS is called', () => {
    const { store } = createStore()
    store.commit('SET_USERS', users)
    expect(store.state.users).toEqual(users)
  })
})
