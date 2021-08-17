import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCounterRedux, increment, decrement } from '../features/counterRedux/counterReduxSlice'

export const CounterRedux = () => {
    const value = useSelector(selectCounterRedux);
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