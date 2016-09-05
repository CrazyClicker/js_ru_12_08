import { ADD_COMMENT } from '../constants'

let commentId = 999;

export default function addComment(text, articleId) {
  commentId++;

  return {
    type: ADD_COMMENT,
    payload: {
      articleId,
      comment: {
        id: commentId,
        user: 'Huan Carlos Pereiro',
        text: text,
      }
    }
  }
}