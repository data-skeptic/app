import React from 'react'
import { connect } from 'react-redux'
import { propertySearch } from '../actions/actions'

import Search from '../components/searching'

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
    mapDispatchToProps)(Search)

export default SearchPage
