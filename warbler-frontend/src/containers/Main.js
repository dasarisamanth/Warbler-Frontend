import React from 'react';
import { connect} from 'react-redux'
import { Switch , Route , withRouter } from 'react-router-dom'
import Homepage from '../components/homepage';
import  AuthForm from '../components/AuthForm'
import { authUser } from '../store/actions/auth';
import {removeError} from '../store/actions/error';
import withAuth from '../hocs/withAuth';
import MessageForm from '../containers/MessageForm';


const Main =props=> {
    
     const{ authUser , error,removeError,currentUser } = props;
        return ( 
            <div className="container">
                <Switch>
                    <Route exact path='/' render={(props)=><Homepage currentUser={currentUser}{...props}/>}/>
                    <Route exact path='/signin' render={props=>
                    <AuthForm
                    removeError={removeError}
                    error={error}
                    onAuth={authUser}
                    buttonText={"Sign In"}
                    heading={"Welcome Back"}
                    {...props}
                    />
                    }/>
                    <Route exact path='/signup' render={props=>
                    <AuthForm
                    removeError={removeError}
                    error={error}
                    signUp
                    onAuth={authUser}
                    buttonText={"Sign Me Up"}
                    heading={"Welcome To Tutter"}
                    {...props}
                    />
                    }/>
                    <Route exact path='/user/:id/message/new'
                    component={withAuth(MessageForm)}
                  
                    />

                </Switch>

            </div>

         );
    }

 const mapStateToProps=(state)=>{
     return{
        currentUser:state.currentUser,
        error: state.error

     }
 }
export default  withRouter(connect(mapStateToProps,{authUser , removeError})(Main))