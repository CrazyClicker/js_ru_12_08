import {DELETE_ARTICLE, ADD_COMMENT} from '../constants'
import {normalizedArticles} from '../fixtures'
import {fromJS} from 'immutable'

export default (articles = fromJS(normalizedArticles), action) => {
  const {type, payload, response, error} = action

  switch (type) {
    case ADD_COMMENT:

      console.log(payload.comment)
      const articleKey = articles.findKey(article => article.get('id') == payload.articleId)

      return articles.updateIn([articleKey, 'comments'], comments => comments.push(payload.comment.id))
    case DELETE_ARTICLE:
      return articles.filter(article => article.id != payload.id)
  }

  return articles
}