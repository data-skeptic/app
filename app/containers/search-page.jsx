import React from 'react'
import { connect } from 'react-redux'
import { propertySearch } from '../actions/actions'

import App from '../components/app'

const mapStateToProps = (state) => {
    return state.search
}

const mapDispatchToProps = (dispatch) => {
    return {
        search: (term) => {
            dispatch(propertySearch(term))
        }
    }
}

const SearchPage = connect(
    mapStateToProps,
    mapDispatchToProps)(App)

export default SearchPage
