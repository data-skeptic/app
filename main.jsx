import React from 'react'
import { render } from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router'

import SearchPage from './app/containers/search-page'
import combinedReducers from './app/reducers/reducers'

require('./scss/style.scss');

let store = createStore(
    combinedReducers,
    applyMiddleware(
        thunkMiddleware
    )
)


class App extends React.Component {
    render() {
        return (
            <div className="app">
                {this.props.children}
            </div>
        )
    }
}

render(<Provider store={store}>
           <Router history={hashHistory} >
               <Route path="/" component={App} >
                   <IndexRoute component={SearchPage} />
               </Route>
           </Router>
       </Provider>, 
       document.getElementById('content'));

