import React from 'react'
import ResolutionDetails from './resolution-details'
import ResolutionPanel from './resolution-panel'
import ResolutionInputPanel from './resolution-input-panel'
import ResolutionActions from './resolution-actions'

export default class Resolution extends React.Component {
    render() {
        return (
            <div className="resolution row">
                <ResolutionDetails />
                <div className="items">
                    <ResolutionPanel />
                    <ResolutionPanel />
                    <ResolutionInputPanel />
                </div>
                <ResolutionActions />
            </div>)
    }
}
