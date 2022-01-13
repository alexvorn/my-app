import React, { Component } from 'react';
import { connect } from "react-redux";

class home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
            </div>
        )
    }
}

export default connect(
    state => ({
        user: state
    }),
    dispatch => ({
    }),
  )(home);
