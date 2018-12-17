import React, { Component } from 'react';
import QuerySection from './QuerySection';
import ResponseSection from './ResponseSection';
import { Query } from "react-apollo";
import gql from "graphql-tag";

class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            responseExists: false,
            response: '',
            query: '',
        };
    }

    handleQuerySubmit = event => {
        let query = event.target[0].value;
        this.setState({ query: query });
        event.preventDefault();
    }

    sendQuery = query => {
        return (
            <Query query={gql`{${query}}`}>
                {this.renderResponse}
            </Query>
        );
    }

    renderResponse = ({ loading, error, data }) => {
        let response = "";
        if (loading) response = "Loading...";
        else if (error) response = "There was an error. Check query format. Click 'Help' for more information.";
        else {
            response = JSON.stringify(data);
        }
        return (<ResponseSection response={response}></ResponseSection>);
    }

    render() {
        return (
            <div>
                <QuerySection onQuerySubmit={this.handleQuerySubmit}></QuerySection>
                <hr></hr>
                {this.state.query ? this.sendQuery(this.state.query) : (<div></div>)}
            </div>
        );
    }
}

export default Content;
