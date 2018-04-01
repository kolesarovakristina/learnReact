import React from "react";
import { Switch, Route } from "react-router-dom";
import DashboardPage from "./containers/Dashboard";
import LoginPage from "./containers/LoginPage";
import { ThemeProvider } from "styled-components";

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="/dashboard" component={DashboardPage} />
    </Switch>
  </div>
);

export default App;
