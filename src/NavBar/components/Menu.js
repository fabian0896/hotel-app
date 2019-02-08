import React from 'react';
import './Menu.css';
import { NavLink } from 'react-router-dom'

class Menu extends React.Component{
    

    
    render(){
        return( 
            <ul className="Menu">
                {
                    this.props.routes.map((item, index)=>{
                        return (
                            <li key={index} className="Menu-link">
                                <NavLink 
                                    exact 
                                    activeClassName="isActive" 
                                    className="link" 
                                    to={{ 
                                        pathname: item.route, 
                                        state:{
                                            title: item.title
                                        }
                                        }} 
                                >
                                            {item.title}
                                </NavLink> 
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default Menu;