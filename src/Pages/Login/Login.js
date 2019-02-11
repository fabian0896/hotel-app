import React from 'react';
import './Login.css';


class Login extends React.Component{
    
    state={
        register: false
    }

    handleRegistre = ()=>{
        this.setState({
            register: !this.state.register
        })
    }
    
    render(){
        return(
            <div className="Login">
                <div className="Login-card">
                    <div className="Login-header">
                        <h1 className="Login-title">{ this.state.register? 'Registrarse': 'Papagayos Beach Hotel' }</h1>
                    </div>
                    <div className="Login-body">
                        <div>
                            <label className="Form-label" htmlFor="user">Usuario</label>
                            <div className="Input">
                                <input autoComplete="off" id="user" placeholder="Nombre de usuario" type="email"/>
                                <i className="fas fa-user"></i>
                            </div>
                        </div>

                        <div>
                            <label className="Form-label" htmlFor="password">Contraseña</label>
                            <div className="Input">
                                <input id="password" placeholder="Contraseña" type="password"/>
                                <i className="fas fa-unlock"></i>                          
                            </div>    
                        </div>

                        {
                            this.state.register &&
                            <div>
                            <label className="Form-label" htmlFor="code">Codigo de Registro</label>
                            <div className="Input">
                                <input id="code" placeholder="Codigo" type="text"/>
                                <i className="fas fa-unlock"></i>                          
                            </div>    
                        </div>
                        }


                        <button className="btn-primary" type="submit">{ this.state.register? 'Registrarse': 'Ingresar' }</button>
                        <button onClick={ this.handleRegistre} className="btn-link">{ this.state.register? 'Volver al login': 'No tienes cuenta?' }</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login