import React from 'react';
import './NavBar-layout.css';
import UserInfo from './UserInfo';
import Menu from './Menu';

class NavBarLayout extends React.Component{
    render(){
        const routes = [
            {
                title: 'Inicio',
                route: '/inicio'
            },
            {
                title: 'Reservas',
                route: '/reservas'
            },
            {
                title: 'Pasajeros',
                route: '/pasajeros'
            },
            {
                title:'Configuración',
                route: '/configuracion'
            }
        ]
        return(
            <div className="NavBar">
                <UserInfo />
                <Menu routes={routes} />
            </div>
        )
    }
}


export default NavBarLayout;