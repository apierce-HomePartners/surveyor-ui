import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';

class Surveyor extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Header></Header>
                <div className="container">
                    <Content></Content>
                </div>
            </div>
        );
    }
}

export default Surveyor;
