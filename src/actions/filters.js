// Set text filter
export const setTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text
});

// sort by Amount
export const sortByAmount = () => ({
	type: 'SORT_BY_AMOUNT'
});

// sort by Date
export const sortByDate = () => ({
	type: 'SORT_BY_DATE'
});

// Set start date
export const setStartDate = (startDate = undefined) => ({
	type: 'SET_START_DATE',
	startDate
});

// Set End date
export const setEndDate = (endDate = undefined) => ({
	type: 'SET_END_DATE',
	endDate
});
