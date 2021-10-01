import React, { Fragment } from 'react';
import LoginPage from './login/LoginPage.jsx';
import UsuariosPage from './usuarios/UsuariosPage.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarComponent from './shared/components/navbar/NavbarComponent';


function App() {
  return (
    <Router>
       <NavbarComponent /> 
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>
        <Route path="/usuarios" exact>
          <UsuariosPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
