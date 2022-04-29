import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { authenticate } from "../store/auth";
import { useAppDispatch, useAppSelector, RootState, AppDispatch } from "../store";

interface authProps {
    handleSubmit: (evt: React.FormEvent<HTMLFormElement>) => void;
    name: string;
    displayName: string;
    error: string
}

const Auth: React.FC<authProps> = (props) => {

    const { name, displayName, handleSubmit, error } = props

    let linktoSignup = <div></div>;
    let linktoLogin = <div></div>;
    
    if ( displayName === "Login") {
        linktoSignup = 
            (<div>
                <p>Don't have an account ? </p>
            <Link to="/signup">Sign Up</Link>
            </div>)
    }

    if ( displayName === "signup") {
        linktoLogin = 
            (<div>
                <p>Have an account already ? </p>
            <Link to="/signup">Log in</Link>
            </div>)
    }

    return (
        <div>
            <h1>Auth component</h1>
        </div>
    )
}

const mapLoginToProps = (state: RootState) => {
    return {
      name: 'login',
      displayName: 'Login',
      error: state.authReducer.error
    }
  }

  const mapSignupToProps = (state: RootState) => {
    return {
      name: 'signup',
      displayName: 'Sign Up',
      error: state.authReducer.error
    }
  }

  // please check if not AppDispatch then make it any 
const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        handleSubmit: (evt: React.FormEvent<HTMLFormElement>) => {
            evt.preventDefault();
            const formName = evt.target.name
            const username = evt.target.username.value
            const password = evt.target.password.value
            dispatch(authenticate(username, password, formName));
        }
    }
}

export const Login = connect(mapLoginToProps, mapDispatchToProps)(Auth)
export const Signup = connect(mapSignupToProps, mapDispatchToProps)(Auth)