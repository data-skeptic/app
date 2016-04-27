import React from 'react'

export default class FeatureList extends React.Component {
    render() {
        var items = []
        
        if (this.props.features) {
            this.props.features.forEach((f) => {
                items.push(<li key={f.key}>{f.category} - {f.tag}</li>)
            })
        }

        return (
            <ul>
                {items}
            </ul>)
    }
}
