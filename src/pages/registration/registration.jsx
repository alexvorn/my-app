import React, { Component } from 'react';
import Image from '../../components/imageRobot';
import AuthForm from '../../components/authForm';
import { registration as registrationAction } from '../../actions/registration';
import { connect } from 'react-redux';

class Registration extends Component {
    render() {
        return (
            <div className='login-page'>
                <Image />
                <div>
                    <img src={require('../../images/logo.png')}/>
                    <h1>Sing up</h1>
                    <AuthForm registration onSubmit={this.props.registrationUser}/>
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
        userRegistration: user => {
            dispatch(registrationAction(user))
        }
    }),
)(Registration);
