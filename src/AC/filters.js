import { SET_FILTER } from '../constants'

export function setFilter(filters) {
  return {
    type: SET_FILTER,
    payload: filters
  }
}