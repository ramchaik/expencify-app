import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {
	Provider
} from 'react-redux';
import {
	addExpense
} from './actions/expenses';
import {
	setTextFilter
} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

const jsx = (
	<Provider store={store} >
		<AppRouter />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));