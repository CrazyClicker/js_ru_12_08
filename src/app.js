import React from 'react'
import { render } from 'react-dom'
import { articles } from './fixtures'

//import ArticleListMixin from './components/ArticleListMixin'
import ArticleList from './components/ArticleList'

//render(<ArticleListMixin articles = {articles} />, document.getElementById('container'))
render(<ArticleList articles = {articles} />, document.getElementById('container'))