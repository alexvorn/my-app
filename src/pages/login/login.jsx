import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login as loginAction } from '../../actions/login';
import Image from '../../components/imageRobot';
import AuthForm from '../../components/authForm';

class Login extends Component {

    loginUser = (user) => {
        this.props.loginUser(user);
    }
    

    render() {
        return (
            <div className='login-page'>
                <Image />
                <div>
                    <img src={require('../../images/logo.png')}/>
                    <h1>Login</h1>
                    <AuthForm onSubmite={this.loginUser}/>
                </div>
            </div>
        )
    }
}

export default connect(
    state => {
        console.log(state)
        return {user: state.login}
    },
    dispatch => ({
        loginUser: user => {
            dispatch(loginAction(user))
        }
    }),
)(Login);