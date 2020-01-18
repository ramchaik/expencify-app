import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
	const state = expensesReducer(undefined, {
		type: '@@INIT'
	});
	expect(state).toEqual([]);
});

test('should remove expense by id', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: expenses[1].id
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[0], expenses[2]]);
});


test('should not remove expenses if not found', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: 123
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});

test('should add an expense', () => {
	const expense = {
		id: 4,
		description: 'new course',
		note: '',
		amount: 1234,
		createdAt: 200000
	};
	const action = {
		type: 'ADD_EXPENSE',
		expense
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense if id found', () => {
	const note = 'Updated task';
	const action = {
		type: 'EDIT_EXPENSE',
		id: 2,
		updates: {
			note
		}
	};
	const state = expensesReducer(expenses, action);
	expect(state[1].note).toBe(note);
});

test('should not edit an expense if id not found', () => {
	const note = 'Updated task';
	const action = {
		type: 'EDIT_EXPENSE',
		id: 123,
		updates: {
			note
		}
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});

test("should set expenses", () => {
	const action = {
		type: "SET_EXPENSES",
		expenses: [expenses[1]]
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[1]]);
})