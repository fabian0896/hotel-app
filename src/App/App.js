import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import NavBarLayout from '../NavBar/components/NavBar-layout';
import PageContainer from '../PageContainers/PageContainer';
import Inicio from '../Pages/Inicio';
import Reservas from '../Pages/Reservas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBarLayout />
        <PageContainer>
          <Switch>
            <Route exact path="/inicio" component={Inicio}  />
            <Route exact path="/reservas" component={Reservas}  />
          </Switch>
        </PageContainer>
      </div>
    );
  }
}

export default App;
