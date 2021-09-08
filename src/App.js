import React, {createContext} from "react";
import StartingUp from "./components/StartingUp";
import HomePage from "./components/HomePage";
import {useAuth} from "./components/login/Auth";
import PrivateRoute from './components/login/PrivateRoute';
import {
    Switch,
    Route, BrowserRouter as Router, Redirect
} from "react-router-dom";

function App() {
    let auth = useAuth();
  return (
      <Router>
          <Redirect to={{pathname: auth.user ? "/home" : "/login"}}/>
          <Switch>
              <Route path="/login">
                  <StartingUp/>
              </Route>
              <PrivateRoute path="/home">
                  <HomePage/>
              </PrivateRoute>
          </Switch>
      </Router>
  );
}

export default App;
