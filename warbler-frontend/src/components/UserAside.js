import React from 'react';
import profile from '../images/profile.png'

const UserAside =({profileImageUrl, username})=>{
    return(
        <aside className="col-sm-2">
            <div className=".panel panel-default">
                <div className="panel-body">
                 <img src={ profileImageUrl || profile} alt={username} className="img-thumbnail"/>
                 @{username}
                </div>

            </div>

        </aside>
    )
}
export default UserAside;