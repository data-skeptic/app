import React from 'react'

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {searchTerm: ""};
        this.termUpdate = this.termUpdate.bind(this);
    }

    render() {
        return (
            <div className="search">
                <input type="text"
                    value={this.state.searchTerm} 
                    onChange={this.termUpdate}/>
                <button onClick={() => this.props.search(this.state.searchTerm)}>Search</button>
            </div>)
    }

    termUpdate(input) {
        this.setState({searchTerm: input.target.value});
    }
}
