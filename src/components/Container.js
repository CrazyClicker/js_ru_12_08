import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import Select from 'react-select'
import DatePicker from './DatePicker'
import 'react-select/dist/react-select.css'
import JqueryComponent from './JqueryComponent'
import { findDOMNode } from 'react-dom'

class Container extends Component {
    static propTypes = {

    };

    state = {
        selected: null,
    }

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <DatePicker />
                <Select options = {options} value={this.state.selected} onChange = {this.handleChange} multi={true}/>
                <ArticleList articles = {this.props.articles} />
                <JqueryComponent items = {this.props.articles} ref={this.getJQ}/>
            </div>
        )
    }

    getJQ = (ref) => {
        this.jqRef = ref
        console.log('---', findDOMNode(ref))
    }

}

export default Container