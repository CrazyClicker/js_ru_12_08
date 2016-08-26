import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import Select from 'react-select'
import DayPicker, { DateUtils } from 'react-day-picker';
import JqueryComponent from './JqueryComponent'
import { findDOMNode } from 'react-dom'
import moment from 'moment';

import 'react-day-picker/lib/style.css';
import 'react-select/dist/react-select.css'

class Container extends Component {
    static propTypes = {

    };

    state = {
        from: null,
        to: null,
        selected: null,
    }

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        const {from, to} = this.state
        return (
            <div>
                <DayPicker
                    ref="daypicker"
                    numberOfMonths={ 2 }
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.setRange }
                />
                <div>
                    { !from && !to && <p>Please select the <strong>first day</strong>.</p> }
                    { from && !to && <p>Please select the <strong>last day</strong>.</p> }
                    { from && to &&
                    <p>
                        You chose from { moment(from).format('L') } to { moment(to).format('L') }
                    </p>
                    }
                </div>
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
    //Нет, все хорошо. Не надо ничего делать через ref, разве что по другому никак
    setRange = (e, day) => { //возможно я не понял задачи и надо было через ref делать
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    }}



export default Container
