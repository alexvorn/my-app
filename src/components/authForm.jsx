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
  }

  getPassword = (e) => {
    const password = e.target.value;
    this.setState({password});
  }

  getEmail = (e) => {
    const error = '';
    const email = e.target.value;
    this.isValidationEmail(email)
    this.setState({email, error});
  }
  confirmPassword = (e) => {
    const error = '';
    const confirmPassword = e.target.value;
    this.setState({confirmPassword, error});
  }

  isValidationPassword = () => {
    if (this.state.password === this.state.confirmPassword) {
      return true
    }
    this.setState({error: 'passwords don`t match'})
    return false
  }

  isValidationEmail = () => {
    const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    const email = this.state.email;
    const validateEmail = re.test(String(email).toLowerCase());
    if (validateEmail) {
      return true
    }
    this.setState({error: 'email is not valid'})
    return false 
  }

  isValidation = () => {
    const validEmail = this.isValidationEmail();
    const validPassword = this.isValidationPassword();
    console.log('email', validEmail, 'password', validPassword)

    if (validEmail || validPassword === true) {
      return true
    }
    return false
  }

  onSubmite = () => {
    if (this.isValidation()) {
      const user = {
        email: this.state.email,
        password: this.state.password,
      };

      this.props.onSubmite(user)
    }
  }


  render() {
    const { registration } = this.props;
    const link = registration
      ? <p>Already have an account? <a>Log In now</a></p>
      : <p>Not a member? <a>Sign up now</a></p>;

    return (
      <div className="registration-form">
        <div>
          <div className="form">
            <span>Your email</span>
            <input type="text" placeholder="Email" onInput={this.getEmail} onBlur={this.isValidationEmail}/>
            <input type="password" placeholder="Your password" onInput={this.getPassword} />
            {registration && (
              <input type="password" placeholder="Confirm password"  onInput={this.confirmPassword} onBlur={this.isValidation}/>
            )}
            <p>{this.state.error}</p>
            {!registration && (
              <a href="">Forgot password?</a>
            )}
            <input
              className="btn-login-up"
              type="submit"
              value={registration ? 'Sing up' : 'Login'}
              onClick={this.onSubmite}
            />
          </div>
        </div>
        {link}
      </div>
    );
  }
  }