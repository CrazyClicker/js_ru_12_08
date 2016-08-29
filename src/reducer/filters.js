import { SET_FILTER, DELETE_ARTICLE } from '../constants'

const filter = (filters = {filters : {}}, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_FILTER:
      return Object.assign({}, filters, payload)
    case DELETE_ARTICLE:
      if (filters.selected)
        return Object.assign({}, filters, { selected: filters.selected.filter((filter) => filter.value != payload.id ) })
    default:
      return filters
  }
}

export default filter