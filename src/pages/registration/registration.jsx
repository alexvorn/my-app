import React, { Component } from 'react';
import Image from '../../components/imageRobot';
import AuthForm from '../../components/authForm';
import { connect } from 'react-redux';

class registration extends Component {
    render() {
        return (
            <div className='login-page container'>
                <Image />
                <div>
                    <img src={require('../../images/logo.png')}/>
                    <h1>Sing up</h1>
                    <AuthForm />
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
    }),
)(registration);