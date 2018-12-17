import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class QueryInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
        };
    }

    handleChange = event => {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <FormGroup controlId="queryInputField">
                <ControlLabel>Query</ControlLabel>
                <FormControl value={this.state.value} onChange={this.handleChange} type="text" placeholder="Enter graphql query" />
                {/* set this when there isn't a valid query? */}
                {/* {help && <HelpBlock>{help}</HelpBlock>} */}
            </FormGroup>
        );
    }
}

export default QueryInput;
