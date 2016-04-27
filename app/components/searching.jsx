import React from 'react'
import HomeList from './home-list'
import SearchBar from './search'

export default class Search extends React.Component {
    render() {
        return (
            <div className="app">
                <SearchBar search={this.props.search} />
                <HomeList homes={this.props.results} />
            </div>)
    }
}

