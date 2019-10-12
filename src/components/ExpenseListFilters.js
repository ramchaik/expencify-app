import React from 'react';
import { connect } from 'react-redux';
import {
	setTextFilter,
	sortByAmount,
	sortByDate,
	setStartDate,
	setEndDate
} from '../actions/filters';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseListFilters extends React.Component {

	state = {
		calendarFocused: null
	};

	onDatesChange = ({ startDate, endDate }) => {
		this.props.dispatch(setStartDate(startDate));
		this.props.dispatch(setEndDate(endDate));
	}

	onFocusChange = (calendarFocused) => {
		this.setState(() => ({ calendarFocused }));
	}

	render() {
		const { props } = this;

		return (
			<div>
				<input
					type='text'
					value={props.filters.text}
					onChange={(e) => props.dispatch(setTextFilter(e.target.value))} />
				<select onChange={(e) => {
					const { value } = e.target;
					if (value === 'amount') {
						props.dispatch(sortByAmount());
					} else {
						props.dispatch(sortByDate());
					}
				}}>
					<option value="date">Date</option>
					<option value="amount">Amount</option>
				</select>
				<DateRangePicker
					startDate={props.filters.startDate}
					endDate={props.filters.endDate}
					onDatesChange={this.onDatesChange}
					showClearDates={true}
					focusedInput={this.state.calendarFocused}
					onFocusChange={this.onFocusChange}
					numberOfMonths={1}
					isOutsideRange={() => false}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		filters: state.filters
	};
};

export default connect(mapStateToProps)(ExpenseListFilters);
