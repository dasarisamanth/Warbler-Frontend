import {LOAD_MESSAGES , REMOVE_MESSAGES } from '../actionTypes';
import {apiCall} from '../../services/api';
import { addError } from './error';

function loadMessages(messages){
    return{
        type:LOAD_MESSAGES,
        messages
    }
}
function removeMessage(id){
    return{
        type:REMOVE_MESSAGES,
        id
    }
}

export function fetchMessages(){

    return dispatch=>{
        return apiCall('get','http://localhost:3001/api/messages').then(res=>{
            console.log(res)
            dispatch(loadMessages(res))
        })
        .catch(err=>{
            dispatch(addError(err.message))
        })
    }

}

 export function postMessage( text){
     return (dispatch , getState)=>{
         let {currentUser} = getState();
         const id= currentUser.user.id

         return apiCall('post', `http://localhost:3001/api/user/${id}/message`,{text})
         .then(res=>{})
         .catch(err=>{
             dispatch(addError(err.message))
         })
     }
 }

 export function deleteMessage(u_id , m_id){
     return dispatch=>{
         return apiCall('delete' ,`http://localhost:3001/api/user/${u_id}/message/${m_id}`)
         .then(()=>{
             dispatch(removeMessage(m_id))
         })
         .catch(err=>{
             dispatch(addError(err.message))
         })

     }
 }