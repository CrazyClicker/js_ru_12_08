import { SET_FILTER } from '../constants'

const filter = (filters = {filters : {}}, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_FILTER:
      return Object.assign(filters, payload)
    default:
      return filters
  }
}

export default filter