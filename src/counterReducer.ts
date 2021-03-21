import { CounterState, initialState } from './store'
import { CounterAction } from './counterAction'

export const counterReducer = (state: CounterState = initialState.counter, action: CounterAction) => {
	switch (action.type) {
		case "INCREMENT":
			return {
				...state,
				value: state.value + 1,
			}
		case "DECREMENT":
			return {
				...state,
				value: state.value - 1
			}
		default:
			return state
	}
};
