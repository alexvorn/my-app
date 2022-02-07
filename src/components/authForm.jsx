import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      confirmPassword: '',
    };
  };

  onInput = (e) => {
    const email = e.target.name === 'email' ? e.target.value : this.state.email;
    const password = e.target.name === 'password' ? e.target.value : this.state.password;
    const confirmPassword = e.target.name === 'Confirm password' ? e.target.value : this.state.confirmPassword;
    this.setState({email, password, confirmPassword, error: ''});
  };

  validatePasswordRegistration() {
    const isEmpty = this.state.confirmPassword === '' || this.state.password === '';
    const passMatch = this.state.password === this.state.confirmPassword;

    let error = '';

    if (isEmpty) {
      error = 'Passwords should not be empty';
    }

    if (!passMatch) {
      error = 'Passwords don\'t match';
    }

    this.setState({ error });

    return !isEmpty && passMatch;
  }

  validatePassword = () => {
    const { registration } = this.props;

    if (registration) {
      return this.validatePasswordRegistration();
    }

    const isEmpty = this.state.password !== '';

    if (!isEmpty) {
      this.setState({ error: 'Password should not be empty' });
    }

    return isEmpty;
  };

  validEmail = () => {
    const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    const { email } = this.state;
    const valid = re.test(email.toLowerCase());

    if (!valid) {
      this.setState({ error: 'email is not valid' });
    }

    return valid; 
  };

  isValidation = () => this.validEmail() && this.validatePassword();

  onSubmit = () => {
    if (this.isValidation()) {
      const user = {
        email: this.state.email,
        password: this.state.password,
        userType: 'parent',
      };

      this.props.onSubmit(user);
    }
  };


  render() {
    const { registration } = this.props;
    const link = registration
      ? <p>Already have an account? <Link to="/login">Log In now</Link></p>
      : <p>Not a member? <Link to="/registration">Sign up now</Link></p>;
      

    return (
      <div className="registration-form">
        <div>
          <div className="form">
            <span>Your email</span>
            <input type="text" placeholder="Email" name="email" onInput={this.onInput} onBlur={this.validEmail}/>
            <input type="password" placeholder="Your password" name="password" onInput={this.onInput} />
            {registration && (
              <input type="password" placeholder="Confirm password" name="Confirm password"  onInput={this.onInput} onBlur={this.validatePassword}/>
            )}
            <p>{this.state.error}</p>
            {!registration && (
              <a href="">Forgot password?</a>
            )}
            <input
              className="btn-login-up"
              type="submit"
              value={registration ? 'Sing up' : 'Login'}
              onClick={this.onSubmit}
            />
          </div>
        </div>
        {link}
      </div>
    );
  };
};
