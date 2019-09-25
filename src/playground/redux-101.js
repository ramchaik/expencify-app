import { createStore } from 'redux';

// Action Generator/ Action Creator
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const resetCount = () => ({
  type: 'RESET'
});

const setCount = ({ count }) => ({
  type: 'SET',
  count
});

// Reducers
const countReducer = (
  state = { count: 0 },
  { type, incrementBy, decrementBy, count } = {}
) => {
  switch (type) {
    case 'INCREMENT':
      return {
        count: state.count + incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - decrementBy
      };
    case 'RESET':
      return {
        count: 0
      };
    case 'SET':
      return {
        count
      };

    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Actions - an object that is passed to the redux store
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());

// unsubscribe(); // <- unsubscribe for the function so after this subscription function is not called.

store.dispatch(resetCount());

store.dispatch(setCount({ count: 4 }));

store.dispatch(decrementCount({ decrementBy: 5 }));
store.dispatch(decrementCount());
store.dispatch(setCount({ count: 1 }));
store.dispatch(decrementCount({ decrementBy: 10 }));
