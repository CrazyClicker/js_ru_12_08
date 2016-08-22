import React, { Component } from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'

class ArticleList extends Component {

    render() {

        const articleItems = this.props.articles.map(articleObject =>
            <li key = {articleObject.id}>
                <Article article = {articleObject}
                    isOpen = {this.props.isOpen(articleObject.id)}
                    toggleOpen = {this.props.toggleOpen(articleObject.id)} //есть смысл присвоения переменной кроме того что тут не пришлось бы приставку this.props писать?
                />
            </li>)
        return (
            <ul>
                {articleItems}
            </ul>
        )
    }

}

export default accordion(ArticleList)