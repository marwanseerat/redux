import login from "./login";
import fetch from './fetch'
import {combineReducers} from 'redux';


const AllReducers=combineReducers({
    login: login,
    users: fetch
});

export default AllReducers;