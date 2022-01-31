import { combineReducers } from "redux";
import auth from './auth';
import registration from './registrationFormActive';


export default combineReducers({
    auth,
    registration
});
