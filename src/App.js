import React, { Component } from 'react';
import MainRouter from './router/MainRouter';
import './App.css';
import { getUsers as usersAction} from './actions/getUsers';
import { connect } from 'react-redux';


class App extends Component {
    render() {
        this.props.userIsLoggedIn();
        return (
            <div>
                <MainRouter />
            </div>
        )
    };
};

export default connect(
    state => ({
        user: state.login
    }),
    dispatch => ({
        userIsLoggedIn: () => { 
            dispatch(usersAction())
        },
    }),
)(App);
