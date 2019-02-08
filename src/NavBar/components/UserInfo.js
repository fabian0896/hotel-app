import React from 'react';
import './UserInfo.css';
import userImage from '../../assets/user-image.png';

class UserInfo extends React.Component{
    render(){
        return(
            <div className="User">
                <img className="User-image" src={userImage} alt="user"/>
                <h3 className="User-name" >Silvio Fabian Dueñas</h3>
                <p className="User-email" >Fabian0896@outlook.com</p>
                <p className="User-roll" >Administrador</p>
                <hr className="User-divider" />
            </div>
        )
    }
}


export default UserInfo;