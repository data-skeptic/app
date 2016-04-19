import { combineReducers } from 'redux'
import { START_SEARCH, END_SEARCH } from '../actions/actions'

let initialSearchState = {
    searching: false,
    results: []
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
    search: searchReducer
})

export default combinedReducers

