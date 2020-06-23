import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import { ListGroup, ListGroupItem, Button, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
const span = {
    width: "400px",
    margin: "auto"
}
export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        //form processing
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values: { fname, lname, email, college, exp } } = this.props;
        return (
            <div style={span}>
                <h1 className="text-center">Third Page</h1>
                <ul className="list-group">
                    <li className="list-group-item">First Name - {fname}</li>
                    <li className="list-group-item">Last Name - {lname}</li>
                    <li className="list-group-item">Email - {email}</li>
                    <li className="list-group-item">College - {college}</li>
                    <li className="list-group-item">Experience - {exp}</li>
                </ul>


                <Button className=" btn btn-dark" onClick={this.continue}>Continue</Button>
                <span>____</span>
                <Button className=" btn btn-light" onClick={this.back}>Back</Button>
            </div>
        )
    }
}

export default Confirm