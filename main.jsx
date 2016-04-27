import React from 'react'
import { render } from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router'

import SearchPage from './app/containers/search-page'
import Resolution from './app/components/resolution'
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
            <div className="app container">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <a className="navbar-brand">Data Skeptic Home Data App</a>
                    </div>
                </nav>
                <div>
                {this.props.children}
                </div>
            </div>
        )
    }
}

render(<Provider store={store}>
           <Router history={hashHistory} >
               <Route path="/" component={App} >
                   <IndexRoute component={SearchPage} />
                   <Route path="resolve" component={Resolution} />
               </Route>
           </Router>
       </Provider>, 
       document.getElementById('content'));

