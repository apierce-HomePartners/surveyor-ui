import React, { Component } from 'react';
import QueryInput from './QueryInput';
import { Button } from 'react-bootstrap';

class QuerySection extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.onQuerySubmit}>
                    <QueryInput></QueryInput>
                    <Button type="submit" bsStyle="primary">Submit</Button>
                </form>
            </div>
        );
    }
}

export default QuerySection;
