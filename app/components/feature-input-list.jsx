import React from 'react'

export default class FeatureInputList extends React.Component {
    render() {
        var items = []
        
        if (this.props.features) {
            this.props.features.forEach((f) => {
                items.push(<option value={f.id}>{f.category} - {f.tag}</option>)
            })
        }

        return (
            <div className="form-group">
                <label htmlFor="features">Features:</label>
                <select multiple id="features" className="form-control">
                    {items}
                </select>
            </div>)

    }
}
