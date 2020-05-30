import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useAuth0 } from "./react-auth0-spa";

import { ThemeProvider, ColorModeProvider, CSSReset, Grid } from "@chakra-ui/core";
import Home from './components/home';
import ManageBusiness from './components/manageBusiness';
import Businesses from './components/businesses';


function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ThemeProvider>
      <ColorModeProvider>
        <Router>
          <CSSReset />
          <div className="App">
            <header>
              <NavBar />
            </header>
              <Switch>
                <Route exact path="/" component={Home}>
                </Route>
                <Route path="/business/new" component={ManageBusiness}>
                </Route>
                <Route path="/business/:id" component={ManageBusiness}>
                </Route>
                <Route path="/business" component={Businesses}>
                </Route>
              </Switch>
          </div>
        </Router>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
