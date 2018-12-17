import React, { Component } from 'react';
import { Popover, NavItem, OverlayTrigger, Row, Grid } from 'react-bootstrap';

class Help extends Component {
    styles = {
        row: {
            marginLeft: '5px',
            marginRight: '1px',
        },
        exampleRow: {
            margin: '5px',
        },
        helpPopover: {
            maxWidth: '800px',
        },
        smallNoteText: {
            paddingLeft: '2px',
            color: '#a2a9b1'
        }
    }

    render() {
        const helpPopover = (
            <Popover id="popover-positioned-right" title="How to query" style={this.styles.helpPopover}>
                <Grid fluid>
                    <Row style={this.styles.row}>
                        Surveyor supports two types of queries: areas and geocode. Below are some examples:
                    </Row>
                    <Row style={this.styles.exampleRow}>
                        <code>areas(type: "high_school", mx_id: "OH-JAMESA-13064-OH-PB58515") {'{'} id shapes details {'}'}</code>
                    </Row>
                    <Row style={this.styles.exampleRow}>
                        <code>areas(type: "census_tract", address: "STATE ROUTE 88, GARRETTSVILLE") {'{'} id details {'}'}</code>
                    </Row>
                    <Row style={this.styles.exampleRow}>
                        <code>geocode(type: "geocode", address: "STATE ROUTE 88, GARRETTSVILLE") {'{'} coordinates {'}'}</code>
                    </Row>
                    <Row style={this.styles.exampleRow}>
                        <div>
                            <code>geocode(type: "reverse", coordinates: "-87.623177 41.881832") {'{'} address {'}'}</code>
                            <br></br>
                            <small style={this.styles.smallNoteText}>NOTE: <b>input coordinates</b> (this does not hold for output coordinates) should be of form "{'{'}lng{'}'} {'{'}lat{'}'}"</small>
                        </div>
                    </Row>
                    <Row style={this.styles.row}>
                        Areas requests can return up to three types of data: <b>id, shapes, and details.</b>
                    </Row>
                    <Row style={this.styles.row}>
                        Geocode requests can return up to two types of data: <b>coordinates and address.</b>
                    </Row>
                </Grid>
            </Popover>
        );

        return (
            <OverlayTrigger trigger="click" placement="right" overlay={helpPopover}>
                <NavItem eventKey={1} href="#">
                    Help
                </NavItem>
            </OverlayTrigger>
        );
    }
}

export default Help;
