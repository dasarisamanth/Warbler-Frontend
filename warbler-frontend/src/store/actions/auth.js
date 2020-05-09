import {apiCall,setToken} from '../../services/api';
import { SETCURRENT_USER} from '../actionTypes';
import {addError , removeError} from '../actions/error';


export function setCurrentUser(user){
    return{
        type:SETCURRENT_USER,
        user
    }
}
export function setTokenHeader(token){
    setToken(token)
}
export function logout(){
    return dispatch=>{
        localStorage.clear("jwtToken")
        setTokenHeader(false);
        dispatch(setCurrentUser({}))
    }
}


export  function authUser(type , userData){
    return dispatch=>{
      return  new Promise((resolve , reject)=>{
            return apiCall("post",`http://localhost:3001/api/auth/${type}`,userData)
            .then(({token , ...user})=>{
                localStorage.setItem("jwtToken",token)
                dispatch(setCurrentUser(user))
                dispatch(removeError())
                setTokenHeader(token)
                resolve();
            })
            
            .catch(err=>{
              //  debugger
                dispatch(addError(err.message))
                reject();
            })
        })
    }
}
