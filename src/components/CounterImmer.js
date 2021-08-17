import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCounterImmer, increment, decrement } from '../features/counterImmerjs/counterImemerSlice';

export const CounterImmer = () => {
    const value = useSelector(selectCounterImmer);
    const dispatch = useDispatch();

    const onIncrement = () => {
        dispatch(increment());
    }

    const onDecrement = () => {
        dispatch(decrement());
    }

    return (
        <section>
            <div className="counter">
                <h3 className='value'>{value}</h3>
                <button className='btn' onClick={onIncrement}>+</button>
                <button className='btn' onClick={onDecrement}>-</button>
            </div>
        </section>
    )
}