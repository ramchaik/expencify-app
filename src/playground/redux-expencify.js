import { createStore, combineReducer } from 'redux';

const demoState = {
  expencess: [
    {
      id: 'alksjdfk;laf',
      description: 'January',
      note: 'This was the payment.',
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};
