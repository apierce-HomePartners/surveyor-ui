import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

class Response extends Component {
    displayResponse() {
        return (
            <FormGroup controlId="responseTextarea">
                <ControlLabel>Response</ControlLabel>
                <FormControl rows="15"
                    componentClass="textarea"
                    placeholder="N/A"
                    readOnly
                    value={this.props.value}
                    style={{ resize: 'none' }} />
            </FormGroup>
        )
    }

    render() {
        return (
            <div>
                {this.props.value ? this.displayResponse() : <div id="no-query-sent">Please send a query</div>}
            </div>
        )
    }
}

export default Response;
