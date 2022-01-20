import React, { Component } from 'react';
import Image from '../../components/imageRobot';
import AuthForm from '../../components/authForm';
import { login as loginAction } from '../../actions/login';
import { connect } from 'react-redux';

class Registration extends Component {

    loginUser = () => {
        const user = {
            email: 'dasdsa',
            password: 'dsadsa',
        }
        console.log(user)

        this.props.loginUser(user);
    }

    render() {
        const registrationActive = true;
        return (
            <div className='login-page'>
                <Image />
                <div>
                    <img src={require('../../images/logo.png')}/>
                    <h1>Sing up</h1>
                    <AuthForm registration={registrationActive} loginUser={this.props.loginUser}/>
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
)(Registration);