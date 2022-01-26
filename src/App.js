import React, { Component } from 'react';
import MainRouter from './router/MainRouter';
import './App.css';
import axios from 'axios';

axios.get('https://devback.anetaed.org:3000/users', {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        })
        .then(res => {
            console.log('status', res);
        })

export default class App extends Component {
    render() {
        return (
            <div>
                <MainRouter />
            </div>
        )
    }
}
