/* eslint-disable import/no-named-as-default-member */
import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import axios from 'axios'
import { users } from '../db/test.json'
import Index from '@/pages/index.vue'

import { state, mutations, getters, actions } from '@/store/github.js'
jest.mock('axios')

describe('Index', () => {
  const mountIndex = () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const store = new Vuex.Store({
      modules: {
        github: {
          state,
          mutations,
          getters,
          actions,
          namespaced: true,
        },
      },
    })
    axios.get = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve({ data: users }))
    const wrapper = mount(Index, {
      mocks: {
        $store: store,
      },
    })
    return { wrapper, store }
  }
  it('should mount the component', () => {
    const { wrapper } = mountIndex()
    expect(wrapper.vm).toBeDefined()
  })

  it('should mount the component', async () => {
    const { wrapper, store } = mountIndex()
    const input = wrapper.find('[date-testid="input-search"]')
    input.setValue('ggggeea')
    const search = wrapper.find('[date-testid="search"]')
    await search.trigger('click')
    expect(store.state.github.users).toEqual(users)
  })
})
