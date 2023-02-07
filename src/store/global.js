import { reactive } from 'vue'

const state = reactive({
  isLoading: false
})

export default state

// eslint-disable-next-line space-before-function-paren
export function setGlobalLoading(status) {
  state.isLoading = status
}
