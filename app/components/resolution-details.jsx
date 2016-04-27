import React from 'react'

export default class ResolutionDetails extends React.Component {
    render() {
        return (<div className="col-md-12">
            <p>
                flag id: {this.props.id} 
                submitted by: {this.props.submitter}
                conflict type: {this.props.flag_type}
            </p>
        </div>)
    }
}

ResolutionDetails.propTypes = {
    id: React.PropTypes.number,
    submitter: React.PropTypes.number,
    flag_type: React.PropTypes.string
}
