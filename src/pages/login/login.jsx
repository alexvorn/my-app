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
            <div className='login-page container'>
                <div>
                    <img src={"./image/Backpack2@2x.svg"}/>
                </div>
                <div>
                    <img />
                    <h1>Sign Up</h1>
                    <div className='registration-form'>
                        <form action="">
                            <span>Your email</span>
                            <input type="text" placeholder="Email"/>
                            <input type="password" placeholder="Create your password"/>
                            <input type="password" placeholder="Confirm your password"/>
                            <input  className="btn-sing-up" type="submit" value="Sing up" />
                        </form>
                    </div>
                </div>
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