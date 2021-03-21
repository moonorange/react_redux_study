import React, { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { incrementAction, decrementAction } from './counterAction'
import { getCounterValue } from './selector'

function App() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const value = getCounterValue(selector)
  // console.log(selector);
  // console.log(value);

    return (
        <div className="container">
          <p>{value}</p>
          <button onClick={() => dispatch(incrementAction())}>
            Add
          </button>
          <button onClick={() => dispatch(decrementAction())}>
            Subtract
          </button>
        </div>
    );
  }

export default App;
