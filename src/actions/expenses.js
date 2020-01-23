import uuid from 'uuid';
import database from "../firebase/firebase";
/*
For Synchronous Redux Actions:

	To Do:
	 -- component calls the actions generator
	 -- action generator returns an object
	 -- component dispactches the object
	 -- redux stores changes


For Asynchronous Redux Actions:
	
	To Do:
	 -- component calls the actions generator
	 -- actions generator returns a function
	 -- component dispatches function
	 -- function runs (has the ability to dispatch other actions and do what ever it wants)
	 
*/

// ADD_EXPENSE
export const addExpense = (expense) => ({
	type: 'ADD_EXPENSE',
	expense
});

export const startAddExpense = (expenseData = {}) => {

	return (dispatch) => {
		const {
			description = '',
				note = '',
				amount = 0,
				createdAt = 0
		} = expenseData;

		const expense = {
			description,
			note,
			amount,
			createdAt
		};

		return database.ref("expenses")
			.push(expense)
			.then(ref => {
				dispatch(addExpense({
					id: ref.key,
					...expense
				}));
			})
	}
}

// Remove Expense
export const removeExpense = ({
	id = ''
}) => ({
	type: 'REMOVE_EXPENSE',
	id
});

export const startRemoveExpense = ({
	id
} = {}) => {
	return (dispacth) => {
		return database.ref(`expenses/${id}`)
			.remove()
			.then(ref => {
				dispacth(removeExpense({
					id
				}))
			});
	}
};

// EDIT EXPENSE
export const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
});

// SET_EXPENSES
export const setExpenses = (expenses) => ({
	type: "SET_EXPENSES",
	expenses
})

export const startSetExpenses = () => {
	return (dispatch) => {
		return database.ref("expenses")
			.once('value')
			.then((snapshot) => {
				const expenses = [];
				snapshot.forEach((childSnapshot) => {
					expenses.push({
						id: childSnapshot.key,
						...childSnapshot.val()
					});
				});
				dispatch(setExpenses(expenses));
			});
	}
}