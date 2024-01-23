import React, { Component } from 'react';
import Button from "../../ui/Button";

 
export class SignupForm extends Component {

     onChangeForm = () => {
        console.log("onChangeForm called");
        this.props.onChangeShowForm();   
     }
    
render() {
    return (
        <>
            <Button
                variation="secondary"
                type="reset"
                onClick={this.onChangeForm}
            >
                Cancel
            </Button> 
        </>
    )
}
}

export default SignupForm;