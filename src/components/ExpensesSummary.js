import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import totalExpenses from '../selectors/expenses-total';

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => (
  <div className='page-header'>
    <div className='content-container'>
      <h1 className='page-header__title'>
        Viewing <span>{expensesCount}</span>{' '}
        {expensesCount === 1 ? ' expense' : ' expenses'}
        totalling <span>{numeral(expensesTotal / 100).format('$0,0.00')}</span>
      </h1>
      <div className='page-header__actions'>
        <Link className='button' to='/create'>
          Add Expense
        </Link>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  expensesCount: selectExpenses(state.expenses, state.filters).length,
  expensesTotal: totalExpenses(selectExpenses(state.expenses, state.filters))
});

export default connect(mapStateToProps)(ExpensesSummary);
