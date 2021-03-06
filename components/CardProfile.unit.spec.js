/* eslint-disable import/no-named-as-default-member */
import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import Vue from 'vue'
import { users } from '../db/test.json'
import CardProfile from './CardProfile.vue'

import { state, mutations, getters, actions } from '@/store/github.js'

describe('CardProfile', () => {
  const mountCardProfile = async ({ props = false }) => {
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

    await store.commit('github/SET_USERS', users)

    const wrapper = mount(CardProfile, {
      propsData: {
        users: store.state.github.users,
      },
      mocks: {
        $store: store,
      },
    })
    Vue.nextTick()
    return { wrapper }
  }
  it('should mount the component', async () => {
    const { wrapper } = await mountCardProfile({})
    expect(wrapper.vm).toBeDefined()
  })

  it('should mount the component', async () => {
    const { wrapper } = await mountCardProfile({ propsData: true })
    const card = wrapper.find('[date-testid="name-user"]')
    expect(card.text()).toContain('Paulo Sobrinho Ferreira')
  })
})
