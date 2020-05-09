import React from 'react';
import Message from '../containers/Message';
import UserAside from '../components/UserAside';

const MessageTimeline = props=>{
    const { profileImageUrl, username} = props;
    return(
        <div className="row">
            <UserAside
            profileImageUrl={profileImageUrl}
            username={username}
            />
            <Message/>
        </div>
    )
}


export default MessageTimeline;