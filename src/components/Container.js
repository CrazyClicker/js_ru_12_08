import React, {Component, PropTypes} from 'react'
import ArticleList from './ArticleList'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DaypickerContainer from './DaypickerContainer'
import {findDOMNode} from 'react-dom'
import {connect} from 'react-redux'
import {setFilters} from '../AC/filters'

class Container extends Component {
  static propTypes = {};

  render() {
    const options = this.props.articles.map(article => ({
      label: article.title,
      value: article.id
    }))

    return (
      <div>
        <ArticleList articles={this.props.visibleArticles}/>
        <Select options={options} value={this.props.filters.selected} onChange={this.setSelected} multi={true}/>
        <DaypickerContainer setRange={this.setRange}/>
      </div>
    )
  }

  setSelected = (selected) => {
    this.props.setSelected(selected)
  }

  setRange = (range) => {
    this.props.setRange(range)
  }
}

//ToDo:: обернуть ArticleList компонентой с этой логикой
const getVisibleArticles = (articles, filters) => {
  let filteredArticles = articles.slice();

  if (filters.selected) {
    const filteredKeys = Object.keys(filters.selected).map(filter => filters.selected[filter].value)

    filteredArticles = filteredArticles.filter((article) => {
      return filteredKeys.includes(article.id)
    })
  }

  if (filters.range) {
    filteredArticles = filteredArticles.filter((article) => {
      const {from, to} = filters.range
      const articleDate = new Date(article.date)

      return (!from || articleDate > from) && (!to || articleDate < to)
    })
  }

  return filteredArticles;
}

const mapStateToProps = (state) => {
  return {
    visibleArticles: getVisibleArticles(
      state.articles,
      state.filters
    ),
    articles: state.articles,
    filters: state.filters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSelected: (selected) => {
      dispatch({
        type: 'SET_FILTER',
        payload: {selected}
      })
    },
    setRange: (range) => {
      dispatch({
        type: 'SET_FILTER',
        payload: {range}
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)