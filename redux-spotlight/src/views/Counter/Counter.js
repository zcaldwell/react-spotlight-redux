import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, multiply, reset } from './counterSlice';

const Counter = () => {
  // The function below is called a selector and allows us to select a value from
  // the state.
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        aria-label="Decrement value"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button
        aria-label="Increment value"
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <button
        aria-label="Multiply value"
        onClick={() => {
          dispatch(multiply());
        }}
      >
        *
      </button>
      <button
        aria-label="Reset value"
        onClick={() => {
          dispatch(reset());
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Counter;
