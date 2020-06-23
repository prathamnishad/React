import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Divider } from 'material-ui';
import { Form, Button, Label, Input, FormGroup } from 'reactstrap';
const span = {
    width: "400px",
    margin: "auto"
}
export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
        const { values, handleChange } = this.props;
        return (
            <div style={span}>
                <h1 className="text-center">Second Page</h1>
                <Form>
                    <FormGroup>
                        <Label for="college">College</Label>
                        <Input type="text" id="college" placeholder="College Name" onChange={handleChange("college")} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Experience</Label>
                        <Input type="text" placeholder="Total Experience" onChange={handleChange("experience")} />
                    </FormGroup>
                    <Button className=" btn btn-dark" onClick={this.continue}>Continue</Button>
                    <span style={span}>____</span>
                    <Button className=" btn btn-light" onClick={this.back}>Back</Button>
                </Form>
            </div>
        )
    }
}

export default FormPersonalDetails
