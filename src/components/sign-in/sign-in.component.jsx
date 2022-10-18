import React from "react";

import './sign-in.styles.scss'
import FormInput from "../form-input/form-input.component";

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '', 
            password: ''
        }
    }

    handleSubmit = event =>{
        event.preventDefault(); 
        this.setState({email: '', password: ''})
    }

    handleChange = event =>{
        const {value, name} = event.target; 
        console.log(event.target);
        // console.log(value+ " " + name);
        this.setState({[name]: value});
    }

    render(){
        return (
            <div className="sign-in">
                <h2>I ALREADY HAVE AN ACCOUNT</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit = {this.handleSubmit}>

                    <FormInput
                    name = 'email' 
                    type = 'email' 
                    value = {this.state.email} 
                    label =  'email'
                    required
                    handleChange={this.handleChange}
                    />

                    <FormInput 
                    name = 'password' 
                    type = 'password' 
                    label =  'password'
                    value = {this.state.email} 
                    handleChange={this.handleChange}
                    required
                    />

                    <input type = 'submit' value = 'Submit Form'></input>
                </form>

            </div>
        )
    }

}

export default SignIn;