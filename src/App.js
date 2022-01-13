import React, { Component } from "react";
import Login from "./page/login";
import Home from "./page/home";
import { connect } from "react-redux";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
    }
  }

 
  render() {
    console.log(this.props.user)
    return (
      <div>
        <BrowserRouter>
          <Link to="/login">Login</Link>
          <Link to="/home">Home</Link>
          <Routes>
            <Route path="/login" element={<Login />} />
            {/* {this.props.user } */}
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </BrowserRouter>
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
)(App);
