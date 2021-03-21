import { createStore } from 'redux'
import { counterReducer } from './counterReducer'

export interface CounterState {
	value: number
}

export const initialState: CounterState = {
	value: 0
}

export const store = createStore(initialState, counterReducer);
