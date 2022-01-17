import React, { Component } from 'react';
import { connect } from 'react-redux';
import {login as loginAction } from '../../actions/login';

class Login extends Component {

    loginUser = () => {
        const user = {
            email: 'andrejstarusev@gmail.com',
            id: '1',
        }
        console.log('email', this.emailInput.value, 'password', this.createPassword.value)

        this.props.loginUser(user);
    }

    render() {
        return (
            <div className='login-page container'>
                <div>
                    <img src={require('../../images/robot.png')} alt="#"/>
                </div>
                <div>
                    <img src={require('../../images/logo.png')}/>
                    <h1>Sign Up</h1>
                    <div className='registration-form'>
                        <div>
                            <form action="">
                                <span>Your email</span>
                                <input type="text" placeholder="Email" ref={(input) => { this.emailInput = input}}/>
                                <input type="password" placeholder="Create your password" ref={(input) => { this.createPassword = input}}/>
                                <input type="password" placeholder="Confirm your password" ref={(input) => { this.confirmPassword = input}}/>
                                <input  className="btn-sing-up" type="submit" value="Sing up" onClick={this.loginUser}/>
                            </form>
                        </div>
                        <p>Already have an account? <a>Log In now</a></p>
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