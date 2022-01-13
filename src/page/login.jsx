import React, { Component } from 'react';
import { connect } from "react-redux";

class Login extends Component {

    loginUser() {
        const user = {
            email: '',
            id: '',
        }
        this.props.loginUser(user);
        console.log('login', this.props.user)
    }

    render() {
        // console.log(this.props.loginUser)
        return (
            <div>
                {/* <input type="text" ref={(input) => {this.usersEmail = input}} />
                <input type="text" ref={(input) => {this.usersId = input}} /> */}
                <button onClick={this.loginUser.bind(this)}>Login</button>
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
            dispatch({
                type: 'user', user: user
            })
        }
    }),
)(Login);