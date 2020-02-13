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

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = calendarFocused => {
    this.setState(() => ({
      calendarFocused
    }));
  };

  onTextChange = e => this.props.setTextFilter(e.target.value);

  onSortChange = e => {
    const { value } = e.target;
    if (value === 'amount') {
      this.props.sortByAmount();
    } else {
      this.props.sortByDate();
    }
  };

  render() {
    const { props } = this;

    return (
      <div className='content-container'>
        <div className='input-group'>
          <div className='input-group__item'>
            <input
              type='text'
              className='text-input'
              value={props.filters.text}
              onChange={this.onTextChange}
              placeholder='Search expenses'
            />{' '}
          </div>
          <div className='input-group__item'>
            <select
              className='select'
              value={this.props.filters.sortBy}
              onChange={this.onSortChange}
            >
              <option value='date'> Date </option>{' '}
              <option value='amount'> Amount </option>{' '}
            </select>{' '}
          </div>
          <div className='input-group__item'>
            <DateRangePicker
              startDate={props.filters.startDate}
              endDate={props.filters.endDate}
              onDatesChange={this.onDatesChange}
              showClearDates={true}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />{' '}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  sortByAmount: () => dispatch(sortByAmount()),
  sortByDate: () => dispatch(sortByDate()),
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDate: endDate => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
