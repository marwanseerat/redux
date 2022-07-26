import {GET_ADMIN, ADMIN_ERROR,GET_USERS, USERS_ERROR} from './types'
import axios from 'axios';

export const login=(email,password)=> async dispatch => {

    try{
        const res = await axios.get('http://localhost/redux/redux-app-api/backend/login.php?email='+email+'&password='+password);
        dispatch( {
            type: GET_ADMIN,
            payload: res.data
        })

    }
    catch(e){
        dispatch( {
            type: ADMIN_ERROR,
            payload: console.log(e),
        })
    }
}

// export const getData=()=> async dispatch => {

//     try{
//         const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=cd50b668108ab0e7d74f4585d5c05b53');
//         dispatch( {
//             type: GET_DATA,
//             payload: res.data.results
//         })

//     }
//     catch(e){
//         dispatch( {
//             type: DATA_ERROR,
//             payload: console.log(e),
//         })
//     }
// }
export const getUsers = () => async dispatch => {

    try{
        const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=873369e50b6f43d293bb616d35e53a1c
        `)
        dispatch( {
            type: GET_USERS,
            payload: res.data.articles
        })
    }
    catch(e){
        dispatch( {
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

}