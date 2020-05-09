import React, { Component } from 'react';
import{Link} from 'react-router-dom';
import MessageTimeline from './MessageTimeline';

class Homepage extends Component {

    render() { 
        const { currentUser } = this.props
      if(!this.props.currentUser.isAuthenticated){
        return ( 
            <div className="container text-center">
            <h2>
                Hey Ssup Fellas
            </h2>
            <h3>New To Tutter?</h3>
            <Link to='/signup' className="btn btn-primary">SignMe Up</Link>

            </div>

         );
        }
        else{
            return(
                <div>
                    <MessageTimeline 
                    profileImageUrl={currentUser.user.profileImageUrl} 
                    username={currentUser.user.username}
                    />
                </div>
            )
        }
    }
}
 
export default Homepage;