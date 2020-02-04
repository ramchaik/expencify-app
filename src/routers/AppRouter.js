import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ExpenseDashbordPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import EditExpensePage from "../components/EditExpensePage";
import Header from "../components/Header";
import LoginPage from "../components/LoginPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact={true} path={"/"} component={LoginPage} />
        <Route path={"/dashboard"} component={ExpenseDashbordPage} />
        <Route path={"/create"} component={AddExpensePage} />
        <Route path={"/help"} component={HelpPage} />
        <Route path={`/edit/:id`} component={EditExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
