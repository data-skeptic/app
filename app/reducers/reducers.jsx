import { combineReducers } from 'redux'
import { START_SEARCH, END_SEARCH, START_LOGIN, END_LOGIN } from '../actions/actions'

let initialSearchState = {
    searching: false,
    results: []
}

let initialLoginState = {
    loggedIn: false,
    loggedInUser: {},
    loggingIn: false
}

function loginReducer(state = initialLoginState, action) {
    switch (action.type) {
        case START_LOGIN: {
            return {
                ...state,
                isLoggingIn: true,
                loggedInUser: {}
            }
        }
        case END_LOGIN: {
            return {
                ...state,
                isLoggedIn: true,
            }
        }
        default: {
            return state
        }
    }
}

function searchReducer(state = initialSearchState, action) {
    switch (action.type) {
        case START_SEARCH: {
            return {
                ...state,
                searching: true
            }
        }
        case END_SEARCH: {
            return {
                ...state,
                searching: false,
                results: action.data
            }
        }
        default: {
            return state
        }
    }
}

const combinedReducers = combineReducers({
    search: searchReducer,
    login: loginReducer
})

export default combinedReducers

