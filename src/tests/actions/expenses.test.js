import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
	addExpense,
	editExpense,
	removeExpense,
	startAddExpense,
	setExpenses,
	startRemoveExpense,
	startEditExpense
} from '../../actions/expenses';
import expenses from "../fixtures/expenses";
import database from "../../firebase/firebase";
import {
	create
} from "react-test-renderer";

const createMockStore = configureMockStore([thunk]);

beforeEach(async () => {
	const expenseData = {};
	expenses.forEach(({
		id,
		description,
		note,
		amount,
		createdAt
	}) => {
		expenseData[id] = {
			description,
			note,
			amount,
			createdAt
		};
	});

	await database.ref('expenses').set(expenseData);
});

test('should setup remove expense action object', () => {
	const action = removeExpense({
		id: '123abc'
	});
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123abc'
	});
});

test('should setup edit expense action object', () => {
	const action = editExpense('123abc', {
		note: 'New note value'
	});
	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: '123abc',
		updates: {
			note: 'New note value'
		}
	});
});

test('should setup add expense action object with provided values', () => {
	const action = addExpense(expenses[1]);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: expenses[1]
	});
});

test("should add expense to databse and store", (done) => {
	const store = createMockStore({});
	const expenseData = {
		description: "asdf",
		note: "asdf",
		amount: 123,
		createdAt: 234
	};
	store.dispatch(startAddExpense(expenseData))
		.then(() => {

			const actions = store.getActions();
			expect(actions[0]).toEqual({
				type: "ADD_EXPENSE",
				expense: {
					id: expect.any(String),
					...expenseData
				}
			});

			database.ref(`expenses/${actions[0].expense.id}`)
				.once("value")
				.then((snapshot) => {
					expect(snapshot.val()).toEqual(expenseData);
					done();
				})
		});
});

test("should add expense with defaults to database and store", (done) => {
	const store = createMockStore({});
	const expenseDefaults = {
		description: "",
		note: "",
		amount: 0,
		createdAt: 0
	};

	store.dispatch(startAddExpense(expenseDefaults)).then(() => {

		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: "ADD_EXPENSE",
			expense: {
				id: expect.any(String),
				...expenseDefaults
			}
		});

		database.ref(`expenses/${actions[0].expense.id}`)
			.once("value").then(snapshot => {
				expect(snapshot.val()).toEqual(expenseDefaults);
				done();
			});
	});
});

test('should set up setExpense action object with data', () => {
	const action = setExpenses(expenses);
	expect(action).toEqual({
		type: "SET_EXPENSES",
		expenses
	});
})

test("should fetch the expenses from the firebase", (done) => {
	const store = createMockStore({});
	store.dispatch(startAddExpense()).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: "SET_EXPENSES",
			expenses
		})
		done();
	})
})

test('should remove expenses from firebase', (done) => {
	const store = createMockStore({});
	const id = expenses[2].id;

	store.dispatch(startRemoveExpense({
			id
		}))
		.then(() => {
			const actions = store.getActions();
			expect(actions[0]).toEqual({
				type: 'REMOVE_EXPENSE',
				id
			});

			return database.ref(`expenses/${id}`)
				.once('value')
				.then(snapshot => {
					expect(snapshot.val()).toBeFalsy();
					done();
				})
		})
})

test('should edit expenses from firebase', (done) => {
	const store = createMockStore({});
	const id = expenses[2].id;
	const updates = {
			note: 'New note value'
	};

	store.dispatch(startEditExpense(id, updates))
		.then(() => {
			const actions = store.getActions();
			expect(actions[0]).toEqual({
				type: "EDIT_EXPENSE",
				id,
				updates
			});

			return database.ref(`expenses/${id}`)
				.once('value')
				.then((snapshot) => {
					expect(snapshot.val().note).toBe(updates.note)
					done();
				})
		});
})