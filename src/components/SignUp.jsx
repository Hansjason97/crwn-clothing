import React from "react";

import FormInput from "./FormInput";
import CustomButton from "./CustomButton";

import { auth, createUserProfileDoc} from "../firebase/firebase.utils";
import { createUserWithEmailAndPassword } from "firebase/auth";

class SignUp extends React.Component {

    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword} = this.state;
        if(password != confirmPassword) {
            alert("password don't match");
            return;
        } else {
            try {
                const { user } = await createUserWithEmailAndPassword(auth, email, password);
                
                await createUserProfileDoc(user, { displayName });
                this.setState({
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                })
            } catch (error) {
                console.log(error);
            }
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({[name]: value});
    }

    render() {
        const { displayName, email, password, confirmPassword} = this.state;
        return(
            <div className="signIn">
                <h2>I do not have an account</h2>
                <span className="text-xl font-open text-slate-800">Sign up with your email and password</span>
                <form className="my-10" onSubmit={this.handleSubmit}>
                    <FormInput 
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={this.handleChange}
                    label='Display Name'
                    required />

                    <FormInput 
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    label='Email'
                    required />

                    <FormInput 
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                    label='Password'
                    required />

                    <FormInput 
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label='Confirm Password'
                    required />

                    <CustomButton type='submit'>sign up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;