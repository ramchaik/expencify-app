import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

const ExpenseListFilters = props => {
  return (
    <div>
      <input 
        value={props.filters.text}
        onChange={(e) => props.dispatch(setTextFilter(e.target.value))}
        type='text' />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
