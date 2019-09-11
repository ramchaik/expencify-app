import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const ExpenseDashbordPage = () => <div>This is a ExpenseDashbordPage.</div>;

const AddExpensePage = () => <div>This is a create expense page.</div>;

const EditExpensePage = () => <div>This is edit expense page.</div>;

const HelpPage = () => <div>This is Help page</div>;

const routes = (
  <BrowserRouter>
    <div>
      <Route exact path={'/'} component={ExpenseDashbordPage} />
      <Route path={'/create'} component={AddExpensePage} />
      <Route path={'/edit'} component={EditExpensePage} />
      <Route path={'/help'} component={HelpPage} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
