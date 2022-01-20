import React, { Component } from 'react';

export default class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
    };
    this.getPassword = this.getPassword.bind(this);
    this.getEmail = this.getEmail.bind(this);
    this.getConfirmPassword = this.getConfirmPassword.bind(this);
  }

    getPassword(e) {
      const password = e.target.value;
      this.setState({password});
    }

    getEmail(e) {
      const email = e.target.value;
      this.setState({email});
    }

    getConfirmPassword(e) {
      const confirmPassword = e.target.value;
      this.setState({confirmPassword});
    }
  

    render() {
      const { registration } = this.props;
      const user = {
        email: this.state.email,
        password: this.state.password,
      };
      this.props.loginUser(user)
      console.log(user)

      const link = registration
        ? <p>Already have an account? <a>Log In now</a></p>
        : <p>Not a member? <a>Sign up now</a></p>;
  
      return (
        <div className="registration-form">
          <div>
            <div className="form">
              <span>Your email</span>
              <input type="text" placeholder="Email" onInput={this.getEmail}/>
              <input type="password" placeholder="Your password" onInput={this.getPassword} />
              {registration && (
                <input type="password" placeholder="Confirm password" onInput={this.getConfirmPassword} onBlur={ (e) => { this.state.password === e.target.value ? user.password = this.state.password : console.log('neverniy parol') }} />
              )}
              {!registration && (
                <a href="">Forgot password?</a>
              )}
              <input
                className="btn-login-up"
                type="submit"
                value={registration ? 'Sing up' : 'Login'}
                onClick={this.loginUser}
              />
            </div>
          </div>
          {link}
        </div>
      );
    }
  }