import React, { Component, Fragment } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

import NavBarLayout from '../NavBar/components/NavBar-layout';
import PageContainer from '../PageContainers/PageContainer';
import Inicio from '../Pages/Inicio/Inicio'
import Reservas from '../Pages/Reservas/Reservas'
import Login from '../Pages/Login/Login';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { connect } from 'react-redux'



class App extends Component {

  state = {
    isLogin: false,
    loading: true
  }

  getUSerData = async (uid)=>{
    const data = await firebase.firestore().collection('users').where('uid','==', uid).get();
    let user = {}
    data.forEach(doc =>{
      user = doc.data();
    });
    this.props.dispatch({
      type: 'SIGIN',
      payload:user
    });
    return true;
  }

  componentDidMount(){
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){
          this.getUSerData(user.uid).then(()=>{
            this.setState({
              isLogin: true,
              loading: false
            });
          })
        } else{
          this.setState({
            isLogin: false,
            loading: false
          })
        }
      })
  }

  render() {
    return (
      <Fragment>
        {
          this.state.isLogin && !this.state.loading &&
          <div className="App">
            <NavBarLayout />
            <PageContainer>
              <Switch>
                <Route exact path="/inicio" component={Inicio} />
                <Route exact path="/reservas" component={Reservas} />
                <Redirect from='/' to="/inicio" />
              </Switch>
            </PageContainer>
          </div>
        }

        {
          !this.state.isLogin && !this.state.loading &&
          <div className="App-login">
            <Switch>
              <Route exact path="/login" component={Login} />
              <Redirect from="/" to="/login" />
            </Switch>
          </div>
        }
      </Fragment>
    );
  }
}

function mapStateToProps(state, props){
  return {}
}

export default connect(mapStateToProps)(App);
