import * as types from './mutation-types'

export const setUser = function ({commit}, user) {
  commit(types.SET_USER, user)
}
