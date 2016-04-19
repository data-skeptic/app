import React from 'react'

export default class HomeItem extends React.Component {
    render() {
        return (<div className="home-item">
                    <p>{this.props.home.geocoded_address}</p>
                    <p>Price: {this.props.home.price}</p>
                </div>)
    }
}
