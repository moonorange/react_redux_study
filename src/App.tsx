import React, { Component } from 'react';
import { CounterState } from './counterReducer'
import { useSelector } from 'react-redux'

function App() {
  const value = useSelector<CounterState>((state) => state.value);
    return (
        <div className="container">
          <p>{ value }</p>
        </div>
    );
  }

export default App;
