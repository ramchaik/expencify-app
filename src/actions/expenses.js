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
	console.log("TCL: startAddExpense -> expenseData", expenseData)

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
            console.log("TCL: startAddExpense -> ref", ref)
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

// EDIT EXPENSE
export const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
});