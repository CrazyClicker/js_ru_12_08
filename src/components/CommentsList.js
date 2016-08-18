import React from 'react'
import Comment from './Comment'

export default function CommentsList(props) {
    const commentItems = props.comments.map(commentObject => <li key = {commentObject.id}><Comment comment = {commentObject}/></li>)
    return (
        <div>
          <ul>
              {commentItems}
          </ul>
        </div>
    )
}