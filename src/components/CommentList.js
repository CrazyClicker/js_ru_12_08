import React, {Component, PropTypes} from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import CommentCount from './CommentCount'
import { connect } from 'react-redux'
import addComment  from '../AC/comments'

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.object,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  /*
   componentDidMount() {
   console.log('---', 'mounted')
   }

   componentWillUnmount() {
   console.log('---', 'unmounting')
   }

   componentWillReceiveProps() {
   console.log('---', 'updating')
   }
   */

  input = null

  render() {
    const {comments, isOpen, toggleOpen, addComment, articleId} = this.props

    if (!comments || !comments.count()) return <p>No comments yet</p>
    const toggleButton = <a href="#" onClick={toggleOpen}>{isOpen ? 'hide' : 'show'} comments.
      <CommentCount count={comments.count()}/>
    </a>

    if (!isOpen) return <div>{toggleButton}</div>

    const commentItems = comments.map(commentId => <li key={commentId}><Comment commentId={commentId}/></li>)

    return (
      <div>
        {toggleButton}
        <ul>{commentItems}</ul>
        <form onSubmit={e => {
          e.preventDefault()
          if (!this.input.value.trim()) {
            return
          }
          addComment(this.input.value, articleId)
          this.input.value = ''
        }}>
                <textarea ref={node => {
                  this.input = node
                }}/>
          <button type="submit">
            Add Comment
          </button>
        </form>
      </div>
    )
  }
}

export default connect(null, {addComment})(toggleOpen(CommentList))