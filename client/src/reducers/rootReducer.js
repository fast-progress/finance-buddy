import { combineReducers } from "redux";
import globalReducer from './globalReducer';
import postReducer from './postReducer'
import signupReducer from "./signupReducer";
import authReducer from "./authReducer";
import signupFormReducer from './signupFormReducer';
import loginFormReducer from './loginFormReducer';

export default combineReducers({
    global: globalReducer,
    post: postReducer,
    signupModal: signupReducer,
    signupForm: signupFormReducer,
    loginForm: loginFormReducer,
    auth: authReducer,
})