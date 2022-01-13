import React, { Component } from 'react';
import { connect } from "react-redux";

class home extends Component {
    render() {
        const { user } = this.props;
        const email = user?.email;

        return (
            <div>
                <span>{email}</span>
                <h1>Home</h1>
            </div>
        )
    }
}

export default connect(
    state => ({
        user: state.auth.user
    })
)(home);
