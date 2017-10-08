export const INCREMENT = 'INCREMENT';
export const increment = () => ({ type: INCREMENT });

export const DECREMENT = 'DECREMENT';
export const decrement = () => ({ type: DECREMENT });

export const INCREMENT_AMOUNT = 'INCREMENT_AMOUNT';
export const incrementAmount = (amt) => ({ type: INCREMENT_AMOUNT, payload: +amt });
