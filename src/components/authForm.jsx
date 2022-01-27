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

  onInput = (e) => {
    const email = e.target.name === 'email' ? e.target.value : this.state.email;
    const password = e.target.name === 'password' ? e.target.value : this.state.password;
    const confirmPassword = e.target.name === 'Confirm password' ? e.target.value : this.state.confirmPassword;
    this.setState({email, password, confirmPassword});

  }

  validPassword = () => {
    if (this.state.password === this.state.confirmPassword) {
      if (this.state.confirmPassword === '') {
        return false;
      }
      return true;
    }
    this.setState({error: 'passwords don`t match'});
    return false;
  }

  validEmail = () => {
    const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    const { email } = this.state;
    const valid = re.test(String(email).toLowerCase());
    if (!valid) {
      this.setState({error: 'email is not valid'});
    }
    
    return valid; 
  }

  isValidation = () => this.validEmail && this.validPassword;

  onSubmit = () => {
    if (this.isValidation()) {
      const user = {
        email: this.state.email,
        password: this.state.password,
      };

      this.props.onSubmite(user);
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
            <input type="text" placeholder="Email" name="email" onInput={this.onInput} onBlur={this.validEmail}/>
            <input type="password" placeholder="Your password" name="password" onInput={this.onInput} />
            {registration && (
              <input type="password" placeholder="Confirm password" name="Confirm password"  onInput={this.onInput} onBlur={this.validPassword}/>
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
  }
}
