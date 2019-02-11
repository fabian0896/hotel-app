import React, { Component, Fragment } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

import NavBarLayout from '../NavBar/components/NavBar-layout';
import PageContainer from '../PageContainers/PageContainer';
import Inicio from '../Pages/Inicio/Inicio'
import Reservas from '../Pages/Reservas/Reservas'
import Login from '../Pages/Login/Login';

class App extends Component {

  state = {
    isLogin: false
  }

  render() {
    return (
      <Fragment>
        {
          this.state.isLogin &&
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
          !this.state.isLogin &&
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

export default App;
