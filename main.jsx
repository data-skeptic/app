import React from 'react'
import { render } from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import SearchPage from './app/containers/search-page'
import combinedReducers from './app/reducers/reducers'

require('./scss/style.scss');

let store = createStore(
    combinedReducers,
    applyMiddleware(
        thunkMiddleware
    )
)

render(<Provider store={store}>
        <SearchPage />
       </Provider>, 
       document.getElementById('content'));

