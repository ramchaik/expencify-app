import moment from 'moment';
import {
	setStartDate,
	setEndDate,
	sortByAmount,
	sortByDate,
	setTextFilter
} from '../../actions/filters';

test('should generate set start date object', () => {
	const action = setStartDate(moment(0));
	expect(action).toEqual({
		type: 'SET_START_DATE',
		startDate: moment(0)
	});
});

test('should generate set end date object', () => {
	const action = setEndDate(moment(0));
	expect(action).toEqual({
		type: 'SET_END_DATE',
		endDate: moment(0)
	});
});

test('should generate sort by date object', () => {
	const action = sortByDate();
	expect(action).toEqual({ type: 'SORT_BY_DATE' });
});

test('should generate sort by amount object', () => {
	const action = sortByAmount();
	expect(action).toEqual({ type: 'SORT_BY_AMOUNT' });
});

test('should generate set text filter object with text value', () => {
	const text = 'Search Check!';
	const action = setTextFilter(text);
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text
	});
});

test('should generate set text filter object with default', () => {
	const action = setTextFilter();
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text: ''
	});
});


