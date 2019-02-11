import React, { Fragment } from 'react';
import { Formik } from 'formik'
import * as Yup from 'yup';


class LoginForm extends React.Component {
    render() {
        let validation = Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().required(),
        });
        if(this.props.register){
            validation['name'] = Yup.string().min(3).required();
            validation['code'] = Yup.string().min(4).required();
        }
        return (
            <Fragment>
                <Formik
                    initialValues={{ 
                            email: '', 
                            password: '', 
                            code: '',
                            name: '' 
                        }}
                    onSubmit={this.props.handleSubmit}
                    validationSchema={ validation }
                >
                    {
                        props => {
                            const {
                                values,
                                handleChange,
                                handleSubmit,
                                handleBlur,
                                isSubmitting,
                                touched,
                                errors
                            } = props;

                            return (
                                <form className='Login-body' onSubmit={handleSubmit}>
                                    <div>
                                        <label className="Form-label" htmlFor="user">Usuario</label>
                                        <div className="Input">
                                            <input 
                                                className={ `${ errors.email && touched.email ? 'error' : '' } ${ !errors.email && touched.email ? 'correct' : '' }` }
                                                onBlur={ handleBlur('email') } 
                                                onChange={handleChange('email')} 
                                                value={values.email} 
                                                id="user" 
                                                placeholder="Nombre de usuario" 
                                                type="email" />
                                            <i className="fas fa-user"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="Form-label" htmlFor="password">Contraseña</label>
                                        <div className="Input">
                                            <input 
                                                className={ `${ errors.password && touched.password ? 'error' : '' } ${ !errors.password && touched.password ? 'correct' : '' }` }
                                                onBlur={handleBlur('password')} 
                                                onChange={handleChange('password')} 
                                                value={values.password} 
                                                id="password" 
                                                placeholder="Contraseña" 
                                                type="password" />
                                            <i className="fas fa-unlock"></i>
                                        </div>
                                    </div>

                                    {
                                        this.props.register &&
                                        <Fragment>
                                        <div>
                                            <label className="Form-label" htmlFor="code">Codigo de Registro</label>
                                            <div className="Input">
                                                <input 
                                                    className={ `${ errors.code && touched.code ? 'error' : '' } ${ !errors.code && touched.code ? 'correct' : '' }` }
                                                    onBlur={handleBlur('code')} 
                                                    onChange={ handleChange('code') } 
                                                    value={ values.code } 
                                                    id="code" 
                                                    placeholder="Codigo" 
                                                    type="text" />
                                                <i className="fas fa-key"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="Form-label" htmlFor="name">Nombre completo</label>
                                            <div className="Input">
                                                <input 
                                                    className={ `${ errors.name && touched.name ? 'error' : '' } ${ !errors.name && touched.name ? 'correct' : '' }` }
                                                    onBlur={handleBlur('name')} 
                                                    onChange={ handleChange('name') } 
                                                    value={ values.name } 
                                                    id="name" 
                                                    placeholder="Nombre" 
                                                    type="text" />
                                                <i className="fas fa-male"></i>
                                            </div>
                                        </div>
                                        </Fragment>
                                    }


                                    <button disabled={ isSubmitting } className="btn-primary" type="submit">{this.props.register ? 'Registrarse' : 'Ingresar'}</button>
                                    <button type='button' onClick={this.props.handleRegistre} className="btn-link">{this.props.register ? 'Volver al login' : 'No tienes cuenta?'}</button>
                                </form>
                            )

                        }
                    }

                </Formik>
            </Fragment>
        )
    }
}


export default LoginForm;