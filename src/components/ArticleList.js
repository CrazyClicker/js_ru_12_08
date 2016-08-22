import React, { Component } from 'react'
import Article from './Article'

export default class ArticleList extends Component {
    state = {
        openArticleId: null
    }

    render() {
        const articleItems = this.props.articles.map(articleObject =>
            <li key = {articleObject.id}>
                <Article article = {articleObject}
                    isOpen = {this.state.openArticleId === articleObject.id}
                    toggleOpen = {this.toggleOpenArticle(articleObject.id)}
                />
            </li>)
        return (
            <ul>
                {articleItems}
            </ul>
        )
    }

    toggleOpenArticle = id => ev => {
        if (ev) ev.preventDefault()
        this.setState({
            openArticleId: id
        })
    }
}