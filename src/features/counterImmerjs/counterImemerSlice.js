import produce from "immer";

export const increment = () => {
    return {
        type: 'counterImmer/increment'
    }
}

export const decrement = () => {
    return {
        type: 'counterImmer/decrement'
    }
}

const initialValue = 0;

export const counterImmerReducer = (state = initialValue, action) => {
    return produce(state, (draft) => {
        switch(action.type) {
            case 'counterImmer/increment': {
                return draft = state + 1;
            }
            case 'counterImmer/decrement': {
                return draft = state - 1;
            }
            default: {
                return state;
            }
        }
    })
}

export const selectCounterImmer = (state) => state.counterImmer;