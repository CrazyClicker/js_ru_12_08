import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {
    render() {
        const { comments, isOpen, toggleOpen } = this.props

        if (!comments || !comments.length) return <p>No comments yet</p>
        const toggleButton = <a href="#" onClick = {toggleOpen}>{isOpen ? 'hide' : 'show'} comments</a>

        if (!isOpen) return <div>{toggleButton}</div>

        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)

        return (
            <div>
                {toggleButton}
                <ul>{commentItems}</ul>
            </div>
        )
    }
}

export default toggleOpen(CommentList)