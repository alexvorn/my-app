import { connect } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Header from '../components/header';
import Home from '../pages/home';
import Login from '../pages/login';
import Registration from '../pages/registration';

function MainRouter(props) {
    const defaultRedirect = props.user ? '/home' : '/login';
    return (
        <BrowserRouter>
            <Header user={props.user} />
            <Routes>
                {!props.user && (
                    <>
                        <Route path="/login" element={<Login />} />
                        <Route path="/registration" element={<Registration />} />
                    </>
                )}
                {props.user && (
                    <>
                        <Route path="/home" element={<Home />} />
                    </>
                )}
                <Route path="*" element={<Navigate to={defaultRedirect} />} />
            </Routes>
        </BrowserRouter>
    )
}

function mapStateToProps(state) {
    return {
      user: state.auth.user,
    }
}

function registrationActive(state) {
    return {
        active: state.registrationActive
    }
}


  
export default connect(mapStateToProps, registrationActive)(MainRouter);