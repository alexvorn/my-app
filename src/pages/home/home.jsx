import React, { Component } from 'react';
import { connect } from "react-redux";
import { logout as logoutAction } from '../../actions/logout';

class Home extends Component {

    render() {
        const { user } = this.props;
        const email = user?.email;

        return (
            <div>
                <span>{email}</span>
                <button onClick={this.props.logoutUser}>Logout</button>
                <h1>Home</h1>
            </div>
        )
    }
}

export default connect(
    state => {
        console.log(state)
       return { user: state.auth.user}
    },
    dispatch => ({
        logoutUser: () => {
            dispatch(logoutAction())
        },
    }),
)(Home);
