import React, {Component} from 'react'

export default function Comment(props) {
  const {comment} = props

  return (
      <div>
        <h3>{comment.user}</h3>
        <div>{comment.text}</div>
      </div>
  )
}