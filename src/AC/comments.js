import { ADD_COMMENT } from '../constants'
//import { v4 } from 'node-uuid'

let commentId = 999;

export default function addComment(text, articleId) {
  commentId++;

  return {
    type: ADD_COMMENT,
    payload: {
      articleId,
      comment: {
        id: commentId,
        //id: v4(),
        user: 'Huan Carlos Pereiro',
        text: text,
      }
    }
  }
}