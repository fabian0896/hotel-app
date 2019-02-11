import React from 'react';
import './NavBar-layout.css';
import UserInfo from './UserInfo';
import Menu from './Menu';
import firebase from 'firebase/app';
import 'firebase/auth';
import { connect } from 'react-redux'

class NavBarLayout extends React.Component{
    
    state ={
        showMenu: false
    }
    
    handleClick = ()=>{
        this.setState({
            showMenu: !this.state.showMenu
        })
    } 
    
    handleClose = ()=>{
        this.setState({
            showMenu: false
        })
    }

    handleLogout = ()=>{
        firebase.auth().signOut()
    }

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

        const iconMenuClass = `fas ${this.state.showMenu? 'fa-times': 'fa-bars'}`

        return(
            
            <div className="NavBar">
                <button onClick={this.handleClick} className='BurguerButton'><i className={iconMenuClass}></i></button>
                <UserInfo user={ this.props.user } />
                <Menu
                    handleLogout={ this.handleLogout } 
                    handleClose={this.handleClose} 
                    showMenu={this.state.showMenu} 
                    routes={routes} />
            </div>
        )
    }
}

function mapStateToProps(state, props){
    return{
        user: state.userData.user
    }
}

export default connect(mapStateToProps)(NavBarLayout);