import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Form, Button, Label, Input, FormGroup } from 'reactstrap';
const span = {
    width: "400px",
    margin: "auto"
}
export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <div style={span}>
                <h1 className="text-center">First Page</h1>
                <Form>
                    <FormGroup>
                        <Label>First Name</Label>
                        <Input type="text" placeholder="First Name" onChange={handleChange("fname")} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lname">Last Name</Label>
                        <Input type="text" id="lname" placeholder="Last Name" onChange={handleChange("lname")} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="text" id="email" placeholder="Email" onChange={handleChange("email")} />
                    </FormGroup>
                    <Button className=" btn btn-dark" onClick={this.continue}>Continue</Button>
                </Form>
            </div>
        )
    }
}

export default FormUserDetails
