import { mount } from '@vue/test-utils'
import NavBar from '@/components/NavBar.vue'
describe('NavBar', () => {
  const mountNavBar = ({ values = {} }) => {
    const wrapper = mount(NavBar, {
      data() {
        return {
          ...values,
        }
      },
    })

    return { wrapper }
  }
  it('should mount the component', () => {
    const { wrapper } = mountNavBar({})
    expect(wrapper.vm).toBeDefined()
  })
  it('should change site theme to dark when changeTheme is called', async () => {
    const { wrapper } = mountNavBar({ values: { light: true } })
    const dark = wrapper.find('[data-testid="dark-light"]')
    await dark.trigger('click')
    const body = document.querySelector('body')
    expect(body.classList.value).toContain('dark')
  })

  it('should change the site theme to light when changeTheme is called and it is already in dark', async () => {
    const { wrapper } = mountNavBar({ values: { light: true } })
    const dark = wrapper.find('[data-testid="dark-light"]')
    await dark.trigger('click')
    const body = document.querySelector('body')
    expect(body.classList.value).toContain('dark')
    await dark.trigger('click')
    expect(body.classList.value).toContain('light')
  })
})
