import React from 'react';
import './Login.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'
import LoginForm from './LoginForm';
import defaulPicture from '../../assets/user-image.png';

class Login extends React.Component {

    state = {
        register: false
    }


    handleRegistre = () => {
        this.setState({
            register: !this.state.register
        })
    }

    handleSubmit = (value, {setSubmitting}) => {
        if (this.state.register) {
            this.userRegister(value).then((data)=>{
                if(!data.status){
                    console.log("El registro no se pudo completar");
                }
                setSubmitting(false);
            });
            
        } else {
            firebase.auth().signInWithEmailAndPassword(value.email, value.password)
                .then((user) => {
                    console.log(user);
                    setSubmitting(false);
                })
                .catch((err) => {
                    console.log(err);
                    setSubmitting(false);
                });
        }

    }

    async userRegister(values) {
        const codigo = await firebase.firestore().collection('codigos').where('codigo','==', values.code).get();
        if(codigo.empty){
            return {status: false, message: "el codigo no existe"};
        }
        let rol = "";
        let codigoId = "";
        codigo.forEach(doc=>{
            codigoId = doc.id; 
            rol = doc.data().rol;
        });
    
        //Borrar el codigo para que otra persona no se pueda registrar con el
        //firebase.firestore().collection('codigos').doc(codigoId).delete();

        const operation = await firebase.auth().createUserWithEmailAndPassword(values.email, values.password);
        const user = operation.user;
        await firebase.firestore().collection('users').add({
            uid: user.uid,
            email: user.email,
            name: values.name,
            rol: rol,
            picture: defaulPicture
        });
        return {status: true, message: 'El registro se completo correctamente'};
    }



    render() {
        return (
            <div className="Login">
                <div className="Login-card">
                    <div className="Login-header">
                        <h1 className="Login-title">{this.state.register ? 'Registrarse' : 'Papagayos Beach Hotel'}</h1>
                    </div>
                    <LoginForm
                        register={this.state.register}
                        handleRegistre={this.handleRegistre}
                        handleSubmit={this.handleSubmit} />
                </div>
            </div>
        )
    }
}

export default Login