import React, { Component } from 'react'
import Article from './Article'
import accordion from '../mixins/accordion'

const ArticleListMixin =  React.createClass({
    mixins: [accordion],

    render() {

        const articleItems = this.props.articles.map(articleObject =>
            <li key = {articleObject.id}>
                <Article article = {articleObject}
                    isOpen = {this.isOpen(articleObject.id)}
                    toggleOpen = {this.toggleOpen(articleObject.id)} //есть смысл присвоения переменной кроме того что тут не пришлось бы приставку this.props писать?
                />
            </li>)
        return (
            <ul>
                {articleItems}
            </ul>
        )
    }

})

export default ArticleListMixin