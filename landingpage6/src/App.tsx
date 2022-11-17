import React from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
import './assets/scss/App.scss';
import LandingPageComponent from './components/landing-page-component';
function App() {
  return (  
        <Router>
        <Switch>
          <Route exact  path="/landingpage6/" component={LandingPageComponent} />
          <Redirect to="/landingpage6/" />
        </Switch>
        </Router>
  );
}

export default App;
