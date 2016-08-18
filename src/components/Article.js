import React, {Component} from 'react'
import CommentsList from './CommentsList'

export default class Article extends Component {
  /*

   constructor() {
   super()
   this.state = {
   isOpen: false
   }
   }

   */
  state = {
    isOpen: false,
    commentsVisibility: false
  }

  render() {
    const {article} = this.props
    const comments = article.comments && this.state.commentsVisibility ?
        <CommentsList comments={article.comments}/> : null
    const body = this.state.isOpen ?
        <section>{article.text}
          <div>
              <h4 onClick={this.showComments}>
                {(() => {
                  if (!article.comments) {
                    return 'No comments'
                  }

                  if (this.state.commentsVisibility) {
                    return 'Hide comments'
                  } else {
                    return 'Show comments (' + article.comments.length + ')'
                  }
                })()}
              </h4>
            <div>
              {comments}
            </div>
          </div>
        </section>
        : null

    return (
        <div>
          <h3 onClick={this.showBody}>{article.title}</h3>
          {body}
        </div>
    )
  }

  showBody = (ev) => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  showComments = (ev) => {
    this.setState({
      commentsVisibility: !this.state.commentsVisibility
    })
  }

}