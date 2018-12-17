import React, { Component } from 'react';
import Response from './Response';

class ResponseSection extends Component {
    render() {
        return (
            <div>
                <Response value={this.props.response}></Response>
            </div>
        );
    }
}

export default ResponseSection;
