import { ADD_COMMENT } from '../constants'
//import { v4 } from 'node-uuid'

/* Не стал выносить генерацию id в middleware потому что мне эта идея не нравится примерно так же как триггеры в sql.
Кога пишешь выходит красиво, а потом является причиной тучи баггов пока не всплывает мысль "А у меня же там триггер"
  */
  //Право твое, моя работа сказать тебе, что так делать плохо) Главное писать код акуратно и такой проблемы не будет
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
