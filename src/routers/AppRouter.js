import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import ExpenseDashbordPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import NotFoundPage from "../components/NotFoundPage";
import EditExpensePage from "../components/EditExpensePage";
import LoginPage from "../components/LoginPage";
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute exact={true} path={"/"} component={LoginPage} />
        <PrivateRoute path={"/dashboard"} component={ExpenseDashbordPage} />
        <PrivateRoute path={"/create"} component={AddExpensePage} />
        <PrivateRoute path={`/edit/:id`} component={EditExpensePage} />
        <PublicRoute component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
