import React from 'react'
import { render } from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'

import SearchPage from './app/containers/search-page'
import LoginPage from './app/containers/login'
import Resolution from './app/components/resolution'

import combinedReducers from './app/reducers/reducers'
import { verifyToken } from './app/actions/actions'

require('./scss/style.scss');

let store = createStore(
    combinedReducers,
    applyMiddleware(
        thunkMiddleware
    )
)

function checkSession(nextState, replace, callback) {
    verifyToken(callback, () => { 
        replace({pathname: '/login'}) 
        callback()
    })
}

browserHistory.listen(function (location) {
    const path = (/#(\/.*)$/.exec(location.hash) || [])[1];
    if (path) browserHistory.replace(path);
});


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
           <Router history={browserHistory} >
               <Route path="/" component={App} >
                   <IndexRoute component={SearchPage} />
                   <Route path="resolve" component={Resolution} onEnter={checkSession} />
                   <Route path="login" component={LoginPage} />
               </Route>
           </Router>
       </Provider>, 
       document.getElementById('content'));

