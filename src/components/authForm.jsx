import React, { Component } from 'react';

export default class authForm extends Component {
    render() {
        return (
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
        )
    }
}
