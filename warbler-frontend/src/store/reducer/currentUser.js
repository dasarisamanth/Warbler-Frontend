import { SETCURRENT_USER } from '../actionTypes';

const initialState={
    isAuthenticated:false,
    user:{}
}


export default (state=initialState, action)=>{
    switch(action.type){
        case SETCURRENT_USER:{

            return{
                isAuthenticated:Object.keys(action.user).length>0,
                user:action.user

            }
        }

       default:{
           return  state;
       }
    }
    
}