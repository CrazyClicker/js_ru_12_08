import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { normalizedArticles } from '../fixtures'
import { Record, List, OrderedMap, fromJS } from 'immutable'

const Article = new Record({
    id: '',
    date: null,
    title: '',
    text: '',
    comments: []
})

const articlesMap = normalizedArticles.reduce((acc, article) => acc.set(article.id, new Article(article)), new OrderedMap({}))

export default (articles = articlesMap, action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles.delete(payload.id)

        case ADD_COMMENT:
            return articles.updateIn([payload.articleId, 'comments'], comments => comments.concat(action.randomId))
    }

      console.log(payload.comment)
      const articleKey = articles.findKey(article => article.get('id') == payload.articleId)

      return articles.updateIn([articleKey, 'comments'], comments => comments.push(payload.comment.id))
    case DELETE_ARTICLE:
      return articles.filter(article => article.id != payload.id)
  }

  return articles
}