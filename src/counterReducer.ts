import { CounterState, initialState } from './store'

export interface CounterAction {
	type: string,
	payload: {
		value: number
	}
};

export const counterReducer = (state: CounterState = initialState, action: CounterAction) => {
	switch (action.type) {
		case "INCREMENT":
			return {
				...state,
				...action.payload
			}
		case "DECREMENT" :
			return {
				...state,
				...action.payload
			}
		default:
			return state
	}
};
