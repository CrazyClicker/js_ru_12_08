import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'

export default class Article extends Component {
/*

    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }

*/
    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        }).isRequired
    }

    render() {
        const { article: { text, title, comments}, isOpen, toggleOpen } = this.props
        const body = isOpen ? <section>{text}<CommentList comments = {comments}/></section> : null
        return (
            <div>
                <h3 onClick = {toggleOpen}>{title}</h3>
                {body}
            </div>
        )
    }
}
