import React, { Fragment } from 'react';
import './UserInfo.css';

class UserInfo extends React.Component{
    
    render(){
        const user = this.props.user;
        return(
            <Fragment>
                <div className="User">
                    <img className="User-image" src={user.picture} alt="user"/>
                    <h3 className="User-name" >{user.name}</h3>
                    <p className="User-email" >{user.email}</p>
                    <p className="User-roll" >{user.rol}</p>
                    <hr className="User-divider" />
                </div>
            </Fragment>
        )
    }
}


export default UserInfo;