import { IAppState } from './store';
import { INCREMENT } from './actions';

export interface IAppState {
    counter: number;
    messaging?: {
        newMessages: number;
    };
}

// this is used to initialize our store with counter:0
export const INITIAL_STATE: IAppState = {
    counter: 0,
    messaging: {
        newMessages: 5
    }
};

export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case INCREMENT:
            return { counter: state.counter + 1 };
        default:
            return state;
    }
}