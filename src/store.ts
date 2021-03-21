import { createStore as reduxCreateStore, combineReducers } from 'redux'
import { counterReducer } from './counterReducer'

export interface CounterState {
	value: number
}

export const initialState = {
	counter: {
		value: 0
	}
}

export default function  createStore () {
	return reduxCreateStore(
		combineReducers( {
			counter: counterReducer
		})
	)
}
