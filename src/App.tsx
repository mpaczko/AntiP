import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "./Components/LoginPage/LoginPage";
import DashboardPage from "./Components/Dashboard Page/DashboardPage";
import EmployeesPage from "./Components/Employees Page/EmployeesPage";

export default function App() {
  let routes = (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/employees" component={EmployeesPage} />
      <Redirect to="/login" />
    </Switch>
  );

  return <div className="App">{routes}</div>;
}
