import React, { Component } from 'react';

export default class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      confirmPassword: '',
    };

    this.getPassword = this.getPassword.bind(this);
    this.getEmail = this.getEmail.bind(this);
    this.confirmPassword = this.confirmPassword.bind(this);
    this.isValidationPassword = this.isValidationPassword.bind(this);
  }

    getPassword(e) {
      const password = e.target.value;
      this.setState({password});
    }

    getEmail(e) {
      const email = e.target.value;
      this.setState({email});
    }
    confirmPassword(e) {
      const error = '';
      const confirmPassword = e.target.value;
      this.setState({confirmPassword, error});
    }

    isValidationPassword() {
      this.state.password === this.state.confirmPassword ? this.setState({}) : this.setState({error: 'passwords don`t match'})
    }


    render() {
      const { registration } = this.props;
      const user = {
        email: this.state.email,
        password: this.state.password,
      };


      this.props.loginUser(user)
      console.log(this.state.password)

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
                <input type="password" placeholder="Confirm password"  onInput={this.confirmPassword} onBlur={() => this.isValidationPassword()}/>
              )}
              <p>{this.state.error}</p>
              {!registration && (
                <a href="">Forgot password?</a>
              )}
              <input
                className="btn-login-up"
                type="submit"
                value={registration ? 'Sing up' : 'Login'}
                onClick={this.state.error === '' ? this.loginUser : ''}
              />
            </div>
          </div>
          {link}
        </div>
      );
    }
  }