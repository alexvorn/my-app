import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login as loginAction } from '../../actions/auth';
import Image from '../../components/imageRobot';
import AuthForm from '../../components/authForm';

class Login extends Component {
    onSubmit = (user) => {
        this.props.loginUser(user);
    }

    render() {
        return (
            <div className='login-page'>
                <Image />
                <div>
                    <img src={require('../../images/logo.png')}/>
                    <h1>Login</h1>
                    <AuthForm onSubmit={this.onSubmit} error={this.props.error}/>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        error: state.auth.error
    }),
    dispatch => ({
        loginUser: (user) => {
            dispatch(loginAction(user))
        }
    }),
)(Login);
