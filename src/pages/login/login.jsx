import React, { Component } from 'react';
import { connect } from "react-redux";
import {login as loginAction } from '../../actions/login';

class Login extends Component {

    loginUser = () => {
        const user = {
            email: 'andrejstarusev@gmail.com',
            id: '1',
        }

        this.props.loginUser(user);
    }

    render() {
        return (
            <div>
                <button onClick={this.loginUser}>Login</button>
            </div>
        )
    }
}

export default connect(
    state => ({
        user: state.login
    }),
    dispatch => ({
        loginUser: user => {
            dispatch(loginAction(user))
        }
    }),
)(Login);