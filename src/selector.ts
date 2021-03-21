
import { createSelector } from 'reselect'

const counterSelector = (state) => state.counter;

export const getCounterValue = createSelector(
	[counterSelector],
	state => state.value
)
