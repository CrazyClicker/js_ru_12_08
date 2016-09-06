import React, { Component, PropTypes } from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'
import CSSTransition from 'react-addons-css-transition-group'
import './articleList.css'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.object.isRequired,
        //from accordion decorator
        toggleOpenItem: PropTypes.func.isRequired,
        isOpenItem: PropTypes.func.isRequired
    }

    render() {
        const { articles, toggleOpenItem, isOpenItem } = this.props
        const articleItems = articles.map(articleObject =>
            <li key = {articleObject.get('id')}>
                <Article article = {articleObject}
                    isOpen = {isOpenItem(articleObject.get('id'))}
                    toggleOpen = {toggleOpenItem(articleObject.get('id'))}
                />
            </li>)
        return (
            <CSSTransition component="ul" transitionName="article" transitionLeaveTimeout ={1000} transitionEnterTimeout = {500}>
                {articleItems}
            </CSSTransition>
        )
    }
}

export default accordion(ArticleList)