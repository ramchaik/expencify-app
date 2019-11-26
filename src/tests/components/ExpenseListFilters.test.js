import React from 'react';
import {
    shallow
} from 'enzyme';
import {
    ExpenseListFilters
} from '../../components/ExpenseListFilters';
import {
    filters,
    altFilters
} from "../fixtures/filters";
import moment from '../../../../../../../Library/Caches/typescript/3.6/node_modules/moment/moment';

let setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow( <
        ExpenseListFilters filters = {
            filters
        }
        setTextFilter = {
            setTextFilter
        }
        sortByAmount = {
            sortByAmount
        }
        sortByDate = {
            sortByDate
        }
        setStartDate = {
            setStartDate
        }
        setEndDate = {
            setEndDate
        }
        />
    );
});

test("should render ExpenseListFilters correctly", () => {
    expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseListFilters correctly with altFilters", () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test("should handle text change", () => {
    const value = "great";
    wrapper.find("input").simulate("change", {
        target: {
            value
        }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test("should handle sort by date", () => {
    const value = "date";
    wrapper.setProps({
        filters: altFilters
    });
    wrapper.find("select").simulate("change", {
        target: {
            value
        }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test("should handle sort by amount ", () => {
    const value = "amount";
    wrapper.find("select").simulate("change", {
        target: {
            value
        }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test("should handle date changes", () => {
    const startDate = moment(0).add(3, "days"),
        endDate = moment(0).add(5, "days");
    wrapper.find("DateRangePicker").prop("onDatesChange")({
        startDate,
        endDate
    });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test("should handle date focus change", () => {
    const calendarFocused = "endDate";
    wrapper.find("DateRangePicker").prop("onFocusChange")(calendarFocused);
    expect(wrapper.state("calendarFocused")).toBe(calendarFocused);
});