import React from 'react'
import FeatureList from './feature-list.jsx'

export default class ResolutionPanel extends React.Component {
    render() {
        return (<div className="col-md-4">
                    <p>id: {this.props.home.id}</p>
                    <p>upload time: {this.props.home.upload_timestamp}</p>
                    <p>listing time: {this.props.home.listing_timestamp}</p>
                    <p>listing type: {this.props.home.listing_type}</p>
                    <p>price: {this.props.home.price}</p>
                    <p>bedrooms: {this.props.home.bedrooms}</p>
                    <p>bathrooms: {this.props.home.bathrooms}</p>
                    <p>car spaces: {this.props.home.car_spaces}</p>
                    <p>building size: {this.props.home.building_size}</p>
                    <p>land size: {this.props.home.land_size}</p>
                    <p>size units: {this.props.home.size_units}</p>
                    <p>raw address: {this.props.home.raw_address}</p>
                    <p>geocoded address: {this.props.home.geocoded_address}</p>
                    <p>submitter: {this.props.home.submitter}</p>
                    <p>features: </p>
                    <FeatureList features={this.props.home.features} />
                </div>)
    }
}

