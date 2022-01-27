import React, { Component } from 'react';
import MainRouter from './router/MainRouter';
import './App.css';
import { users as usersAction} from './actions/users';
import { connect } from 'react-redux';


class App extends Component {
    render() {
        return (
            <div>
                <MainRouter />
            </div>
        )
    }
}

export default connect(
    state => ({
        user: state.login
    }),
    dispatch => ({
        user: dispatch(usersAction()),
    } 
    ),
)(App);
