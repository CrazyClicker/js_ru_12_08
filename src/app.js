import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'

import Container from './components/Container'

render(
    <Provider store = {store}>
        <Container {...store.getState()} />
    </Provider>
    , document.getElementById('container'))