import { SET_FILTER } from '../constants'

export function setFilters(filters) {
  return {
    type: SET_FILTER,
    payload: filters
  }
}