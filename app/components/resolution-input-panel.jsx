import React from 'react'
import FeatureInputList from './feature-input-list'

export default class ResolutionInputPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="col-md-4">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        New Property
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label htmlFor="id">id:</label>
                            <input diabled className="form-control"
                                id="id"
                                value="New Record"
                                readOnly={true} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="upload-time">Upload Time:</label>
                            <input diabled className="form-control"
                                id="upload-time"
                                value="Automatic"
                                readOnly={true} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="listing-timestamp">Listing Timestamp:</label>
                            <input type="datetime-local"
                                id="listing-timestamp"
                                className="form-control"
                                value={this.state.listing_timestamp}
                                onChange={this.listingTimestampChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="listing-type">Listing type:</label>
                            <input type="text"
                                id="listing-type"
                                className="form-control"
                                value={this.state.listing_type}
                                onChange={this.listingTypeChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price:</label>
                            <div className="input-group">
                                <div className="input-group-addon">$</div>
                                <input type="number"
                                    id="price"
                                    className="form-control"
                                    value={this.state.price}
                                    onChange={this.priceChange} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="bedrooms">Bedrooms:</label>
                            <input type="number"
                                id="bedrooms"
                                className="form-control"
                                value={this.state.bedrooms}
                                onChange={this.bedroomsChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="bathrooms">Bathrooms:</label>
                            <input type="number"
                                id="bathrooms"
                                className="form-control"
                                value={this.state.bathrooms}
                                onChange={this.bathroomsChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="car-spaces">Car Spaces:</label>
                            <input type="number"
                                id="car-spaces"
                                className="form-control"
                                value={this.state.car_spaces}
                                onChange={this.carSpacesChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="building-size">Building Size:</label>
                            <input type="number"
                                id="building-size"
                                className="form-control"
                                value={this.state.building_size}
                                onChange={this.buildingSizeChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="land-size">Land Size:</label>
                            <input type="number"
                                id="land-size"
                                className="form-control"
                                value={this.state.land_size}
                                onChange={this.landSizeChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="size-units">Size Units:</label>
                            <input type="text"
                                id="size-units"
                                className="form-control"
                                value={this.state.size_units}
                                onChange={this.sizeUnitsChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="raw-address">Address:</label>
                            <input type="text"
                                id="raw-address"
                                className="form-control"
                                value={this.state.raw_address}
                                onChange={this.rawAddressChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="geocoded-address">Geocoded Address:</label>
                            <input diabled className="form-control"
                                id="geocoded-address" value="Calculated on Upload"
                                readOnly={true} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="submitter">Submitter:</label>
                            <input disabled className="form-control" 
                                id="submitter" value="You"
                                readOnly={true} />
                        </div>
                        <FeatureInputList
                            choices={this.props.choices}
                            changeFunction={this.featuresChange} />
                    </div>
                </div>
            </div>)
    }
}

