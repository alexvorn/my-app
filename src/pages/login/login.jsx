import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login as loginAction } from '../../actions/login';

class Login extends Component {

    loginUser = () => {
        const user = {
            email: '',
            password: '',
        }
        user.email = this.emailInput.value;
        user.password = this.passwordInput.value;
        console.log(user)

        this.props.loginUser(user);
    }

    render() {
        console.log(this.props)
        return (
            <div className='login-page container'>
                <div>
                    <img src={require('../../images/robot.png')} alt="#"/>
                </div>
                <div>
                    <img src={require('../../images/logo.png')}/>
                    <h1>Login</h1>
                    <div className='registration-form'>
                        <div>
                            <form action="">
                                <span>Your email</span>
                                <input type="text" placeholder="Email" ref={(input) => { this.emailInput = input}}/>
                                <input type="password" placeholder="Your password" ref={(input) => { this.passwordInput = input}}/>
                                <a href="">Forgot password?</a>
                                <input  className="btn-login-up" type="submit" value="Login" onClick={this.loginUser}/>
                            </form>
                        </div>
                        <p>Not a member? <a>Sign up now</a></p>
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