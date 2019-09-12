import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const ExpenseDashbordPage = () => <div>This is a ExpenseDashbordPage.</div>;

const AddExpensePage = () => <div>This is a create expense page.</div>;

const EditExpensePage = () => <div>This is edit expense page.</div>;

const HelpPage = () => <div>This is Help page</div>;

const NotFoundPage = () => (
  <div>
    404 - <Link to='/'>Go Home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expencify</h1>
    <nav>
      <NavLink to='/' exact={true} activeClassName="is-active">Home</NavLink>
      <NavLink to='/create' activeClassName="is-active">Create</NavLink>
      <NavLink to='/edit' activeClassName="is-active">Edit</NavLink>
      <NavLink to='/help' activeClassName="is-active">Help</NavLink>
    </nav>
  </header>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact={true} path={'/'} component={ExpenseDashbordPage} />
        <Route path={'/create'} component={AddExpensePage} />
        <Route path={'/edit'} component={EditExpensePage} />
        <Route path={'/help'} component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
