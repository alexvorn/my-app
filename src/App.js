import React, { Component } from 'react';
import MainRouter from './router/MainRouter';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div>
                <MainRouter />
            </div>
        )
    }
}
