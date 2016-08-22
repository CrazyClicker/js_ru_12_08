import React, { Component, PropTypes, createClass } from 'react'
import Comment from './Comment'
import toggleOpen from '../mixins/toggleOpen'

const CommentList = createClass({
    mixins: [toggleOpen],

    render() {
        const { comments } = this.props
        const { isOpen } = this.state
        if (!comments || !comments.length) return <p>No comments yet</p>
        const toggleButton = <a href="#" onClick = {this.toggleOpen}>{isOpen ? 'hide' : 'show'} comments</a>

        if (!isOpen) return <div>{toggleButton}</div>

        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)

        return (
            <div>
                {toggleButton}
                <ul>{commentItems}</ul>
            </div>
        )
    }

})

export default CommentList