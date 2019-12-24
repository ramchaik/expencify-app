import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import totalExpenses from '../selectors/expenses-total';

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => (
  <div>
    <h1>
      Viewing {expensesCount}
      {expensesCount === 1 ? ' expense' : ' expenses'} totalling{' '}
      {numeral(expensesTotal / 100).format('$0,0.00')}{' '}
    </h1>
  </div>
);

const mapStateToProps = state => ({
  expensesCount: selectExpenses(state.expenses, state.filters).length,
  expensesTotal: totalExpenses(selectExpenses(state.expenses, state.filters))
});

export default connect(mapStateToProps)(ExpensesSummary);
