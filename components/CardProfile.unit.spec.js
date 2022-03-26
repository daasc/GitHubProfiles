/* eslint-disable import/no-named-as-default-member */
import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import { users } from '../db/test.json'
import CardProfile from './CardProfile.vue'

import { state, mutations, getters, actions } from '@/store/github.js'

describe('CardProfile', () => {
  const mountCardProfile = ({ propsData = true }) => {
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
    if (propsData) {
      store.commit('github/SET_USERS', users)
    }
    console.log(store.state.github.users)
    const wrapper = mount(CardProfile, {
      props: {
        user: store.state.github.users,
      },
      mocks: {
        $store: {
          store,
        },
      },
    })
    return { wrapper }
  }
  it('should mount the component', () => {
    const { wrapper } = mountCardProfile({})
    expect(wrapper.vm).toBeDefined()
  })

  it('should mount the component', () => {
    const { wrapper } = mountCardProfile({ propsData: true })
    const card = wrapper.find('[date-testid="name-user"]')
    expect(card.text()).toContain('Paulo Sobrinho Ferreira')
  })
})
