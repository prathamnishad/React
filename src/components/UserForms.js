import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import Confirm from './Confirm';
import FormPersonalDetails from './FormPersonalDetails';

export class UserForms extends Component {
    state = {
        step: 1,
        fname: "",
        lname: "",
        email: "",
        college: "",
        exp: "",
    }
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }
    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }
    render() {
        const { step } = this.state;
        const { fname, lname, email, college, exp } = this.state;
        const values = { fname, lname, email, college, exp };

        switch (step) {
            case 1:
                return (
                    <FormUserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <FormPersonalDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );
            default:
                return <h1>Why are we living</h1>
        }
    }
}

export default UserForms
