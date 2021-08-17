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

// export const counterImmerReducer = (state = initialValue, action) => {
//     produce(state, (draft) => {
//         switch(action.type) {
//             case 'counterImmer/increment': {
//                 draft.number = state.number + 1;
//             }
//             case 'counterImmer/decrement': {
//                 draft.number = state.number - 1;
//             }
//             default: {
//                 return state;
//             }
//         }
//     })
// }

export const counterImmerReducer = (state = initialValue, action) => {
    switch (action.type) {
        case 'counterImmer/increment': {
            return state + 1;
        }
        case 'counterImmer/decrement': {
            return state - 1;
        }
        default:
            return state;
    }
}

export const selectCounterImmer = (state) => state.counterImmer;