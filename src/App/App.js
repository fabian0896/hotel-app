import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

import NavBarLayout from '../NavBar/components/NavBar-layout';
import PageContainer from '../PageContainers/PageContainer';
import Inicio from '../Pages/Inicio/Inicio'
import Reservas from '../Pages/Reservas/Reservas'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBarLayout />
        <PageContainer>
          <Switch>
            <Route exact path="/inicio" component={Inicio}  />
            <Route exact path="/reservas" component={Reservas}  />
            <Redirect from='/' to="/inicio" />
          </Switch>
        </PageContainer>
      </div>
    );
  }
}

export default App;
