export const increment = () => {
    return {
        type: 'counterRedux/increment'
    }
}

export const decrement = () => {
    return {
        type: 'counterRedux/decrement'
    }
}

const initialValue = 0;
export const counterReduxReducer = (state = initialValue, action) => {
    switch (action.type) {
        case 'counterRedux/increment': {
            return state + 1;
        }
        case 'counterRedux/decrement': {
            return state - 1;
        }
        default:
            return state;
    }
}

export const selectCounterRedux = (state) => state.counterRedux;