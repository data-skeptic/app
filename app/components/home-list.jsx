import React from 'react'
import HomeItem from './home-item'

export default class HomeList extends React.Component {
    render() {
        var items = [];
        if (this.props.homes) {
            this.props.homes.forEach((h) => {
                items.push(<HomeItem key={h.id} home={h} />);
            });
        }
        return (<div className="home-list">
                    {items}
                </div>)

        }
}
