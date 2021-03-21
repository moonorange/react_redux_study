export interface CounterAction {
	type: string,
	payload?: any
};

export const incrementAction = () => {
	return {
		type: "INCREMENT"
	}
};

export const decrementAction = () => {
	return {
		type: "DECREMENT"
	}
};
