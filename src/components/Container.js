import React, {Component, PropTypes} from 'react'
import ArticleList from './ArticleList'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import JqueryComponent from './JqueryComponent'
import DaypickerContainer from './DaypickerContainer'
import Counter from './Counter'
import {findDOMNode} from 'react-dom'
import {connect} from 'react-redux'
import {setFilters} from '../AC/filters'
import store from '../store'

class Container extends Component {
  static propTypes = {};

  //не дошел пока до connect
  state = store.getState()

  render() {
    const getVisibleArticles = (
      articles,
      filters
    ) => {
      let filteredArticles = articles.slice();

      if (filters.selected) {
        const filteredKeys = Object.keys(filters.selected).map( filter => filters.selected[filter].value )

        filteredArticles = filteredArticles.filter((article) => { return filteredKeys.includes(article.id) })
      }

      if (filters.range) {
        filteredArticles = filteredArticles.filter((article) => {
          const { from, to } = filters.range
          const articleDate = new Date(article.date)

          return (!from || articleDate > from) && (!to || articleDate < to)
        })
      }

      return filteredArticles;
    }

    const state = store.getState()
    const { articles, filters} = state
    const visibleArticles = getVisibleArticles(articles, filters)

    const options = this.props.articles.map(article => ({
      label: article.title,
      value: article.id
    }))

    return (
      <div>
        <Counter />
        <ArticleList articles={visibleArticles}/>
        <Select options={options} value={state.filters.selected} onChange={this.setSelected} multi={true}/>
        <DaypickerContainer setRange={this.setRange}/>
        <JqueryComponent items={this.props.articles} ref={this.getJQ}/>
      </div>
    )
  }

  componentWillMount() {
    store.subscribe(this.handleStoreChange)
  }

  handleStoreChange = () => {
    this.setState(store.getState())
  }

  setSelected = (selected) => {
    const action = setFilters({
      selected: selected
    })

    store.dispatch(action)
  }

  setRange = (range) => {
    const action = setFilters({
      range: range
    })

    store.dispatch(action)
  }

  getJQ = (ref) => {
    this.jqRef = ref
    console.log('---', findDOMNode(ref))
  }

}

export default Container