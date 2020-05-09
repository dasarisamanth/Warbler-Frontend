import React from 'react';
import profile from '../images/profile.png';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

const MessageItem = ({ date, username, profileImageUrl, text ,remove,isCorrectUser}) => {

    return (
      
        <div >
            <li className="list-group-item mb-2">
            
                <img src={profileImageUrl || profile} alt={username} className="profile-image" width="45rem" height="45rem" />
                <div className="message-area">
                    <Link to='/'>@{username} &nbsp; </Link>
                    <span className="text-muted">
                        <Moment className="text-muted" format="Do MMM YYYY">
                            {date}

                        </Moment>
                    </span>
                    <p>{text}</p>
                </div>
            </li>
            {isCorrectUser && (
             <button height="1rem" width="2rem" className="btn btn-info mb-2" onClick={remove}>delete</button>
            )}
            
        </div>
    )
}

export default MessageItem;