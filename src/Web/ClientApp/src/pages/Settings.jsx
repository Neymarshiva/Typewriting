import React, { Component } from 'react';
import Heading from "../ui/Heading";
import SignupForm from "../features/authentication/SignupForm";
import CreateMachines from '../features/machines/CreateMachines';
import UserDetail from '../features/settings/UserDetail';
export class Settings extends Component {

    constructor(props) {
        super(props);
        this.state = { showForm: false };
        this.setShowFrom = this.setShowFrom.bind(this);
    }


    setShowFrom() {       
        console.log("setShowForm trigger")
        this.setState({
            showForm: !this.state.showForm
        });
    }



    render() {
        return (
            <UserDetail/>
        );
    }
}


