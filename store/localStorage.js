export const state = () => ({
  auth: null,
})

export const mutations = {
  setAuth(state, data) {
    state.auth = data
  },
}
