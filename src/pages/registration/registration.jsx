import React, { Component } from 'react';
import Image from '../../components/imageRobot';
import AuthForm from '../../components/authForm';
import { registration as registrationAction } from '../../actions/auth';
import { connect } from 'react-redux';

class Registration extends Component {
    render() {
        return (
            <div className='login-page'>
                <Image />
                <div>
                    <img src={require('../../images/logo.png')}/>
                    <h1>Sing up</h1>
                    <AuthForm registration onSubmit={this.props.userRegistration} error={this.props.error}/>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        error: state.auth.error
    }),
    dispatch => ({
        userRegistration: user => {
            dispatch(registrationAction(user))
        }
    }),
)(Registration);
