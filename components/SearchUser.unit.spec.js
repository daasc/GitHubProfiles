import { mount } from '@vue/test-utils'
import SearchUser from '@/components/SearchUser.vue'
describe('SearchUser', () => {
  const mountSearchUser = ({ values = {} }) => {
    const wrapper = mount(SearchUser, {
      data() {
        return {
          ...values,
        }
      },
    })

    return { wrapper }
  }
  it('should mount the component', () => {
    const { wrapper } = mountSearchUser({})
    expect(wrapper.vm).toBeDefined()
  })
  it('should emit a event with value of the search', async () => {
    const { wrapper } = mountSearchUser({ values: { search: '' } })
    const input = wrapper.find('[date-testid="input-search"]')
    input.setValue('daasc')
    const search = wrapper.find('[date-testid="search"]')
    await search.trigger('click')

    expect(wrapper.emitted().doSearch).toBeTruthy()
    expect(wrapper.emitted().doSearch.length).toBe(1)
    expect(wrapper.emitted().doSearch[0]).toEqual([{ term: 'daasc' }])
  })

  it('should check if value is empty', async () => {
    const { wrapper } = mountSearchUser({ values: { search: '' } })
    const search = wrapper.find('[date-testid="search"]')
    await search.trigger('click')

    expect(wrapper.emitted().doSearch).toBeUndefined()
  })
})
